<script setup lang="ts">

import {computed, ref} from "vue";
import LayoutEdit from "@components/layout/LayoutEdit.vue";
import FilterCategories from "@components/filters/FilterCategoriesEdit.vue";
import type {Settings} from "@types";
import {useSettingsStore} from "@stores/settings";
import {useUtilsStore} from "@stores/utils";
import {updateSettings} from "@components/utils/api";
import {nanoid} from "nanoid";

const utilStore = useUtilsStore()
const settingsStore = useSettingsStore();
const layoutCommonCollection = computed<Settings["layoutCommonCollection"]>(() => {
  return settingsStore.currentAppSettings?.layoutCommonCollection || [];
});
const layoutCollection = computed(() => {
  return settingsStore.currentAppSettings.layoutCollection
});
const createdLayoutName = ref("");
const selectedLayout = ref("");
const defaultLayout = computed(() => {
  return settingsStore.currentAppSettings.defaultLayout
});
const components = {
  /*  Layout: "Layout",
    FilterLayout: "FilterLayout",
    FilterLink: "FilterLink",
    */
  List: "List",
  FilterCategories
};


function addRow() {
  layoutCommonCollection.value.push([{}]);
}

function createLayout() {
  if (!createdLayoutName.value) {
    return false
  }
  layoutCollection.value.push({
    name: createdLayoutName.value,
    id: nanoid(),
    layout: []
  });
  createdLayoutName.value = "";
}

function deleteColumn(line: number, column: number) {
  utilStore.awaitConfirmation({
    text:
        "Are you sure you want to delete this module ?",
    type: "warning"
  }).then(() => {
    layoutCommonCollection.value[line].splice(column, 1)
  })
}

function changeModule(event, index, subIndex) {
  layoutCommonCollection.value[index][subIndex] = {type: event};
}

function saveLayout() {
  updateSettings(settingsStore.currentAppSettings)
}

</script>

<template>
  <div class="pic-layout--main-container">
    <v-row
      v-for="(layoutCommonLine, index) in layoutCommonCollection"
      :key="index"
      class="pic-layout-container pic-row-container"
    >
      <v-col
        v-for="(layoutCommonColumn, subIndex) in layoutCommonLine"
        :key="subIndex"
        class="pic-layout--container  pic-container pic-layout--common-module pic-module-container"
        :cols="layoutCommonColumn.cols"
      >
        <span
          class="rf-layout-settings"
        >
          <v-text-field
            type="number"
            label="Width"
            min="0"
            max="12"
            density="compact"
            :model-value="layoutCommonColumn.cols || 0"
            @input="layoutCommonColumn.cols = $event.target.value"
          />
          <v-select
            :items="Object.keys(components)"
            :model-value="layoutCommonColumn.type || 'none'"
            variant="solo"
            density="compact"
            @update:modelValue="changeModule($event, index, subIndex)"
          />
          <v-btn
            data-jest="remove-common-column"
            small="small"
            @click="deleteColumn(index, subIndex)"
          >
            <v-icon>mdi-delete-outline</v-icon>
          </v-btn>
        </span>
        <component :is="components[layoutCommonColumn.type]" v-if="layoutCommonColumn.type !== 'Layout'" />
        <span v-else>
          <span class="rf-layout-settings">
            <v-select
              v-if="layoutCollection.length > 0"
              v-model="selectedLayout"
              label="Choose a Layout to edit"
              :items="layoutCollection"
              item-title="name"
              item-value="id"
            />
            <v-select
              v-if="layoutCollection.length > 0"
              :model-value="defaultLayout"
              label="Default Layout (index)"
              :items="layoutCollection"
              item-title="name"
              item-value="id"
              @update:model-value="settingsStore.currentAppSettings.defaultLayout = $event"
            />
            <v-form @submit.prevent="createLayout">
              <v-text-field
                v-model="createdLayoutName"
                label="Layout Name"
                density="compact"
                variant="underlined"
              />
              <v-btn type="submit">Create layout</v-btn>
            </v-form>
          </span>
          <LayoutEdit :selected-edit-layout="selectedLayout" />
        </span>
        <div
          class="pic-layout--add-column"
          data-jest="add-common-column"
          @click="layoutCommonLine.splice(index + 1,0 , {})"
        >
          <v-icon>mdi-table-column-plus-after</v-icon>
        </div>
      </v-col>
      <div
        v-if="layoutCommonCollection.length > 1"
        class="pic-layout--add-row"
        data-jest="add-common-row-inner"
        @click="layoutCommonCollection.splice(index + 1, 0, [''] )"
      >
        <v-icon>mdi-table-row-plus-after</v-icon>
      </div>
    </v-row>
    <div
      v-if="layoutCommonCollection.length <= 1"
      class="pic-layout--add-row"
      :class="{'no-row': layoutCommonCollection.length === 1}"
      data-test="add-common-row"
      @click="addRow"
    >
      <v-icon>mdi-table-row-plus-after</v-icon>
    </div>
  </div>
  <v-btn color="primary" class="ml-4 mb-4">
    Save Layout
    <v-icon @click="saveLayout()">
      mdi-content-save
    </v-icon>
  </v-btn>
</template>

<style scoped>
.pic-layout {
  &--common-module {
    border: var(--greyDark) 1px solid;
    position: relative;
    padding: var(--m);
    margin: var(--s);
  }

  &--main-container,
  &--row-container {
    position: relative;
  }

  &--add-row, &--add-column {
    transform: translateY(-50%);
    background: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--main);
    height: var(--l);
    width: var(--l);
    border-radius: var(--3xs);
    border: var(--main) 1px solid;
  }

  &--add-row,
  &--add-column {
    position: absolute;
  }

  &--add-row {
    &.no-row {
      top: 50%;
      transform: translateY(50%);
    }

    bottom: 0px;
    right: 50%;
    transform: translateX(-50%);
  }

  &--add-column {
    right: -20px;
    top: 50%;
  }
}
</style>
