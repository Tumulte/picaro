<template lang="pug">
div(v-if="loaded && colorSet?.colorCollection")
    div
      template(v-for="(subColor, index) in colorSet.colorCollection.dominantSubCollection" :key="index")
        v-card(@click="storeColorCoordinate(['dominant', index])" v-if="!colorIsHidden('dominant', index)" class="pa-3" v-bind:style="bgColor(subColor)")
    div(v-for="(color, index) in colorSet.colorCollection.combinationCollection" :key="index" class="sub-color-parameters")
      template(v-for="(subColor, subIndex) in color.subCombination" :key="subIndex")
        v-card(@click="storeColorCoordinate([index, subIndex])" v-if="!colorIsHidden('sub', subIndex, index)" :style="bgColor(subColor)" class="pa-3" data-jest="sub-combination-square")
</template>
<script>
import { mapGetters } from 'vuex'
import { RfColorHelper } from '@picaro/colorhelper'
const colorUtils = new RfColorHelper()

export default {
  name: 'ColorPalette',
  computed: {
    ...mapGetters(['colorSet', 'styleSet', 'settings', 'loaded']),
  },
  methods: {
    bgColor: function (color) {
      return `background:${colorUtils.getString(color)}`
    },
    storeColorCoordinate(coordinates) {
      this.$store.commit('currentColor', coordinates)
      this.$store.dispatch('triggerNewStyle')
    },
    colorIsHidden(location, index, subIndex) {
      let hiddenCombination
      if (location === 'dominant') {
        hiddenCombination = this.styleSet.hiddenCombination[location]
      } else if (location === 'sub') {
        hiddenCombination = this.styleSet.hiddenCombination[location][subIndex]
      }
      return hiddenCombination?.find((item) => item === index) !== undefined
    },
  },
}
</script>
