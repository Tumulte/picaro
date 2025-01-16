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
import {useVuelidate} from '@vuelidate/core'

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

watch(() => route.name, () => {
  if (route.name === 'newApp') {
    appFormState.value = 'newApp'
  }
}, {immediate: true})

function createApp() {
  axios.post(`/api/setup/create/${newAppName.value}`).then(async (res) => {
    await router.push({name: 'app', params: {appId: res.data?.appCreatedId}})
    emit('reloadSettings')
  }).catch((error) => {
    console.error(error)
  })
}

function deleteApp() {
  utilStore.awaitConfirmation({
    text:
        "Are you sure you want to delete the app ?",
    type: "warning"
  }).then(() => {
    axios.delete(`/api/setup/delete/${currentSettings.value?.applicationName}`).then(async () => {
      await router.push({name: 'index'})
      emit('reloadSettings')
    }).catch((error) => console.error(error))
  }).catch((e) => {
    if (e !== MESSAGE.PROMISE_USER_CANCELLED) {
      throw new Error(e)
    }
  });
}

async function updateApp() {
  if (currentSettings.value && settingsStore.currentAppSettings) {
    await updateSettings(currentSettings.value, settingsStore.currentAppSettings.applicationName)
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

watch(form, () => {
  if (currentSettings.value) {
    currentSettings.value.title = form.title
    currentSettings.value.applicationName = form.applicationName
  }
})

watch(currentSettings, () => {
  if (currentSettings.value) {
    form.title = currentSettings.value.title
    form.applicationName = currentSettings.value.applicationName
  }
})


const v$ = useVuelidate(rules, form)

</script>

<template>
  <div v-if="appFormState === 'noApp'" class="pic-container">
    <v-row>
      <h2>
        Select or create an application
      </h2>
    </v-row>
    <v-row>
      <v-col v-for="app in settings" :key="app.applicationName">
        <v-card
          :title="app.applicationName"
          :to="{name: 'app', params: {appId: app.id}}"
          color="primary"
          data-test="app-button"
          height="100"
        />
      </v-col>
      <v-col>
        <v-card :to="{name: 'newApp'}" color="grey" height="100">
          <v-card-title>
            New App
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
  <template v-else>
    <div class="pic-flex" data-test="app-title">
      <aside class="pic-container pic-aside">
        <h2>
          App List
        </h2>

        <div v-for="app in settings" :key="app.id">
          <router-link :to="{name: 'app', params: {appId: app.id}}" class="pic-button--text">
            {{ app.applicationName }}
          </router-link>
        </div>

        <v-btn color="primary" @click="newAppForm">
          New App
        </v-btn>
      </aside>
      <main class="pic-container">
        <template v-if="appFormState === 'selectedApp' && currentSettings ">
          <h2 data-test="app-title-selected">
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
            item-title="setName"
            item-value="id"
            label="Style Set"
          />

          <v-checkbox
            v-model="currentSettings.devMode"
            label="Dev mode"
            type="checkbox"
          />
          <div class="pic-flex pic-between">
            <v-btn
              :disabled="v$.$invalid"
              color="primary"
              @click="updateApp()"
            >
              Update
            </v-btn>
            <v-btn class="pic-button--text" variant="text" @click="deleteApp">
              Delete
            </v-btn>
          </div>
        </template>
        <template v-if="appFormState === 'newApp'">
          <v-text-field
            v-model="newAppName"
            :validation="v$.newAppName"
            data-test="new-app-input"
            label="App Name"
          />
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
