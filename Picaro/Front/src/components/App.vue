<script lang="ts" setup>
import axios, {AxiosResponse} from "axios";
import {SettingsStore} from "@types";
import {useSettingsStore} from "@stores/settings";
import {ref} from "vue";

const settingsStore = useSettingsStore()

const settingsLoaded = ref(false)


if (process.env.NODE_ENV === 'development') {
  axios.get('/api/setup/all').then((res: AxiosResponse<SettingsStore>) => {
    settingsStore.allSettings = res.data.allSettings
    settingsStore.allStyleSets = res.data.allStyleSets
    settingsLoaded.value = true
  })
} else {
  getBuiltData()
}

async function getBuiltData() {
  const settings = await import(`@data/build/settings.json`)
  const styleset = await import(`@data/build/styleset.json`)

  settingsStore.allSettings = settings.default
  settingsStore.allStyleSets = styleset.default
  settingsLoaded.value = true
}
</script>

<template>
  <router-view v-if="settingsLoaded" />
</template>

<style scoped>

</style>
