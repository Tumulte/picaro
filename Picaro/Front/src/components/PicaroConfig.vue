<script lang="ts" setup>
import {computed, reactive, ref, watch} from "vue";
import axios from "axios";
import {useSettingsStore} from '@stores/settings'
import {useUtilsStore} from "@stores/utils";
import {helpers, required} from "@vuelidate/validators";
import {useRoute, useRouter} from "vue-router";
import {updateSettings} from "./utils/api";
import {MESSAGE} from "@utils/const";
import {copy} from "copy-anything"
import { useVuelidate } from '@vuelidate/core'

const utilStore = useUtilsStore()
const settingsStore = useSettingsStore()
const appFormState = ref<'newApp' | 'selectedApp' | "noApp">('noApp')
const newAppName = ref('')
const router = useRouter()
const route = useRoute()

const emit = defineEmits<{
  reloadSettings: []
}>()

const settings = computed(() => {
  return settingsStore.allSettings
})
const currentSettings = computed(() => {
  return copy(settingsStore.currentAppSettings)
})

function newAppForm() {
  appFormState.value = 'newApp'
  settingsStore.currentAppSettings = undefined
}

watch(() => settingsStore.currentAppSettings, () => {
  if (settingsStore.currentAppSettings) {
    appFormState.value = 'selectedApp'
  }
})
if (settingsStore.currentAppSettings) {
  appFormState.value = 'selectedApp'
}

watch(() => route.name, () => {
  if (route.name === 'newApp') {
    appFormState.value = 'newApp'
  }
}, {immediate: true})

function createApp() {
  axios.post(`/api/setup/create/${newAppName.value}`).then((res) => {
    router.push({name: 'app', params: {appId: res.data?.appCreatedId}})
    emit('reloadSettings')
  })
}

function deleteApp() {
  utilStore.awaitConfirmation({
    text:
        "Are you sure you want to delete the app ?",
    type: "warning"
  }).then(() => {
    axios.delete(`/api/setup/delete/${currentSettings.value?.applicationName}`).then(() => {
      router.push({name: 'index'})
      emit('reloadSettings')
    })
  }).catch((e) => {
    if (e !== MESSAGE.PROMISE_USER_CANCELLED) {
      throw new Error(e)
    }
  });
}

function updateApp() {
  if(currentSettings.value && settingsStore.currentAppSettings){
    updateSettings(currentSettings.value, settingsStore.currentAppSettings.applicationName)
    emit('reloadSettings')
  }
}
const rules = computed(() => {
  const alpha = helpers.withMessage("Only lowercase letters without spaces are allowed", (v: string) => {
    return v === '' || /^[a-z]+$/.test(v)
  })
  return {
    title: {
      required
    },
    applicationName: {
      required,
      alpha
    },
  }
})

const form = reactive({
  title: currentSettings.value?.title ?? '',
  applicationName: currentSettings.value?.applicationName ?? '',
})

watch(form, ()=>{
  if(currentSettings.value){
    currentSettings.value.title = form.title
    currentSettings.value.applicationName = form.applicationName
  }
})

watch(currentSettings, ()=>{
  if(currentSettings.value){
    form.title = currentSettings.value.title
    form.applicationName = currentSettings.value.applicationName
  }
})


const v$ = useVuelidate(rules, form)

</script>

<template>
  <div v-if="!route.params.appId && route.name !== 'newApp'" class="pic-container">
    <v-row>
      <h2>
        Select or create an application
      </h2>
    </v-row>
    <v-row>
      <v-col v-for="app in settings" :key="app.applicationName">
        <v-card
          height="100"
          :title="app.applicationName"
          color="primary"
          :to="{name: 'app', params: {appId: app.id}}"
        />
      </v-col>
      <v-col>
        <v-card height="100" color="grey" :to="{name: 'newApp'}">
          <v-card-title>
            New App
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
  <template v-else>
    <div class="pic-flex">
      <aside class="pic-container pic-aside">
        <h2>
          App List
        </h2>

        <div v-for="app in settings" :key="app.id">
          <router-link class="pic-button--text" :to="{name: 'app', params: {appId: app.id}}">
            {{ app.applicationName }}
          </router-link>
        </div>

        <v-btn color="primary" @click="newAppForm">
          New App
        </v-btn>
      </aside>
      <main class="pic-container">
        <template v-if="appFormState === 'selectedApp' && currentSettings ">
          <h2>
            {{ currentSettings.applicationName }}
          </h2>
          <v-text-field v-model="form.title" :validation="v$.title" label="Title" />
          <v-text-field
            v-model="form.applicationName"
            :validation="v$.applicationName"
            label="Application name"
          />
          <v-text-field
            v-model="currentSettings.messageTimeOut"
            :validation="v$.messageTimeOut"
            label="Message Timeout"
          />
          <v-select
            v-model="settingsStore.currentStyleSet"
            :items="settingsStore.allStyleSets"
            label="Style Set"
            item-title="setName"
            item-value="id"
          />

          <v-checkbox
            v-model="currentSettings.devMode"
            type="checkbox"
            label="Dev mode"
          />
          <div class="pic-flex pic-between">
            <v-btn
              color="primary"
              :disabled="v$.$invalid"
              @click="updateApp()"
            >
              Update
            </v-btn>
            <v-btn variant="text" class="pic-button--text" @click="deleteApp">
              Delete
            </v-btn>
          </div>
        </template>
        <template v-if="appFormState === 'newApp'">
          <v-text-field v-model="newAppName" :validation="v$.newAppName" label="App Name" />
          <v-btn
            color="primary"
            @click="createApp"
          >
            Create App
          </v-btn>
        </template>
      </main>
    </div>
  </template>
</template>

<style lang="postcss">

</style>
