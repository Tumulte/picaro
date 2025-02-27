<script lang="ts" setup>
// @ts-nocheck
import {webSafeFonts} from "@utils/const";
import {useSettingsStore} from "@stores/settings";
import {computed, ref} from "vue";
import {FontParams} from "@types";

const settingsStore = useSettingsStore()
const googleFontCategories = ref<string>("")

const emit = defineEmits(['reloadSettings'])

const props = defineProps<{
  localFonts: { name: string, src: string[] }[]
  googleFonts: { family: string, category: string }[]
  getGoogleFontType: string[]
  type: string
}>()


const font = ref<FontParams>(settingsStore.currentStyleSet[`fontFamily${props.type}`])

const fontOrigin = ['webSafe', 'google', 'local']

const getFontList = computed(() => {
  if (font.value.origin === 'google') {
    return props.googleFonts.filter((font: {
      category: string
    }) => (!googleFontCategories.value || font.category === googleFontCategories.value))
  } else if (font.value.origin === 'local') {
    return props.localFonts
  } else {
    return webSafeFonts.map((webFont) => ({family: webFont}))
  }
})

</script>
<template>
  <v-row>
    <v-col cols="6">
      <v-select
        v-model="font.origin"
        :items="fontOrigin"
        density="compact"
        label="Font Origin"
      />
    </v-col>
    <v-col cols="6">
      <v-combobox
        :items="getFontList"
        :label="`Font ${type}`"
        :model-value="font.font"
        density="compact"
        item-title="family"
        @update:modelValue="font.font = $event; emit('reloadSettings')"
      />

      <v-select
        v-if="settingsStore.currentStyleSet[`fontFamily${type}`].origin === 'google'"
        v-model="googleFontCategories"
        :items="getGoogleFontType"
      />
    </v-col>
  </v-row>
</template>
