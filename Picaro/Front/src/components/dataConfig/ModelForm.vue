<script lang="ts" setup>
import {defineProps, PropType, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {FieldContent, FieldParams, Model, ModelContent} from "@types";
import RichText from "@components/dataConfig/fields/RichText.vue";
import TextLine from "@components/dataConfig/fields/TextLine.vue";
import {useUtilsStore} from "@stores/utils";
import {useSettingsStore} from "@stores/settings";
import axios from "axios";
import {nanoid} from "nanoid";
import {copy} from "copy-anything";

const route = useRoute()
const router = useRouter()
const utilsStore = useUtilsStore()
const settingsStore = useSettingsStore()
const emit = defineEmits<{
  reloadData: [],
}>()

const componentMap = {
  text: TextLine,
  richText: RichText,
  select: 'Select',
  radio: 'Radio',
  checkbox: 'CheckBox',
  booleanSwitch: 'BooleanSwitch',
  categoryFilter: 'CategoryFilter',
}


const props = defineProps({
  currentEditModel: {type: Object as PropType<Model>, required: true},
  categories: {type: Array as PropType<string[]>, required: true},
  modelContent: {type: Object as PropType<ModelContent>, required: false, default: null},
})

function defaultEmptyContent(): ModelContent {
  return {
    categories: [],
    content: props.currentEditModel.fieldCollection.map((field: FieldParams) => ({
      fieldContent: null,
      fieldParamsId: field.id,
      contentId: nanoid(8)
    })),
    modelId: route.params.modelId as string
  }

}

const currentModelContent = ref<ModelContent>(copy(props.modelContent) || defaultEmptyContent())

function updateData(data: [string, FieldContent['fieldContent']]) {
  const [id, content] = data

  const changedItem = currentModelContent.value.content.find(item => item.fieldParamsId === id)
  if (!changedItem) {

    utilsStore.addAlert({
      type: "error",
      text: `Field with id ${id} not found`
    })
    return
  }
  changedItem.fieldContent = content
}


async function sendForm() {
  let action: "post" | "put" = "post";

  if (props.modelContent) action = "put";

  if (!settingsStore.currentAppSettings) {
    utilsStore.addAlert({
      type: "error",
      text: "No app selected"
    });
    return
  }

  try {
    await axios[action](
        `/api/data/${settingsStore.currentAppSettings.id}/${route.params.modelId}`,
        currentModelContent.value // if an array is passed each entry creates a row in the DB
    )
    utilsStore.addAlert({
      type: "success",
      text: "Saved successfully"
    });
    emit("reloadData");
  } catch (e) {
    utilsStore.addAlert({
      type: "error",
      text: `Request failed.  Returned status of ${e}`
    });
  }
}

</script>
<template>
  <div class="pic-container">
    <component
      :is="componentMap[field.type]"
      v-for="(field, index) in currentEditModel.fieldCollection"
      :key="field.id"
      :field-content="currentModelContent?.content.find(item => item.fieldParamsId === field.id)?.fieldContent"
      :field-params="field"
      :index="index"
      @updateData="updateData($event)"
    />
    <v-select
      v-model="currentModelContent.categories"
      :items="categories"
      :multiple="true"
      item-title="label"
      item-value="id"
      label="category"
    />
    <div class="pic-flex pic-between">
      <v-btn color="primary" @click="sendForm">
        Save
      </v-btn>
      <v-btn
        v-if="modelContent"
        color="secondary"
        @click.stop="router.push({params: {contentId: ''}})"
      >
        Cancel
      </v-btn>
    </div>
  </div>
</template>

