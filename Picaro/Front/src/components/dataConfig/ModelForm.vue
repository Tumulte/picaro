<script lang="ts" setup>
import {computed, defineProps, reactive, ref, shallowRef} from "vue";
import {useRoute, useRouter} from "vue-router";
import {Category, FieldContentParams, FieldParams, Model, ModelContent} from "@types";
import TextLine from "@components/dataConfig/fields/TextLine.vue";
import {useUtilsStore} from "@stores/utils";
import {useSettingsStore} from "@stores/settings";
import {nanoid} from "nanoid";
import {copy} from "copy-anything";
import {MESSAGE} from "@utils/const";
import {helpers} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

const route = useRoute()
const router = useRouter()
const utilsStore = useUtilsStore()
const settingsStore = useSettingsStore()
const emit = defineEmits<{
  reloadData: [],
}>()

const componentMap = shallowRef();

import("@components/dataConfig/fields/RichText.vue").then(component => {
      componentMap.value = {
        text: TextLine,
        richText: component.default,
        select: 'Select',
        radio: 'Radio',
        checkbox: 'CheckBox',
        booleanSwitch: 'BooleanSwitch',
        categoryFilter: 'CategoryFilter',
      }
    }
).catch(e => console.error(e))


const props = defineProps<{
  currentEditModel: Model
  categories: Category[]
  modelContent?: ModelContent
}>()

const currentModelContent = ref(copy(props.modelContent) || defaultEmptyContent())

const rules = computed(() => {
  const notEmpty = helpers.withMessage("You need to select at least one category", (v: Category[]) => {
    return v.length > 0
  })
  return {
    categories: {
      notEmpty
    },
  }
})

const form = reactive({
  categories: currentModelContent.value.categories ?? [],
})

const v$ = useVuelidate(rules, form)

function defaultEmptyContent(): ModelContent {
  return {
    categories: [],
    content: props.currentEditModel.fieldCollection.map((field: FieldParams) => ({
      fieldContent: null,
      fieldParamsId: field.id,
      contentId: nanoid(8),
    })),
    id: nanoid(8),
    modelId: route.params.modelId as string
  }

}

function updateData(data: [string, FieldContentParams['fieldContent']]) {
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
    await fetch(
        `/api/data/${settingsStore.currentAppSettings.id}/${route.params.modelId as string}`,
        {
          method: action,
          headers: [
            ["Content-Type", "application/json"],
          ],
          body: JSON.stringify({...currentModelContent.value, categories: form.categories}) // if an array is passed each entry creates a row in the DB
        }
    )
    utilsStore.addAlert({
      type: "success",
      text: "Saved successfully"
    });
    emit("reloadData");
  } catch (e) {
    utilsStore.addAlert({
      type: "error",
      text: `Request failed.  Returned status of ${e as string}`
    });
  }
}

function deleteContent() {
  if (!settingsStore.currentAppSettings) {
    utilsStore.addAlert({
      type: "error",
      text: "No app selected"
    });
    return
  }

  utilsStore.awaitConfirmation({
    text:
        "Are you sure you want to delete this content ?",
    type: "warning"
  }).then(() => {
    fetch(`/api/data/${settingsStore.currentAppSettings?.id}/${route.params.modelId as string}`,
        {
          method: 'DELETE',
          headers: [
            ["Content-Type", "application/json"],
          ],
          body: JSON.stringify({id: props.modelContent?.id})
        }
    )
        .then(() => emit("reloadData"))
        .catch((error) => console.error(error))
  })
      .catch((e) => {
        if (e !== MESSAGE.PROMISE_USER_CANCELLED) {
          throw new Error(e)
        }
      });
}

</script>
<template>
  <div>
    <div v-if="componentMap" class="pic-container" data-testid="content-form">
      <component
        :is="componentMap[field.type]"
        v-for="(field, index) in currentEditModel.fieldCollection"
        :key="field.id"
        :field-content="currentModelContent.content?.find(item => item.fieldParamsId === field.id)?.fieldContent"
        :field-params="field"
        :index="index"
        @updateData="updateData($event)"
      />
      <v-select
        v-model="form.categories"
        :items="categories"
        :multiple="true"
        data-testid="select-categories"
        item-title="label"
        item-value="id"
        label="category"
      />
      <div class="pic-flex pic-between">
        <v-btn :disabled="v$.$invalid" color="primary" data-testid="content-save" @click="sendForm">
          Save
        </v-btn>
        <v-btn
          v-if="modelContent"
          color="secondary"
          @click.stop="router.push({params: {contentId: ''}})"
        >
          Cancel
        </v-btn>
        <v-btn
          v-if="modelContent"
          color="secondary"
          variant="text"
          @click.stop="deleteContent"
        >
          delete
        </v-btn>
      </div>
    </div>
  </div>
</template>

