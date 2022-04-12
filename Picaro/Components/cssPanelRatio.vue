<template lang="pug">

</template>
<script>
import {mapActions, mapGetters} from "vuex";

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
