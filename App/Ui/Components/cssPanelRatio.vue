<script>
    import Vue from "vue";

    const template = require("./cssPanelRatio.pug").default;

    export default {
        template: template,

        /**
         * @type {function}
         */
        data: function () {
            return {
                selectedTag: ""
            };
        },
        props: ["miniVariant"],
        methods: {
            makeHtml(text, tag) {
                return `<${tag}>${text}</${tag}>`;
            },
            selectTag(tag) {
                if (this.selectedTag === tag) {
                    this.selectedTag = "";
                }
                this.selectedTag = tag;
            },
            updateTextParams(property, selector, unit) {
                if (!this.selectorCollection[selector]) {
                    this.$store.dispatch("addSelector", selector);
                }
                this.$store.dispatch("addProperty", {
                    selector: selector,
                    property: property,
                    value: `${this.ratioCollection[selector][property]}${unit ? unit : "rem"}`
                });
            },
            storeRatioCoordinate: function (coordinates) {
                this.$store.commit("currentRatio", coordinates);
            }
        },
        computed: {
            selectorCollection() {
                return this.$store.getters.selectorCollection;
            },
            ratioCollection: {
                get() {
                    return this.$store.getters.ratioCollection;
                },
                set(newValue) {
                    this.$store.commit("ratioCollection", newValue);
                }
            }
        }
    };

</script>
