<template>
  <div class="pic-flex">
    <aside class="pic-container">
      <button @click="newAppForm">
        New App
      </button>
      <div v-for="app in settings" :key="app.id">
        <router-link class="pic-button--text" :to="{name: 'app', params: {appId: app.id}}">
          {{ app.applicationName }}
        </router-link>
      </div>
    </aside>
    <main class="pic-container">
      <template v-if="appFormState === 'selectedApp' && currentSettings?.applicationName">
        <pic-header level="3">
          Current App : {{ currentSettings.applicationName }}
        </pic-header>
        <pic-input v-model="currentSettings.title" :validation="v$.applicationName" label="Title" />
        <pic-input v-model="currentSettings.messageTimeOut" :validation="v$.messageTimeOut" label="Message Timeout" />
        <input v-model="currentSettings.devMode" type="checkbox">
        <button @click="deleteApp">
          Delete
        </button>
        <button @click="updateSettings(currentSettings)">
          Update
        </button>
      </template>
      <template v-if="appFormState === 'newApp'">
        <pic-input v-model="newAppName" :validation="v$.newAppName" label="App Name" />
        <label>
          App Type
          <select v-model="newAppType">
            <option value="picaro">Picaro</option>
            <option value="vue-ts">Vue Typescript</option>
            <option value="vue-js">Vue Javascript</option>
            <option value="empty">empty</option>
          </select>
        </label>

        <button :disabled="v$.$invalid" @click="createApp">
          Create App
        </button>
      </template>
    </main>
  </div>
</template>

<script lang="ts">
import {computed, ref, watch} from "vue";
import axios from "axios";
import {useSettingsStore} from '@stores/settings'
import {useUtilsStore} from "@stores/utils";
import {helpers, required} from "@vuelidate/validators";
import {useVuelidate} from '@vuelidate/core'
import PicInput from "./elements/picInput.vue";
import {useRouter} from "vue-router";
import {updateSettings} from "./utils/api";
import {MESSAGE} from "@utils/const";


export default {
  components: {PicInput},
  emits: ['reloadSettings'],
  setup(props, {emit}) {
    const utilStore = useUtilsStore()
    const settingsStore = useSettingsStore()
    const appFormState = ref<'newApp' | 'selectedApp' | "noApp">('noApp')
    const newAppName = ref('')
    const newAppType = ref<"picaro" | "vue-ts" | "vue-js" | "empty">('vue-ts')
    const router = useRouter()

    const settings = computed(() => {
      return settingsStore.allSettings
    })
    const currentSettings = computed(() => {
      return settingsStore.currentAppSettings
    })

    function newAppForm() {
      appFormState.value = 'newApp'
      settingsStore.currentAppSettings = null
    }

    watch(() => settingsStore.currentAppSettings, () => {
      if (settingsStore.currentAppSettings) {
        appFormState.value = 'selectedApp'
      }
    })
    if (settingsStore.currentAppSettings) {
      appFormState.value = 'selectedApp'
    }

    function createApp() {
      axios.post(`/api/setup/create/${newAppName.value}/${newAppType.value}`).then((res) => {
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

    return {
      appFormState,
      newAppName,
      settings,
      currentSettings,
      newAppForm,
      createApp,
      newAppType,
      updateSettings,
      deleteApp,
      v$: useVuelidate({
        $autoDirty: true
      })
    }
  },
  validations() {
    const alpha = helpers.withMessage("Only lowercase letters without spaces are allowed", (v: string) => {
      return v === '' || /^[a-z]+$/.test(v)
    })
    return {
      newAppName: {
        required,
        alpha
      }
    }
  }
}
</script>

<style scoped>

</style>