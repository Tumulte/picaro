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
      <button v-else class="pic-button-secondary" @click="cancelEditModel">
        Cancel
      </button>
    </aside>
    <main class="pic-main pic-container">
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
      <div v-if="currentEditModel">
        <h3 data-test="created-model-name">
          <span>Editing model : <span>{{ currentEditModel.name }}</span></span>
        </h3>
        <draggable
          v-model="currentEditModel.model"
          ghost-class="pic-sortable-ghost"
          handle=".pic-sortable-handle"
        >
          <template #item="{element,index}">
            <div class="pic-model--field">
              <ModelField
                :model-form-state="modelFormState"
                :existing-field-data="element"
                :current-edit-field="currentEditField"
                @cancel-field="modelFormState = 'modelCreated'"
                @updateEditField="modelFormState = 'editingField'; currentEditField = $event"
                @deleteField="deleteField(index)"
                @updateEditedFieldData="saveEditedField($event,index)"
              />
            </div>
          </template>
        </draggable>
        <ModelField
          v-if="modelFormState === 'addingField'"
          :is-new="true"
          :model-form-state="modelFormState"
          @cancel-field="modelFormState = 'modelCreated'"
          @addFieldData="addFieldToModel"
        />
        <button
          v-if="modelFormState === 'modelCreated'"
          data-test="add-new-field-button"
          @click="modelFormState = 'addingField'"
        >
          Add Field
        </button>
      </div>
    </main>
  </div>

  <div v-for="model in modelCollection" :key="model.id" class="current-model-elements">
    <div>
      <button
        v-if="currentEditModelName !== model.name && !currentEditModelName"
        class="mx-2"
        @click="editModel(model.id)"
      >
        Edit
      </button>
      <button v-else class="mx-2" @click="cancelEditModel">
        Cancel
      </button>
      <a :href="`${urlPrefix}/editmodel/${model.id}`">Edit content</a>
    </div>

    <ModelField
      :model-form-state="modelFormState"
      :is-created="true"
      @addFieldData="addFieldToModel"
    />
  </div>
</template>
<script setup lang="ts">
import booleanField from "./partials/model/panelEdit/_booleanSwitchEdit.vue";
import {arrayMoveMutable} from 'array-move';
import {ref, computed, ComputedRef, onMounted} from "vue";
import type {Ref} from "vue"
import richText from "./partials/model/panelEdit/_richText.vue";
import multiChoice from "./partials/model/panelEdit/_multiChoiceEdit.vue";
import categoryFilter from "./partials/model/panelEdit/_categoryFilterEdit.vue";
import categories from "./categories.vue";
import ModelField from "./partials/model/panelEdit/_modelField.vue";
import RelationPanel from "./partials/model/panelEdit/_relation.vue"
import {nanoid} from "nanoid";
import {useSettingsStore} from '@/stores/settings'
import {MESSAGE} from "@/utils/const";
import {Model} from '@/../Types/index.d'
import {useUtilsStore} from "@/stores/utils";
import rfdc from "rfdc";
import draggable from "vuedraggable";

const clone = rfdc();
const modelFormState = ref<"noModel" | "awaitingName" | "modelCreated" | "addingField" | "editingField">("noModel");
const settingsStore = useSettingsStore()
const utilsStore = useUtilsStore()
const modelNameInput = ref('');
const valid = ref(true);
const currentEditModel: Ref<Model | null> = ref(null)
const customFieldData = ref(null)
const currentEditField = ref("");

const urlPrefix = ref('');
const modelNameIsUnique = computed(() => {
  return (
      Object.keys(modelCollection).filter(
          item => item === modelNameInput.value
      ).length === 0
  );
})
const modelCollection = computed((): Model[] => {
  return settingsStore.settings.modelCollection;
})
const currentEditModelName = computed((): string => {
  return currentEditModel.value?.name || ""
})

function editModel(id) {
  const selectedModel = settingsStore.settings.modelCollection.find(model => model.id === id)
  currentEditModel.value = clone(selectedModel) as Model
}

async function cancelEditModel() {
  if (currentEditModelName.value) {
    utilsStore.awaitConfirmation({
      text:
          "Are you sure you want to abandon the creation of this new model ?",
      type: "warning"
    }).then(() => {
      modelFormState.value = 'noModel'
      modelNameInput.value = ''
      currentEditModel.value = null

    }).catch((e) => {
      if (e !== MESSAGE.PROMISE_USER_CANCELLED) {
        throw new Error(e)
      }
    });
  }
}

function deleteField(index) {
  currentEditModel.value.model.splice(index, 1);
  modelFormState.value = "modelCreated";
}

function addFieldToModel(event) {
  const modelData = event;
  if (!currentEditModel.value) {
    throw new Error("No model selected")
  }
  currentEditModel.value.model.push(modelData);
  modelFormState.value = "modelCreated";
}

function saveEditedField(event, index) {
  currentEditModel.value.model[index] = event;
  modelFormState.value = "modelCreated";
}

function createNewModel() {
  modelFormState.value = "modelCreated";
  modelNameInput.value = modelNameInput.value.toLowerCase()
  currentEditModel.value = {
    id: nanoid(8),
    name: modelNameInput.value,
    model: []
  };
}

function noEdition(index) {
  return currentEditModelName.value === null || index === currentEditModelName.value;
}

</script>
<style scoped>
select {
  padding: 10px;
  width: 100%;
}

.select-container {
  border: 1px solid black;
  position: relative;
  border-radius: 5px;
  background: #fefefe;
  margin: 20px 0;
}

.select-container::after {
  content: "\25BC";
  pointer-events: none;
  position: absolute;
  right: 20px;
  top: 10px;
  color: #555;
}
</style>
