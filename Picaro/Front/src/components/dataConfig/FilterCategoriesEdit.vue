<script lang="ts" setup>
import {useSettingsStore} from "@stores/settings";
import {computed, ref} from "vue";
import {nanoid} from "nanoid";
import {useUtilsStore} from "@stores/utils";
import {useUserStore} from "@stores/user";

const userStore = useUserStore()

const isEdit = ref(true)
const form = ref()
const currentAddedItem = ref('')
const categoryEditIndex = ref(null)
const rules = [
  (value: string) => !availableCategories.value.find(item => item.label === value) || 'This category already exists',
  (value: string) => !!value
]


const settingsStore = useSettingsStore()
const utilStore = useUtilsStore()
const availableCategories = computed(() => {
  return settingsStore.currentAppSettings?.categories ?? []
})

function changeCategory(id: string) {
  userStore.updateFilterCollection({
    type: "categories",
    params: {value: id, field: "categories", method: "in"}
  });
}

async function addItem(event) {
  const {valid} = await form.value.validate()
  if (!valid) return
  if (!settingsStore.currentAppSettings?.categories) settingsStore.currentAppSettings.categories = []
  settingsStore.currentAppSettings.categories.push({label: currentAddedItem.value, id: nanoid()})
  currentAddedItem.value = ''
}

function deleteCategory(index, category) {
  utilStore.awaitConfirmation({
    text:
        `Are you sure you want to delete the category ${category} ?`,
    type: "warning"
  }).then(() => {
    availableCategories.value.splice(index, 1)
  })
}

</script>
<template>
  <div class="pic-filter-categories">
    <div v-for="(category, index) in availableCategories" :key="index" class="rf-filter-categories--item">
      <v-text-field
        v-if="index === categoryEditIndex"
        v-model="category.label"
        @keydown.enter="categoryEditIndex=null"
      />
      <a v-else class="rf-filter-categories--link" @click="changeCategory(category.id)">{{ category.label }}</a>
      <v-icon @click="categoryEditIndex = index">
        mdi-pencil-outline
      </v-icon>
      <v-icon @click="deleteCategory(index, category.label)">
        mdi-delete-outline
      </v-icon>
    </div>
    <v-form ref="form" validate-on="input" @submit.prevent="addItem">
      <v-text-field v-if="isEdit" v-model="currentAddedItem" :rules="rules" />
    </v-form>
  </div>
</template>
