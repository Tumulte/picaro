<template lang="pug">
    v-container(v-if="loaded" class="rf-toolbar-container")
        v-row(class="reset-margin-bottom")
            v-col(cols="8" class="pa-0 rf-ratio-text-container")
                template(v-for="(data, tag) in styleSet.ratioCollection")
                    div(class="rf-ratio--text-example" :class="{'--selected-tag': tag === selectedTag}"  @click="selectTag(tag)" )
                        component(v-if="tag !== 'html'" :is="tag" class="--inner-text-example") {{tag}}
                div(class="rf-ratio--text-example" ) Size for base text
            v-col(cols="4" class="pa-0" v-if="selectedTag && selectedTag !== 'p'")
                v-text-field(type="number" step="0.1" data-jest="ratio-fs" label="Font size" v-model="styleSet.ratioCollection[selectedTag]['font-size']" @input="updateTextParams('font-size', selectedTag)")
                v-text-field(type="number" step="0.1" data-jest="ratio-lh" label="Line height" v-model="styleSet.ratioCollection[selectedTag]['line-height']" @input="updateTextParams('line-height', selectedTag)")
                v-text-field(type="number" step="0.1" data-jest="ratio-mb" label="Margin bottom" v-model="styleSet.ratioCollection[selectedTag]['margin-bottom']" @input="updateTextParams('margin-bottom',selectedTag)")
                v-text-field(type="number" step="0.1" data-jest="ratio-mt" label="Margin top" v-model="styleSet.ratioCollection[selectedTag]['margin-top']" @input="updateTextParams('margin-top',selectedTag)")
        v-text-field(type="number" label="font-size" data-jest="main-font-size" v-model="styleSet.ratioCollection.html['font-size']" @input="updateTextParams('font-size','html', 'px !important')")
        v-text-field(type="number" label="line height"  step="0.1" data-jest="main-line-height" v-model="styleSet.ratioCollection.html['line-height']" @input="updateTextParams('line-height','html', 'rem !important')")
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      selectedTag: ""
    };
  },
  methods: {
    ...mapActions(["triggerNewStyle"]),
    selectTag(tag) {
      if (this.selectedTag === tag) {
        this.selectedTag = "";
      }
      this.selectedTag = tag;
    },
    updateTextParams(property, selector, unit) {
      this.$store.dispatch("addProperty", {
        selector: selector,
        property: property,
        value: `${this.styleSet.ratioCollection[selector][property]}${
          unit ? unit : "rem"
        }`
      });
      this.triggerNewStyle();
    }
  },
  computed: {
    ...mapGetters(["styleSet", "loaded"])
  }
};
</script>
<style scoped>
.rf-ratio--text-example {
  overflow: hidden;

  &:nth-child(odd) {
    border-left: 15px #555555 solid;
  }
  &:nth-child(even) {
    border-left: 15px #aaa solid;
  }
}
#rf-content-container {
  .--selected-tag {
    background: var(--secondary);
    color: #fff;
    .--inner-text-example {
      background: var(--secondaryDark);
    }
  }
  .--inner-text-example {
    background: #eee;
  }
}
.reset-margin-bottom {
  margin-bottom: 0;
}
</style>
