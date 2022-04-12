<template lang="pug">
div
    template(v-for="(data, tag) in styleSet.ratioCollection")
        div(class="rf-ratio--text-example" @click="storeRatioCoordinate(tag)")
            component(v-if="tag !== 'html'" :is="tag" class="--inner-text-example") …
    div(class="rf-ratio--text-example __base"   @click="storeRatioCoordinate('html')") …
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "RatioPalette",
  computed: {
    ...mapGetters(["styleSet", "loaded"])
  },
  methods: {
    storeRatioCoordinate(coordinates) {
      this.$store.commit("currentRatio", coordinates);
      this.$store.dispatch("triggerNewStyle");
    }
  }
};
</script>
<style scoped>
.rf-ratio--text-example {
  overflow: hidden;
  &:nth-child(odd) {
    border-left: 15px #555555 solid;
    background: #555;
  }
  &:nth-child(even) {
    border-left: 15px #aaa solid;
    background: #aaa;
  }
  &.__base {
    background-color: var(--secondary);
    border-left: 15px var(--secondary) solid;
  }
}
</style>
