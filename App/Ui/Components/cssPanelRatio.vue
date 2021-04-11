<template lang="pug">
    v-container(v-if="loaded")
        v-row
            v-col(cols="8" class="pa-0 -ratio-text-container rf-content-container")
                template(v-for="(data, tag) in styleSet.ratioCollection")
                    div(class="-ratio-container" @click="storeRatioCoordinate(tag)"  :class="{'__mini': miniVariant}")
                        component(v-if="tag !== 'html'" :is="tag" @click="storeRatioCoordinate(tag)") {{data.text}}
                            v-btn(v-if="!miniVariant" class="-ratio-container-button" @click.stop="selectTag(tag)" text=true) edit
            v-col(cols="4" class="pa-0" v-if="selectedTag && selectedTag !== 'p' && !miniVariant")
                v-text-field(type="number" step="0.1" data-jest="ratio-fs" label="Font size" v-model="styleSet.ratioCollection[selectedTag]['font-size']" @input="updateTextParams('font-size', selectedTag)")
                v-text-field(type="number" step="0.1" data-jest="ratio-lh" label="Line height" v-model="styleSet.ratioCollection[selectedTag]['line-height']" @input="updateTextParams('line-height', selectedTag)")
                v-text-field(type="number" step="0.1" data-jest="ratio-mb" label="Margin bottom" v-model="styleSet.ratioCollection[selectedTag]['margin-bottom']" @input="updateTextParams('margin-bottom',selectedTag)")
                v-text-field(type="number" step="0.1" data-jest="ratio-mt" label="Margin top" v-model="styleSet.ratioCollection[selectedTag]['margin-top']" @input="updateTextParams('margin-top',selectedTag)")
        v-text-field(type="number" label="font-size" data-jest="main-font-size" v-model="styleSet.ratioCollection.html['font-size']" @input="updateTextParams('font-size','html', 'px !important')")
        v-text-field(type="number" label="line height" data-jest="main-line-height" v-model="styleSet.ratioCollection.html['line-height']" @input="updateTextParams('line-height','html', 'px !important')")
</template>
<script>

import {mapActions, mapGetters} from "vuex";

export default {

    /**
     * @type {function}
     */
    data() {
        return {
            selectedTag: ""
        };
    },
    props: ["miniVariant"],
    methods: {
        ...mapActions(["triggerNewStyle"]),
        selectTag(tag) {
            if (this.selectedTag === tag) {
                this.selectedTag = "";
            }
            this.selectedTag = tag;
        },
        updateTextParams(property, selector, unit) {
            if (!this.styleSet.selectorCollection[selector]) {
                this.$store.dispatch("addSelector", selector);
            }
            this.$store.dispatch("addProperty", {
                selector: selector,
                property: property,
                value: `${this.styleSet.ratioCollection[selector][property]}${unit ? unit : "rem"}`
            });
            this.triggerNewStyle();
        },
        storeRatioCoordinate(coordinates) {
            this.$store.commit("currentRatio", coordinates);
            this.$store.dispatch("triggerNewStyle");
        }
    },
    computed: {
        ...mapGetters(["styleSet", "loaded"]),
    }
};

</script>
