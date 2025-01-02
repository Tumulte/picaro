<script lang="ts" setup>
import {computed, ref, watch} from "vue";
import {useSettingsStore} from '@stores/settings'
import {Model, ModelState} from '@types'
import {useRoute, useRouter} from "vue-router";
import {nanoid} from "nanoid";
import {useUtilsStore} from "@stores/utils";
import axios from "axios";

defineEmits(['reloadSettings'])


const settingsStore = useSettingsStore()
const utilsStore = useUtilsStore()
const router = useRouter()
const route = useRoute()

const modelFormState = ref<ModelState>("noModel");
const currentEditModel = ref<Model>();
const modelNameInput = ref('');
const imageDrawer = ref(false);
const image = ref<File[]>();
const allImages = ref<string[]>([])

const thumb = computed<string[]>(() => {
  return allImages.value.filter((image) => image.match(/-s./))
})

function fetchImages() {
  axios.get('/api/setup/allimages').then((res) => {
    allImages.value = res.data
  })
}

fetchImages()

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
    router.push({path: `/admin/data/${settingsStore.currentAppSettings.id}/${model.id}`})
  } else {
    utilsStore.addAlert({
      text: "Please select an app first",
      type: "warning"
    });
  }
}

function uploadImage() {
  if (image.value) {
    const formData = new FormData();
    formData.append('image', image.value);
    axios.post(`/api/setup/uploadimages`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(() => {
      fetchImages()
      utilsStore.addAlert({
        text: "Image uploaded",
        type: "success"
      });
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

function cancelEditModel() {
  modelFormState.value = 'noModel';
  currentEditModel.value = undefined;
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
  if (route?.params.modelId && settingsStore.currentAppSettings && route?.params.modelId !== 'newModel') {
    currentEditModel.value = settingsStore.currentAppSettings.modelCollection.find(model => model.id === route.params.modelId)
    modelFormState.value = "modelCreated";
  }
}

function newModelForm() {
  router.replace({name: 'model', params: {appId: route.params.appId, modelId: 'newModel'}});
  modelFormState.value = 'awaitingName';
}

watch(() => route.params.modelId, (newVal) => {
  if (newVal) {
    modelFromRoute()
  }
}, {immediate: true})

// endregion

function selectImage(path: string) {
  settingsStore.rteImage = path
}
</script>

<template>
  <div class="pic-flex">
    <aside class="pic-aside pic-container">
      <h3>
        Model List
      </h3>
      <v-btn variant="text" @click="imageDrawer = !imageDrawer">
        Images upload
      </v-btn>
      <div v-for="model in currentAppModelCollection" :key="model.id" class="current-model-elements">
        <a :class="{selected: model.id === route.params.modelId}" class="pic-aside-item" @click="selectModel(model)">
          {{ model.name }}
        </a>
      </div>
      <v-btn
          color="primary"
          data-test="new-model-button"
          @click="newModelForm"
      >
        New Model
      </v-btn>
    </aside>
    <main class="pic-main pic-container">
      <v-tabs v-if="modelFormState !== 'noModel' && modelFormState !== 'awaitingName'">
        <v-tab :to="`/admin/data/${$route.params.appId}/${$route.params.modelId}/`">
          Edit Model
        </v-tab>
        <v-tab :to="`/admin/data/${$route.params.appId}/${$route.params.modelId}/content`">
          Edit content
        </v-tab>
      </v-tabs>
      <div v-if="modelFormState === 'awaitingName'" class="pic-new-model">
        <v-text-field v-model="modelNameInput" data-test="create-model-name-input" label="New model name"/>
        <v-btn
            v-if="!currentEditModelName"
            :disabled="!modelNameInput || !modelNameIsUnique"
            color="primary"
            data-test="create-model-button"
            @click="createNewModel"
        >
          Create model
        </v-btn>
      </div>
      <router-view
          v-if="currentEditModel"
          :current-edit-model="currentEditModel"
          :model-collection="modelCollection"
          :model-form-state="modelFormState"
          class="mt-4"
          @cancelEditModel="cancelEditModel()"
          @updateModelFormState="modelFormState = $event"
      />
    </main>
    <v-navigation-drawer
        v-model="imageDrawer"
        location="right"
        width="500"
    >
      <div class="pic-container">
        <v-form>
          <v-file-input
              v-model="image"
              accept="image/*"
              label="Image"
          />
          <v-btn @click="uploadImage">
            Upload
          </v-btn>
        </v-form>
        <div v-for="image in allImages" :key="image">
          <img
              :class="{selected: image === settingsStore.rteImage}"
              :src="`/api/uploads/${image}`"
              @click="selectImage(image)"
          >
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>
<style lang="postcss" scoped>
.selected {
  border: 4px solid var(--main);
}
</style>
