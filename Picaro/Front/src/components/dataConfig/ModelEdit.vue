<script lang="ts" setup>
import {updateSettings} from "@components/utils/api";
import {computed, PropType, ref} from "vue";
import {FieldParams, Model, ModelState} from "@types";
import {MESSAGE} from "@utils/const";
import {useUtilsStore} from "@stores/utils";
import {useSettingsStore} from "@stores/settings";
import Draggable from "vuedraggable";
import ModelField from "@components/dataConfig/fields/ModelField.vue";
import {copy} from "copy-anything"

import EditableField from "@components/utils/EditableField.vue";

const utilsStore = useUtilsStore()
const settingsStore = useSettingsStore()

// region Props
const props = defineProps({
  modelFormState: {type: String as PropType<ModelState>, required: true},
  currentEditModel: {type: Object as PropType<Model>, required: true},
  modelCollection: {type: Array as PropType<Model[]>, required: true},
})

const currentModelClone = ref<Model>(copy(props.currentEditModel))

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

function abandonEdition() {
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

function addField(field: FieldParams) {
  if (currentModelClone.value) {
    currentModelClone.value.fieldCollection.push(field);
    emit('updateModelFormState', "modelCreated");
  }
}

function deleteField(index: number) {
  if (currentModelClone.value) {
    currentModelClone.value.fieldCollection.splice(index, 1);
    emit('updateModelFormState', "modelCreated");
  }
}


function deleteModel() {
  utilsStore.awaitConfirmation({
    text: "Are you sure you want to delete this model ?",
    type: "warning"
  }).then(() => {
    if (!settingsStore.currentAppSettings || !currentModelClone.value) {
      utilsStore.addAlert({
        text: "No app or no model selected",
        type: "error"
      });
    } else {
      const modelCollection = settingsStore.currentAppSettings.modelCollection
      const index = modelCollection.findIndex(
          item => item.id === currentModelClone.value.id
      );
      modelCollection.splice(index, 1);

      updateSettings(settingsStore.currentAppSettings).then(() => {
        utilsStore.addAlert({
          text: "Model deleted",
          type: "success"
        });
        emit('cancelEditModel')
      }).catch((error) => console.error(error));
    }
  }).catch((e) => {
    if (e !== MESSAGE.PROMISE_USER_CANCELLED) {
      throw new Error(e)
    }
  });

}

async function saveModel() {
  if (!settingsStore.currentAppSettings) {
    utilsStore.addAlert({
      text: "No app selected",
      type: "error"
    })
  } else if (currentModelClone.value) {
    const modelIndex = settingsStore.currentAppSettings.modelCollection.findIndex(model => model.id === currentModelClone.value.id)
    if (modelIndex !== -1) {
      settingsStore.currentAppSettings.modelCollection[modelIndex] = currentModelClone.value
    } else {
      settingsStore.currentAppSettings.modelCollection.push(currentModelClone.value)
    }

    await updateSettings(settingsStore.currentAppSettings)
    emit('updateModelFormState', 'modelCreated')
  }
}

function saveEditedField(field: FieldParams, index: number) {
  if (currentModelClone.value) {
    currentModelClone.value.fieldCollection[index] = field;
    emit('updateModelFormState', "modelCreated");
  }
}

</script>

<template>
  <div v-if="currentEditModel">
    <EditableField :value="currentModelClone.name" @update="currentModelClone.name = $event">
      <h2 data-test="created-model-name">
        <span>
          <span>{{ currentModelClone.name }}</span>
        </span>
      </h2>
    </EditableField>

    <v-btn v-if="props.modelFormState !== 'noModel' " color="secondary" @click="abandonEdition()">
      Cancel Edition
    </v-btn>
    <Draggable
      v-model="currentModelClone.fieldCollection"
      ghost-class="pic-sortable-ghost"
      handle=".pic-sortable-handle"
      item-key="id"
    >
      <template #item="{element,index}">
        <div class="pic-model--field">
          <ModelField
            :current-edit-field="currentEditField"
            :existing-field-data="element"
            :model="currentEditModel"
            :model-form-state="props.modelFormState"
            @deleteField="deleteField(index)"
            @updateEditField="emit('updateModelFormState', 'editingField'); currentEditField = $event"
            @updateEditedFieldData="saveEditedField($event,index)"
            @cancel-field="emit('updateModelFormState', 'modelCreated')"
          />
        </div>
      </template>
    </Draggable>
    <ModelField
      v-if="props.modelFormState === 'addingField'"
      :is-new="true"
      :model="currentEditModel"
      :model-form-state="props.modelFormState"
      @addFieldData="addField"
      @cancel-field="emit('updateModelFormState', 'modelCreated')"
    />
    <v-btn
      v-if="props.modelFormState === 'modelCreated'"
      class="pic-add-new-field-button"
      data-test="add-new-field-button"
      @click="emit('updateModelFormState', 'addingField')"
    >
      Add Field
    </v-btn>
  </div>
  <div v-if="props.modelFormState === 'modelCreated'" class="pic-flex pic-between">
    <v-btn color="primary" @click="saveModel">
      Save
    </v-btn>
    <v-btn v-if="currentModelIsSaved" class="pic-button--text" variant="text" @click="deleteModel">
      delete
    </v-btn>
  </div>
</template>

<style scoped>

</style>
