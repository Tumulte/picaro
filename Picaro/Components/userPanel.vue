<template lang="pug">

</template>
<script>


    export default {
        props: ["miniVariant"],

        /**
         * @type {function}
         */
        data: function () {
            return {
                selectedTag: ""
            };
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
        },
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
        }
    };
</script>
