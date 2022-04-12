<script setup lang="ts">
import {computed, ref, watch} from "vue";
import {Settings} from "@types";
import {useRoute} from "vue-router";
import Alert from "./utils/alertModal.vue";
import axios from "axios";
import {useSettingsStore} from '@stores/settings'
import {useRouter} from "vue-router";

const router = useRouter()
const settingsStore = useSettingsStore()
const route = useRoute()

const settingsLoaded = ref(false)

const selected = computed(() => {
  return (name: string) => {
    return route.name === name
  }
})
axios.get('/api/setup/all').then(res => {
  settingsStore.allSettings = res.data.allSettings
  settingsStore.allStyleSets = res.data.allStylesets
  settingsLoaded.value = true
})

function selectApp(event: string) {
  if (event !== 'none') {
    router.push({name: route.name || 'index', params: {appId: event}})
  }
}

function reloadSettings() {
  axios.get('/api/setup/all').then(res => {
    settingsStore.allSettings = res.data.allSettings
    settingsStore.allStyleSets = res.data.allStylesets
  })
}


// region Watch
watch(() => settingsStore.allSettings, () => {
  if (route.params.appId && settingsStore.allSettings.length > 0) {
    settingsStore.currentAppSettings = settingsStore.allSettings.find((app: Settings) => app.id === route.params.appId)
  }
})
//endregion
watch(() => route.params.appId, () => {
  if (route.params.appId) {
    settingsStore.currentAppSettings = settingsStore.allSettings.find((app: Settings) => app.id === route.params.appId)
  }
})
</script>
<template>
  <div class="picaro-app text--primary">
    <nav class="pic-tabs">
      <img src="/logo2.svg" class="logo" alt="logo" width="50">
      <v-tabs :model-value="route.name">
        <v-tab
          value="app"
          to="/app"
        >
          App Config
        </v-tab>
        <template v-if="settingsStore.allSettings.length > 0 && settingsStore.currentAppSettings">
          <v-tab
            v-if="settingsStore.currentAppSettings"
            :class="{selected: selected('model')}"
            to="/data"
            value="data"
          >
            Data
          </v-tab>
          <v-tab
            v-if="settingsStore.currentAppSettings"
            :class="{selected: selected('layout')}"
            to="/layout"
            value="layout"
          >
            Layout
          </v-tab>
          <v-tab
            v-if="settingsStore.currentAppSettings"
            :class="{selected: selected('style')}"
            to="/style"
            value="style"
          >
            Style
          </v-tab>
          <v-select
            label="select app"
            :model-value="route.params.appId"
            :items="settingsStore.allSettings"
            item-value="id"
            item-title="applicationName"
            @update:model-value="selectApp"
          />
        </template>
      </v-tabs>
    </nav>
    <div class="pic-container">
      <router-view v-if="settingsLoaded" :key="$route.fullPath" @reloadSettings="reloadSettings()" />
    </div>
    <Alert />
  </div>
</template>

<style scoped>
</style>
