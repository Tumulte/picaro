<script lang="ts" setup>
import ModelForm from "./ModelForm.vue"
import {defineProps, defineEmits, ref, computed, watch, PropType} from "vue";
import {Model, ModelState} from "@types";
import DisplayList from "@components/dataConfig/DisplayList.vue";
import FilterCategories from "@components/dataConfig/FilterCategories.vue";
import {useSettingsStore} from "@stores/settings";

const settingsStore = useSettingsStore();


defineEmits(["updateModelFormState", "cancelEditModel"])
const props = defineProps({
  currentEditModel: {type: Object as PropType<Model>, required: true},
  modelFormState: {type: String as PropType<ModelState>, required: true},
  modelCollection: {type: Array as PropType<Model[]>, required: true},
  categories: {type: Array as PropType<string[]>, required: true}
})
</script>
<template>
  <v-row>
    <v-col :cols="2">
      <FilterCategories v-if="settingsStore.currentAppSettings" :current-app="settingsStore.currentAppSettings" />
    </v-col>
    <v-col>
      <div v-if="categories.length === 0">
        <p>You must add a category first</p>
      </div>
      <template v-else>
        <ModelForm :current-edit-model="currentEditModel" :categories="categories" />
        <display-list
          :display-all="true"
          :module-params="{model: props.currentEditModel.id}"
          :current-app="settingsStore.currentAppSettings"
        />
      </template>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>
