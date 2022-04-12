<template>
  <h2><span>Models</span></h2>
  <div class="pic-flex">
    <aside class="pic-aside pic-container">
      <button
        v-if="modelFormState === 'noModel'"
        data-test="new-model-button"
        @click="modelFormState = 'awaitingName'"
      >
        New Model
      </button>
      <div v-for="model in currentAppModelCollection" :key="model.id" class="current-model-elements">
        <div>
          <a @click="selectModel(model)">
            {{ model.name }}
          </a>
        </div>
      </div>
    </aside>
    <main class="pic-main pic-container">
      <v-tabs v-if="modelFormState !== 'noModel'">
        <v-tab :to="`/data/${$route.params.appId}/${$route.params.modelId}/`">
          Edit Model
        </v-tab>
        <v-tab :to="`/data/${$route.params.appId}/${$route.params.modelId}/content`">
          Edit content
        </v-tab>
      </v-tabs>
      <div v-if="modelFormState === 'awaitingName'" class="pic-new-model">
        <label v-if="!currentEditModelName">
          New model name
          <input v-model="modelNameInput" data-test="create-model-name-input">
        </label>
        <button
          v-if="!currentEditModelName"
          data-test="create-model-button"
          :disabled="!modelNameInput || !modelNameIsUnique"
          @click="createNewModel"
        >
          Create model
        </button>
      </div>
      <router-view
        v-if="currentEditModel"
        class="pic-main-container"
        :current-edit-model="currentEditModel"
        :model-form-state="modelFormState"
        :model-collection="modelCollection"
        :categories="settingsStore.currentAppSettings?.categories"
        @updateModelFormState="modelFormState = $event"
        @cancelEditModel="cancelEditModel($event)"
      />
    </main>
  </div>
</template>
<script setup lang="ts">
import {ref, computed, watch} from "vue";
import {useSettingsStore} from '@stores/settings'
import {Model, ModelState} from '@picTypes/index.d'
import {useRouter, useRoute} from "vue-router";
import {nanoid} from "nanoid";
import {useUtilsStore} from "@stores/utils";

defineEmits(['reloadSettings'])

const settingsStore = useSettingsStore()
const utilsStore = useUtilsStore()
const router = useRouter()
const route = useRoute()

const modelFormState = ref<ModelState>("noModel");
const currentEditModel = ref<Model | null>(null);
const modelNameInput = ref('');

const modelCollection = computed((): Model[] | [] => {
  return settingsStore.currentAppSettings?.modelCollection || []
})
const currentEditModelName = computed((): string => {
  return currentEditModel.value?.name || ""
})
const modelNameIsUnique = computed(() => {
  return (
      Object.keys(modelCollection).filter(
          item => item === modelNameInput.value
      ).length === 0
  );
})

function selectModel(model: Model) {
  if (settingsStore.currentAppSettings) {
    modelFormState.value = "modelCreated";
    router.push({path: `/data/${settingsStore.currentAppSettings.id}/${model.id}`})
  } else {
    utilsStore.addAlert({
      text: "Please select an app first",
      type: "warning"
    });
  }
}

const currentAppModelCollection = computed((): Model[] | [] => {
  return settingsStore.currentAppSettings?.modelCollection || []
})

function createNewModel() {
  modelFormState.value = "modelCreated";
  modelNameInput.value = modelNameInput.value.toLowerCase()
  currentEditModel.value = {
    id: nanoid(8),
    name: modelNameInput.value,
    fieldCollection: []
  }
}

function cancelEditModel(state: ModelState) {
  modelFormState.value = 'noModel';
  currentEditModel.value = null;
  modelNameInput.value = '';
  if (settingsStore.currentAppSettings) {
    router.push({path: `/data/${settingsStore.currentAppSettings.id}`})
  } else {
    utilsStore.addAlert({
      text: "Please select an app first",
      type: "warning"
    });
  }
}

// region Model hydration
function modelFromRoute() {
  if (route?.params.modelId && settingsStore.currentAppSettings) {
    currentEditModel.value = settingsStore.currentAppSettings.modelCollection.find(model => model.id === route.params.modelId) || null
    modelFormState.value = "modelCreated";
  }
}

watch(() => settingsStore.currentAppSettings, (newVal) => {
  if (newVal) {
    modelFromRoute()
  }
})
modelFromRoute()
// endregion
</script>
<style scoped lang="scss">
</style>
