<template lang="pug" v-if="false">
    v-form(method="post" :key="cssPanelIndex" @submit.prevent="submit($event)")
        v-container
            v-card(class="_container")
                v-select(:items="styleSetCollection" v-model="selectedStyleSet" item-value="id" item-text="setName" label="Style Set" @change="updateStyleSet()" return-object=true)
            v-card(class="_container")
                v-card-title Fonts
                v-radio-group(v-model="styleSet.fontOrigin")
                    v-radio(label="Google Fonts" name="fontOrigin" value="google")
                    v-radio(label="Local Fonts" name="fontOrigin" value="local")
                v-card(class="_container")
                    v-select( v-model="styleSet.fontFamilyMain" label="Main Font" :items="fontCollection" item-text="family" item-value="family"  @change="updateCssFont('fontFamilyMain')")
                    v-select( v-model="styleSet.fontFamilyAlt" label="Alternative Font" item-text="family" item-value="family" :items="fontCollection" @change="updateCssFont('fontFamilyAlt')")
                    v-select( v-model="styleSet.fontFamilyTitle" label="Title Font" item-text="family" item-value="family" :items="fontCollection" @change="updateCssFont('fontFamilyTitle')")
                    input(type="text" name="id" v-bind:value="styleSet.id")
                    input(type="text" v-model="styleSet.fontFamilyMain" name="fontFamilyMain")
                    input(type="text" v-model="styleSet.fontFamilyAlt" name="fontFamilyAlt")
                    input(type="text" v-model="styleSet.fontFamilyTitle" name="fontFamilyTitle")

            v-card(class="_container")
                v-text-field(type="text" class="css-panel__input" label="Config name" name="setName" v-model="styleSet.setName")
                v-card-actions
                    v-btn(text=true class="_container"  v-if="styleSet.id !== 'default'" @click.prevent="saveStyleSet()") Save
                    v-btn(text=true @click.prevent="saveNewStyleSet()") Save a new Style Set
                v-card-actions
                    v-btn(text=true class="_container"  @click.prevent="deleteStyleSet()"  v-if="styleSet.id !== 'default'" type="button") Delete Style Set

</template>

<script>
import settings from "../../../rougeSettings.json";
import {generateColorSet} from "../colorGenerator";
import axios from "axios";
import shortid from "shortid";
import {mapActions} from "vuex";
import {webSafeFonts} from "../../utils";

const webSafeFontsFormated = webSafeFonts.map(item => {
    return {
        family: item
    };
});


const fontTypes = ["fontFamilyMain", "fontFamilyTitle", "fontFamilyAlt"];

export default {
    name: "mainPanel",
    data() {
        return {
            fontCollection: [],
            styleSetCollection: [],
            selectedStyleSet: {},
            googleFontCollection: [],
            localFontCollection: [],
            loaded: false
        };
    },
    //TODO : organize that thing
    methods: {
        ...mapActions(["triggerNewStyle", "addAlert", "awaitConfirmation"]),
        applyStyleSet: function (data, callback) {
            this.styleSet = data;

            const colorSet = new generateColorSet(data.dominant);

            colorSet.generate(
                data.colorParameterCollection,
                parseInt(data.variationLightAmt),
                parseInt(data.variationSatAmt)
            );
            this.$store.commit("loaded", true);
            this.$store.commit("colorSet", colorSet);

            this.$store.commit("styleSet", data);

            this.updateFontCollection();
            this.updateAllCssFont();
            this.toggleIndex("cssPanelIndex");
            if (callback) {
                callback();
            }
        },

        updateAllCssFont: function () {
            for (let i = 0; i < fontTypes.length; i++) {
                this.updateCssFont(fontTypes[i]);
            }
        },
        updateCssFont: function (fontType) {
            if (this.styleSet[fontType] === "none") {
                return;
            }
            if (fontType === "fontFamilyMain") {
                this.$store.dispatch("updateStyles", {
                    selector: "body",
                    property: "font-family",
                    value: this.styleSet[fontType]
                });
            } else if (fontType === "fontFamilyTitle") {
                const header = "h1, h2, h3, h4, h5, h6";
                this.$store.dispatch("updateStyles", {
                    selector: header,
                    property: "font-family",
                    value: this.styleSet[fontType]
                });
            } else if (fontType === "fontFamilyAlt") {
                this.$store.dispatch("updateStyles", {
                    selector: ".__altfont",
                    property: "font-family",
                    value: this.styleSet[fontType]
                });
            }
        },
        //TODO : remove
        stringify: function (jsonObject) {
            return JSON.stringify(jsonObject);
        },
        updateIndex: function () {
            this.cssPanelIndex = this.cssPanelIndex === 1 ? 0 : 1;
        },
        toggleIndex: function (index) {
            this[index] = this[index] === 1 ? 0 : 1;
        },
        updateFontCollection() {
            if (this.styleSet.fontOrigin === "google") {
                this.fontCollection = this.googleFontCollection;
            } else if (this.styleSet.fontOrigin === "local") {
                this.fontCollection = this.localFontCollection;
            }
            this.fontCollection = [...webSafeFontsFormated, ...this.fontCollection];
        },
        updateStyleSet: function () {
            this.applyStyleSet(this.selectedStyleSet);
        },
        submit: function (event) {
            if (this.styleSet.id !== "default") {
                this.checkSave(event);
            } else {
                this.saveNew(event);
            }
        },
        async saveStyleSet() {
            console.debug("tata");
            await this.awaitConfirmation({
                text: "Are you sure you want to overwrite this style set ?",
                type: "warning"
            });
            axios
                .post("/appapi/overwrite", this.styleSet)
                .then(() => {
                    this.addAlert({
                        type: "success",
                        text: "Style Set saved successfully"
                    });
                    this.getAllStyleSet();
                    this.toggleIndex("cssPanelIndex");
                    document.getElementById("_admin-form-ext-submit").click();

                })
                .catch(errors => {
                    this.addAlert({
                        type: "error",
                        text: `Request failed.  Returned status of ${errors}`
                    });
                });


        },
        async deleteStyleSet() {
            await this.awaitConfirmation({
                text: "Are you sure you want to delete this style set ?",
                type: "warning"
            });
            axios
                .delete(`/appapi/${this.styleSet.id}`)
                .then(() => {
                    this.addAlert({
                        type: "success",
                        text: "This style set  was deleted"
                    });

                    this.getAllStyleSet();
                    this.applyStyleSet(this.styleSetCollection[0]);
                    document.getElementById("_admin-form-ext-submit").click();
                })
                .catch(errors => {
                    this.addAlert({
                        type: "error",
                        text: errors
                    });
                });
        },
        saveNewStyleSet() {
            const id = shortid.generate();
            const previousID = this.styleSet.id;
            this.styleSet.id = id;
            axios
                .post("/appapi/", this.styleSet)
                .then(() => {
                    this.addAlert({
                        type: "success",
                        text: `${this.styleSet.setName} saved successfully`
                    });
                    document.getElementById("_admin-form-ext-submit").click();

                })
                .catch(errors => {
                    this.addAlert({
                        type: "error",
                        text: `Request failed.  Returned status of ${errors}`
                    });
                    this.styleSet.id = previousID;
                });
            this.getAllStyleSet();
        },
        getAllStyleSet() {
            axios
                .get("/appapi/all")
                .then(response => {
                    this.styleSetCollection = response.data;
                })
                .catch(error => {
                    this.addAlert({
                        type: "error",
                        text: `Request failed.  Returned status of ${error}`
                    });
                });
        }
    },
    watch: {
        "styleSet.fontOrigin"() {
            this.updateFontCollection();
        }
    },
    mounted() {
        // TODO : replace with axios for consistency
        //Google Fonts
        const request = new XMLHttpRequest();
        request.open(
            "GET",
            `https://www.googleapis.com/webfonts/v1/webfonts?sort=alpha&key=${settings.googleFontKey}`
        );
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    const data = JSON.parse(request.responseText);
                    this.googleFontCollection = data.items;
                    this.updateFontCollection();
                }
            }
        };
        request.send();
        //Local Fonts
        if (process.env.ISTEST) {
            return;
        }
        axios
            .get("/appapi/fonts")
            .then(response => {
                this.localFontCollection = response.data;
                this.updateFontCollection();
            })
            .catch(error => {
                this.localFontCollection = [];
                this.addAlert({type: "error", text: error});
            });
        axios
            .get("/appapi")
            .then(response => {
                this.applyStyleSet(response.data);
                this.$store.commit("styleSetLoaded", true);
                this.triggerNewStyle();
            })
            .catch(error => {
                console.debug("error", error);
                this.addAlert({
                    type: "error",
                    text: `Request failed.  Returned status of ${error}`
                });
            });
        this.getAllStyleSet();
    },
    computed: {
        styleSet: {
            get() {
                return this.$store.getters.styleSet;
            },
            set(value) {
                this.$store.commit("styleSet", value);
            }
        },
        cssPanelIndex: {
            get() {
                return this.$store.getters.cssPanelIndex;
            }
            ,
            set(newValue) {
                this.$store.commit("cssPanelIndex", newValue);
            }
        }
    }
}
;
</script>