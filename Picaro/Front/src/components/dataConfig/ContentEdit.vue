<script lang="ts" setup>
import ModelForm from "./ModelForm.vue"
import {defineProps, defineEmits, PropType, ref} from "vue";
import {Model, ModelState, Settings} from "@types";
import DisplayList from "@components/display/DisplayList.vue";
import FilterCategories from "@components/filters/FilterCategories.vue";
import {useSettingsStore} from "@stores/settings";
import {useRouter} from "vue-router";
import {nanoid} from "nanoid";
import {useUtilsStore} from "@stores/utils";
import {updateSettings} from "@components/utils/api";
import draggable from "vuedraggable";


const settingsStore = useSettingsStore();
const utilsStore = useUtilsStore();

const router = useRouter()

const categories = settingsStore.currentAppSettings?.categories || []

const newCategory = ref('')
const editCategories = ref(false)

defineEmits(["updateModelFormState", "cancelEditModel"])

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  currentEditModel: {type: Object as PropType<Model>, required: true},
  modelFormState: {type: String as PropType<ModelState>, required: true},
  modelCollection: {type: Array as PropType<Model[]>, required: true},
})

function editItem(item: string) {
  router.push({params: {contentId: item}})
  newCategory.value = ''
}

function addCategory() {
  settingsStore.currentAppSettings?.categories.push({label: newCategory.value, id: nanoid(8)})
  newCategory.value = ''
}

function cancelEdit() {
  window.location.reload()
}

function deleteCategory(index: number) {
  utilsStore.awaitConfirmation({
    text: "Are you sure you want to delete this category?",
    type: "warning"
  }).then(() => {
    settingsStore.currentAppSettings?.categories.splice(index, 1)
  })
}

function saveCategory() {
  updateSettings(settingsStore.currentAppSettings as Settings)
  editCategories.value = false
}

</script>
<template>
  <v-row>
    <v-col :cols="3">
      <v-btn v-if="!editCategories" variant="text" color="secondary" @click="editCategories = !editCategories">
        Edit categories
      </v-btn>
      <v-btn
        v-else
        variant="text"
        color="secondary"
        @click="cancelEdit()"
      >
        Cancel
      </v-btn>
      <div class="v-label">
        Existing categories :
      </div>
      <FilterCategories
        v-if="settingsStore.currentAppSettings && !editCategories"
        :current-app="settingsStore.currentAppSettings"
      />
      <div v-else>
        <draggable
          v-model="settingsStore.currentAppSettings.categories"
          ghost-class="pic-sortable-ghost"
          handle=".pic-sortable-handle"
          item-key="id"
        >
          <template #item="{element,index}">
            <div class="pic-flex">
              <span class="pic-sortable-handle pic-sortable-handle__category">
                <v-icon>mdi-drag</v-icon>
              </span>
              <v-text-field
                :key="element.id"
                v-model="element.label"
                append-icon="mdi-delete"
                @click:append="deleteCategory(index)"
              />
            </div>
          </template>
        </draggable>

        <v-text-field v-model="newCategory" label="New category" />
        <v-btn @click="addCategory">
          Add category
        </v-btn>
        <br>
        <v-btn class="mt-4" color="primary" @click="saveCategory()">
          Save
        </v-btn>
      </div>
    </v-col>
    <v-col>
      <div v-if="categories.length === 0">
        <p>You must add a category first</p>
      </div>

      <template v-else>
        <div class="v-label">
          New content :
        </div>
        <ModelForm
          :current-edit-model="currentEditModel"
          :categories="categories"
        />
        <div class="v-label mt-4">
          Edit existing content :
        </div>
        <display-list
          class="pic-display-edit"
          :display-all="true"
          :categories="categories"
          :module-params="{model: currentEditModel.id}"
          :current-app="settingsStore.currentAppSettings"
          @clickItem="editItem($event)"
        />
      </template>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>
