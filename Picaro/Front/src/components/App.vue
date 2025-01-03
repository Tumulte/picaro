<script lang="ts" setup>
import axios, {AxiosResponse} from "axios";
import {SettingsStore} from "@types";
import {useSettingsStore} from "@stores/settings";
import {ref} from "vue";

import('../../../FrontStatic/src/stylesFront.pcss').catch((error) => {
  console.error(error)
})


const settingsStore = useSettingsStore()

const settingsLoaded = ref(false)


axios.get('/api/setup/all').then((res: AxiosResponse<SettingsStore>) => {
  settingsStore.allSettings = res.data.allSettings
  settingsStore.allStyleSets = res.data.allStyleSets
  settingsLoaded.value = true
}).catch((error) => {
  console.error(error)
})


</script>

<template>
  <router-view v-if="settingsLoaded" />
</template>

<style scoped>

</style>
