<template lang="pug">
    v-expansion-panels
        warning-component( :warning-message="warningMessage")
        v-expansion-panel(v-for="(propertyCollection, selector) in selectorCollection" :key="selector")
            v-row(class="px-3")
                v-col(class="px-3")
                    v-text-field(hide-details=true outlined=true @click:append="deleteSelector(selector)" @keypress.enter.prevent.stop="saveEdit({selector:selector}, $event)" :value="jsonToCss(selector)" @change="changeSelector($event, selector)" append-icon="mdi-delete-outline")
                v-col(cols="2")
                    v-expansion-panel-header(class="pa-0")
            v-expansion-panel-content(class="pa-0")
                v-row(class="align-items-center" v-for="(value, property) in propertyCollection" :key="property" v-on:click="storeSelectorAndProperty(selector, property)" )
                    v-col(cols="9")
                        v-row
                            v-text-field(@keypress.enter.prevent.stop="saveEdit({selector:selector, property:property}, $event)" )
                        v-row
                            span(v-if="property.type === 'ratio'") {{makeRatio(property)}}
                            span(v-else contenteditable=true @keypress.enter.prevent.stop="saveEdit({selector:selector, property:property, value: true} , $event)" v-html="getProperty(value)")

                    v-col(cols="3")
                        v-btn(class="w-auto pa-0" text=true @click="deleteProperty(selector,property)")
                            v-icon mdi-delete-outline

                v-text-field(type="text" label="Add new property" class="css-panel__input"  @keyup.enter="addProperty($event.target.value,selector)")
        v-text-field(label="Add new selector" type="text"  class="css-panel__input"  @keyup.enter="addSelector($event.target.value)")
</template>
<script>
import {colorHelper} from "../colorHelper";

import {cssToJson, isHexColor, jsonToCss} from "../../utils";
import {generateCSS} from "../cssGenerator";
import messages from "../../Messages/messages.json";
import {mapGetters} from "vuex";


const colorUtils = new colorHelper();
const getColorFromCollection = function (instance, data) {
    if (
        ["dominant", "warning", "alert", "info", "gray", "success"].includes(
            data[0]
        )
    ) {
        const index = `${data[0]}SubCollection`;

        return instance.colorCollection[index][data[1]];
    } else if (
        data[0] === undefined ||
        data[1] === undefined ||
        !instance.colorCollection.combinationCollection[data[0]] // important for when you reduce the number of colors
    ) {
        return "";
    } else {
        return instance.colorCollection.combinationCollection[data[0]]
            .subCombination[data[1]];
    }
};
export default {
    name: "selectorPanel",
    data() {
        return {
            currentSelectorProperty: {},
            newSelector: "",
            newProperty: {},
            colorMapping: {},
            warningMessage: ""
        };
    },
    methods: {
        storeSelectorAndProperty: function (selector, property) {
            selector = cssToJson(selector);
            this.$store.commit("currentSelector", {
                selector: selector,
                property: property
            });
        },
        changeSelector(event, selector) {
            this.$store.dispatch("updateSelector", {
                old: selector,
                new: cssToJson(event)
            });
        },
        makeRatio(property) {
            return (
                `${Math.round(
                    (parseFloat(this.ratioCollection[property.data].lineHeight) +
                        parseFloat(this.ratioCollection[property.data].marginTop) +
                        parseFloat(this.ratioCollection[property.data].marginBottom)) *
                    100
                ) /
                100}rem`
            );
        },
        addSelector: function (value) {
            value = cssToJson(value);

            if (value in this.selectorCollection) {
                this.warningMessage = {
                    text: messages.warnings.duplicateKey,
                    type: "warning",
                    textVariable: value
                };
            } else {
                this.$store.dispatch("addSelector", value);
            }
        },
        addProperty: function (value, selector) {
            value = cssToJson(value);
            selector = cssToJson(selector);
            if (value in this.selectorCollection[selector]) {
                this.warningMessage = {
                    text: messages.warnings.duplicateKey,
                    type: "warning",
                    textVariable: value
                };
            } else {
                this.$store.dispatch("addProperty", {
                    selector: selector,
                    property: value
                });
                this.$store.commit("currentSelector", {
                    selector: selector,
                    property: value
                });

                this.$store.commit("selectorIndex", value + selector);
            }
        },
        getProperty: function (property) {
            if (isHexColor(property)) {
                return (
                    `<div style="width:10px; height:10px; background:${property}"></div>`
                );
            } else if (property.type === "color") {
                let selectedColor = getColorFromCollection(this, property.data);

                selectedColor = colorUtils.hslToHex(selectedColor).getString();
                this.colorMapping[JSON.stringify(property.data)] = selectedColor;
                return (
                    `<div style="width:10px; height:10px; background:${selectedColor}"></div>`
                );
            } else if (property.type === "ratio") {
                return this.makeRatio(property);
            } else {
                return property;
            }
        },
        deleteProperty: function (selector, property) {
            this.warningMessage = {
                text: "Are you sure you want to delete ?",
                type: "warning",
                callback: () => {
                    this.$delete(this.selectorCollection[selector], property);
                }
            };
        },
        deleteSelector: function (selector) {
            this.warningMessage = {
                text: "Are you sure you want to delete %s and all it's properties ?",
                type: "warning",
                textVariable: selector,
                callback: () => {
                    this.$delete(this.selectorCollection, selector);
                }
            };
        },
        jsonToCss: function (text) {
            return jsonToCss(text);
        },
        saveEdit: function (coordinates, event) {
            const value = cssToJson(event.target.innerHTML);
            if (coordinates.value) {
                this.$set(
                    this.selectorCollection[coordinates.selector],
                    coordinates.property,
                    event.target.innerHTML
                );
            } else if (coordinates.property) {
                this.$set(
                    this.selectorCollection[coordinates.selector],
                    value,
                    this.selectorCollection[coordinates.selector][coordinates.property]
                );
                this.$delete(
                    this.selectorCollection[coordinates.selector],
                    coordinates.property
                );
            } else {
                this.$set(
                    this.selectorCollection,
                    value,
                    this.selectorCollection[coordinates.selector]
                );
                this.$delete(this.selectorCollection, coordinates.selector);
            }
        }
    },
    computed: {
        ...mapGetters([
            "styleSet",
            "colorCollection",
            "selectorCollection",
            "selectorIndex",
            "ratioCollection"
        ])
    },
    //TODO : that's confusing to have the master style updater here
    updated: function () {
        this.$nextTick(() => {
            document.getElementById("rf-live-styles").innerHTML = generateCSS(this.styleSet);
        });
    },
    watch: {
        styleSetLoaded() {
            generateCSS(this.styleSet);

        }
    },
    created() {
        document.head.insertAdjacentHTML("beforeend", "<style type='text/css' id='rf-live-styles' ></style>");
    }

};
</script>