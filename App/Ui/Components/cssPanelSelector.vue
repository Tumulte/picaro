<script>
    import {colorHelper} from "../colorHelper";

    import {cssToJson, isHexColor, jsonToCss} from "../../utils";
    import cssGenerator from "../cssGenerator";
    import messages from "../../Messages/messages.json";

    const template = require("./cssPanelSelector.pug").default;

    const colorUtils = new colorHelper();
    let generateCss = false;
    const getColorFromCollection = function (instance, data) {
        if (
            ["dominant", "warning", "alert", "info", "gray", "success"].includes(
                data[0]
            )
        ) {
            const index = `${data[0]}SubCollection`;
            console.debug(data, index, "tsrtsrt");

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
        data: function () {
            return {
                currentSelectorProperty: {},
                newSelector: "",
                newProperty: {},
                colorMapping: {},
                warningMessage: ""
            };
        },
        template: template,
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
                value = "";
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
        mounted: function () {
            generateCss.apply(
                this.selectorCollection,
                this.colorMapping,
                this.ratioCollection
            );
        },
        computed: {
            colorCollection: function () {
                return this.$store.getters.colorCollection;
            },
            ratioCollection: function () {
                return this.$store.getters.ratioCollection;
            },
            selectorCollection: function () {
                generateCss = new cssGenerator.generateCss(
                    this.$store.getters.selectorCollection
                );
                return this.$store.getters.selectorCollection;
            },
            selectorIndex: function () {
                return this.$store.getters.selectorIndex;
            }
        },
        //TODO : that's confusing to have the master style updater here
        updated: function () {
            this.$nextTick(() => {
                generateCss.apply(
                    this.selectorCollection,
                    this.colorMapping,
                    this.ratioCollection
                );
            });
        },
        watch: {
            ratioCollection() {
                generateCss.apply(
                    this.selectorCollection,
                    this.colorMapping,
                    this.ratioCollection
                );
            }
        }
    };
</script>