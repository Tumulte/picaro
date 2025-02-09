<script lang="ts" setup>
import {computed, ref, watch} from "vue";
import {useSettingsStore} from '@stores/settings'
import {Model, ModelState} from '@types'
import {useRoute, useRouter} from "vue-router";
import {nanoid} from "nanoid";
import {useUtilsStore} from "@stores/utils";

const allImages = ref()


defineEmits(['reloadSettings'])


const settingsStore = useSettingsStore()
const utilsStore = useUtilsStore()
const router = useRouter()
const route = useRoute()

const modelFormState = ref<ModelState>("noModel");
const currentEditModel = ref<Model>();
const modelNameInput = ref('');
const imageDrawer = ref(false);
const imageFile = ref<File>();

fetchImages()

function fetchImages() {

  allImages.value = import.meta.glob('@uploads/picaro explained.jpg', {
    query: {format: 'webp', w: '330', picture: ''},
    import: 'default',
    eager: true
  })
}


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


async function selectModel(model: Model) {
  if (settingsStore.currentAppSettings) {
    await router.push({path: `/admin/data/${settingsStore.currentAppSettings.id}/${model.id}`})
  } else {
    utilsStore.addAlert({
      text: "Please select an app first",
      type: "warning"
    });
  }
}

function uploadImage() {
  if (imageFile.value) {
    const formData = new FormData();
    formData.append('image', imageFile.value);
    fetch(`/api/setup/uploadimages`, {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(() => {
      fetchImages()
      utilsStore.addAlert({
        text: "Image uploaded",
        type: "success"
      });
    }).catch((error) => console.error(error));
  }
}

const currentAppModelCollection = computed((): Model[] | [] => {
  return settingsStore.currentAppSettings?.modelCollection || []
})

function createNewModel() {
  modelFormState.value = "modelSelected";
  modelNameInput.value = modelNameInput.value.toLowerCase()

  currentEditModel.value = {
    id: nanoid(8),
    name: modelNameInput.value,
    fieldCollection: []
  }

}

async function cancelEditModel() {
  modelFormState.value = 'noModel';
  currentEditModel.value = undefined;
  modelNameInput.value = '';
  if (settingsStore.currentAppSettings) {
    await router.push({name: 'data'})
  } else {
    utilsStore.addAlert({
      text: "Please select an app first",
      type: "warning"
    });
  }
}

// region Model hydration
function modelFromRoute() {
  if (route.params.modelId === 'newModel') {
    modelFormState.value = "awaitingName"
    return
  }
  currentEditModel.value = settingsStore.currentAppSettings?.modelCollection.find(model => {
    return route.params.modelId && model.id === route.params.modelId
  })

  if (currentEditModel.value) {
    modelFormState.value = "modelSelected";
  } else {
    modelFormState.value = "noModel"
  }
}

async function newModelForm() {
  await cancelEditModel()
  await router.replace({name: 'model', params: {appId: route.params.appId, modelId: 'newModel'}});
  currentEditModel.value = undefined;
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
        <v-btn variant="text" @click="imageDrawer = !imageDrawer">
          <v-icon>mdi-image</v-icon>
        </v-btn>
      </h3>

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
    <main :class="{'pic-main-empty': modelFormState === 'noModel'}" class="pic-main pic-container">
      <v-tabs v-if="modelFormState !== 'awaitingName' && modelFormState !== 'noModel'">
        <v-tab :to="`/admin/data/${route.params.appId}/${route.params.modelId}/`">
          Edit Model
        </v-tab>
        <v-tab :to="`/admin/data/${route.params.appId}/${route.params.modelId}/content`">
          Edit content
        </v-tab>
      </v-tabs>
      <div v-if="modelFormState === 'awaitingName'" class="pic-new-model">
        <v-text-field v-model="modelNameInput" data-test="create-model-name-input" label="New model name" />
        <v-btn
          v-if="!currentEditModelName"
          :disabled="!modelNameInput || !modelNameIsUnique"
          color="primary"
          data-test="create-model-button"
          @click="createNewModel"
        >
          Next
        </v-btn>
      </div>
      <div v-if="currentEditModel" class="mt-4" data-test="model-is-edited">
        <router-view
          :key="currentEditModel.id"
          :current-edit-model="currentEditModel"
          :model-collection="modelCollection"
          :model-form-state="modelFormState"
          @cancelEditModel="cancelEditModel()"
          @updateModelFormState="modelFormState = $event"
        />
      </div>
    </main>
    <v-navigation-drawer
      v-model="imageDrawer"
      location="right"
      width="500"
    >
      <div class="pic-container">
        <v-form>
          <v-file-input
            v-model="imageFile"
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
            :src="image"
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
