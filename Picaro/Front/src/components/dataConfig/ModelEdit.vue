<script setup lang="ts">
import {updateSettings} from "@components/utils/api";
import {computed, PropType, ref, watch} from "vue";
import {Model, ModelState} from "@picTypes/index.d";
import {MESSAGE} from "@utils/const";
import {useUtilsStore} from "@stores/utils";
import {useSettingsStore} from "@stores/settings";
import Draggable from "vuedraggable";
import ModelField from "@components/partials/model/panelEdit/_modelField.vue";
import rfdc from "rfdc";
import EditableField from "@components/utils/EditableField.vue";

const clone = rfdc()
const utilsStore = useUtilsStore()
const settingsStore = useSettingsStore()
const editTitle = ref(false)

// region Props
const props = defineProps({
  modelFormState: {type: String as PropType<ModelState>, required: true},
  currentEditModel: {type: Object as PropType<Model>, required: true},
  modelCollection: {type: Array as PropType<Model[]>, required: true}
})

const currentModelClone: Model | undefined = clone(props.currentEditModel)

// endregion

// region Emits
const emit = defineEmits(["updateModelFormState", "updateCurrentEditModel", "cancelEditModel"])
// endregion

const currentEditField = ref("");
const currentEditModelName = computed((): string => {
  return props.currentEditModel?.name || ""
})


const currentModelIsSaved = computed(() => {
  return props.modelFormState !== 'noModel' && props.modelCollection?.some(item => item.id === props.currentEditModel?.id)
})

async function abandonEdition() {
  if (currentEditModelName.value) {
    utilsStore.awaitConfirmation({
      text:
          "Are you sure you want to abandon the creation of this new model ?",
      type: "warning"
    }).then(() => {
      emit('cancelEditModel')
    }).catch((e) => {
      if (e !== MESSAGE.PROMISE_USER_CANCELLED) {
        throw new Error(e)
      }
    });
  }
}

function addField(event) {
  if (currentModelClone) {
    currentModelClone.fieldCollection.push(event);
    emit('updateModelFormState', "modelCreated");
  }
}

function deleteField(index) {
  if (currentModelClone) {
    currentModelClone.fieldCollection.splice(index, 1);
    emit('updateModelFormState', "modelCreated");
  }
}


function deleteModel() {
  utilsStore.awaitConfirmation({
    text: "Are you sure you want to delete this model ?",
    type: "warning"
  }).then(() => {
    if (!settingsStore.currentAppSettings || !currentModelClone) {
      utilsStore.addAlert({
        text: "No app or no model selected",
        type: "error"
      });
    } else {
      const modelCollection = settingsStore.currentAppSettings.modelCollection
      const index = modelCollection.findIndex(
          item => item.id === currentModelClone.id
      );
      modelCollection.splice(index, 1);

      updateSettings(settingsStore.currentAppSettings).then(() => {
        utilsStore.addAlert({
          text: "Model deleted",
          type: "success"
        });
        emit('cancelEditModel')
      });
    }
  }).catch((e) => {
    if (e !== MESSAGE.PROMISE_USER_CANCELLED) {
      throw new Error(e)
    }
  });

}

function saveModel() {
  if (!settingsStore.currentAppSettings) {
    utilsStore.addAlert({
      text: "No app selected",
      type: "error"
    })
  } else if (currentModelClone) {
    const modelIndex = settingsStore.currentAppSettings.modelCollection.findIndex(model => model.id === currentModelClone.id)
    if (modelIndex !== -1) {
      settingsStore.currentAppSettings.modelCollection[modelIndex] = currentModelClone
    } else {
      settingsStore.currentAppSettings.modelCollection.push(currentModelClone)
    }
    updateSettings(settingsStore.currentAppSettings)
    emit('updateModelFormState', 'modelCreated')
  }
}

function saveEditedField(event, index) {
  if (currentModelClone) {
    currentModelClone.fieldCollection[index] = event;
    emit('updateModelFormState', "modelCreated");
  }
}
</script>

<template>
  <div v-if="currentEditModel">
    <EditableField :value="currentModelClone.name" @update="currentModelClone.name = $event">
      <h3 data-test="created-model-name">
        <span>
          Editing model : <span>{{ currentModelClone.name }}</span>
        </span>
      </h3>
    </EditableField>

    <button v-if="props.modelFormState !== 'noModel' " class="pic-button-secondary" @click="abandonEdition()">
      Cancel
    </button>
    <Draggable
        v-model="currentModelClone.fieldCollection"
        ghost-class="pic-sortable-ghost"
        handle=".pic-sortable-handle"
        item-key="id"
    >
      <template #item="{element,index}">
        <div class="pic-model--field">
          <ModelField
              :model="currentEditModel"
              :model-form-state="props.modelFormState"
              :existing-field-data="element"
              :current-edit-field="currentEditField"
              @cancel-field="emit('updateModelFormState', 'modelCreated')"
              @updateEditField="emit('updateModelFormState', 'editingField'); currentEditField = $event"
              @deleteField="deleteField(index)"
              @updateEditedFieldData="saveEditedField($event,index)"
          />
        </div>
      </template>
    </Draggable>
    <ModelField
        v-if="props.modelFormState === 'addingField'"
        :is-new="true"
        :model="currentEditModel"
        :model-form-state="props.modelFormState"
        @cancel-field="emit('updateModelFormState', 'modelCreated')"
        @addFieldData="addField"
    />
    <button
        v-if="props.modelFormState === 'modelCreated'"
        data-test="add-new-field-button"
        @click="emit('updateModelFormState', 'addingField')"
    >
      Add Field
    </button>
  </div>
  <button v-if="props.modelFormState === 'modelCreated'" @click="saveModel">
    Save
  </button>
  <button v-if="currentModelIsSaved" class="pic-button--text" @click="deleteModel">
    delete
  </button>
</template>

<style scoped>

</style>
