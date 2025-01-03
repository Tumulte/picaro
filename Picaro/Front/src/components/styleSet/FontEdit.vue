<script lang="ts" setup>
import {computed, ref} from "vue";
import {googleKey} from "@utils/const";
import axios from "axios";
import FontSelectForm from "@components/styleSet/FontSelectForm.vue";

const emit = defineEmits(['reloadSettings'])

const localFonts = ref([])
const googleFonts = ref([])

axios.get('/api/localfonts').then((response) => {
  localFonts.value = response.data
}).catch((error) => console.error(error))

axios.get(`https://www.googleapis.com/webfonts/v1/webfonts?key=${googleKey}`).then((response) => {
  googleFonts.value = response.data.items
}).catch((error) => console.error(error))

const getGoogleFontType = computed(() => {
  return googleFonts.value.reduce((acc: string[], font: { category: string }) => {
    if (!acc.includes(font.category)) {
      acc.push(font.category)
    }
    return acc
  }, [])
})


const fontType = ['Title', 'Main', 'Alt']


</script>

<template>
  <v-row
    v-for="type in fontType"
    :key="type"
    class="pic-font-example"
  >
    <v-col cols="8">
      <FontSelectForm
        v-if="localFonts.length > 0 && googleFonts.length > 0"
        :get-google-font-type="getGoogleFontType"
        :google-fonts="googleFonts"
        :local-fonts="localFonts"
        :type="type"
        @reload-settings="emit('reloadSettings')"
      />
    </v-col>
    <v-col cols="4">
      <div :key="type" :class="`pic-font-${type.toLowerCase()}`">
        <component :is="type === 'Title' ? 'h2' : 'span'">
          lorem ipsum dolor sit amet
        </component>
      </div>
    </v-col>
  </v-row>
</template>
<style>
.pic-font-title {
  font-family: var(--font-title), sans;
}

.pic-font-main {
  font-family: var(--font-main), sans;
}

.pic-font-alt {
  font-family: var(--font-alt), sans;
}
</style>

