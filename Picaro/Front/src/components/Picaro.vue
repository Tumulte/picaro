<script setup lang="ts">
import {computed, watch} from "vue";
import {Settings, SettingsStore} from "@types";
import {useRoute} from "vue-router";
import Alert from "./utils/alertModal.vue";
import axios, {AxiosResponse} from "axios";
import {useSettingsStore} from '@stores/settings'
import {useRouter} from "vue-router";

(() => import('../style.pcss'))()

const route = useRoute()
const router = useRouter()

const settingsStore = useSettingsStore()

const selected = computed(() => {
  return (name: string) => {
    return route.name === name
  }
})

function selectApp(event: string | string[]) {
  if (event !== 'none') {
    router.push({name: route.name || 'index', params: {appId: event}})
  }
}

function reloadSettings() {
  axios.get('/api/setup/all').then((res: AxiosResponse<SettingsStore>) => {
    settingsStore.allSettings = res.data.allSettings
    settingsStore.allStyleSets = res.data.allStyleSets
  })
}

watch(() => settingsStore.allSettings, () => {
  if (route.params.appId && settingsStore.allSettings.length > 0) {
    settingsStore.currentAppSettings = settingsStore.allSettings.find((app: Settings) => app.id === route.params.appId)
  }
})

watch(() => route.params.appId, () => {
  if (route.params.appId) {
    settingsStore.currentAppSettings = settingsStore.allSettings.find((app: Settings) => app.id === route.params.appId)
  }
}, {immediate: true})
</script>

<template>
  <v-app id="picaro-app" class="picaro-app text--primary">
    <nav class="pic-tabs">
      <img src="/images/logo2.svg" class="logo" alt="logo" width="50">
      <v-tabs :model-value="route.name">
        <v-tab
          value="app"
          to="/admin/app"
        >
          App Config
        </v-tab>
        <template v-if="settingsStore.allSettings.length > 0 && settingsStore.currentAppSettings">
          <v-tab
            v-if="settingsStore.currentAppSettings"
            :class="{selected: selected('model')}"
            to="/admin/data"
            value="data"
          >
            Data
          </v-tab>
          <v-tab
            v-if="settingsStore.currentAppSettings"
            :class="{selected: selected('layout')}"
            to="/admin/layout"
            value="layout"
          >
            Layout
          </v-tab>
          <v-tab
            v-if="settingsStore.currentAppSettings"
            :class="{selected: selected('style')}"
            to="/admin/style"
            value="style"
          >
            Style
          </v-tab>
          <v-select
            label="select app"
            :model-value="route.params.appId"
            :items="settingsStore.allSettings"
            item-value="id"
            variant="solo-filled"
            item-title="applicationName"
            @update:model-value="selectApp"
          />
        </template>
      </v-tabs>
    </nav>
    <div class="pic-main-container">
      <router-view @reloadSettings="reloadSettings()" />
    </div>
    <Alert />
  </v-app>
</template>

<style scoped lang="postcss">
@import url("../style.pcss");

</style>
