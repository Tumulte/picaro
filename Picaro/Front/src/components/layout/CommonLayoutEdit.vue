<script lang="ts" setup>

import {computed} from "vue";
import FilterCategories from "@components/filters/FilterCategoriesEdit.vue";
import type {Settings} from "@types";
import {useSettingsStore} from "@stores/settings";
import {useUtilsStore} from "@stores/utils";
import {updateSettings} from "@components/utils/api";

const utilStore = useUtilsStore()
const settingsStore = useSettingsStore();

const modelCollection = computed(() => {
  return settingsStore.currentAppSettings?.modelCollection ?? []
});

const layoutCommonCollection = computed<Settings["layoutCommonCollection"]>(() => {
  return settingsStore.currentAppSettings?.layoutCommonCollection || [];
});


const components = {
  /*
  FilterLayout: "FilterLayout",
  FilterLink: "FilterLink",
  */
  Layout: "Layout",
  List: "List",
  FilterCategories
};


function addRow() {
  layoutCommonCollection.value.push([{}]);
}

function deleteColumn(line: number, column: number) {
  utilStore.awaitConfirmation({
    text:
        "Are you sure you want to delete this module ?",
    type: "warning"
  }).then(() => {
    layoutCommonCollection.value[line].splice(column, 1)
    if (layoutCommonCollection.value[line].length === 0) {
      layoutCommonCollection.value.splice(line, 1)
    }
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
        :cols="layoutCommonColumn.cols"
        class="pic-layout--container pic-layout--common-module pic-module-container"
      >
        <div class="pic-container">
          <span
            class="pic-layout-settings"
          >
            <div class="module-type">
              <v-text-field
                :model-value="layoutCommonColumn.cols || 0"
                class="module-type-size"
                density="compact"
                label="Width"
                max="12"
                min="0"
                type="number"
                variant="underlined"
                @input="layoutCommonColumn.cols = $event.target.value"
              />
              <v-select
                :items="Object.keys(components)"
                :model-value="layoutCommonColumn.type || 'none'"
                density="compact"
                label="Module"
                variant="underlined"
                @update:modelValue="changeModule($event, index, subIndex)"
              />
            </div>
          </span>
          <component
            :is="components[layoutCommonColumn.type]"
            v-if="typeof components[layoutCommonColumn.type] !== 'string'"
          />

          <div v-else>
            <v-select
              :items="modelCollection"
              :model-value="modelCollection.find(item=> item.id === layoutCommonColumn.model)"
              item-title="name"
              item-value="id"
              label="Model"
              @update:model-value="layoutCommonColumn.model = $event"
            />
            <v-select
              :items="settingsStore.currentAppSettings.categories"
              :multiple="true"
              item-title="label"
              item-value="id"
              label="Categories"
              @update:model-value="layoutCommonColumn.categories = $event"
            />
          </div>

          <div class="text-right">
            <v-btn
              data-jest="remove-common-column"
              small="small"
              @click="deleteColumn(index, subIndex)"
            >
              <v-icon>mdi-delete-outline</v-icon>
            </v-btn>
          </div>

          <div
            class="pic-layout--add-column"
            data-jest="add-common-column"
            @click="layoutCommonLine.splice(index + 1,0 , {})"
          >
            <v-icon>mdi-table-column-plus-after</v-icon>
          </div>
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
      :class="{'no-row': layoutCommonCollection.length === 0}"
      class="pic-layout--add-row"
      data-test="add-common-row"
      @click="addRow"
    >
      <v-icon>mdi-table-row-plus-after</v-icon>
    </div>
  </div>
  <v-btn v-if="layoutCommonCollection.length !== 0" class="ml-4 mb-4" color="primary" @click="saveLayout()">
    Save Layout
    <v-icon>
      mdi-content-save
    </v-icon>
  </v-btn>
</template>

<style scoped>
.pic-container {
  margin-left: 0 !important;
  margin-right: 0 !important;
  position: relative;
}

.pic-layout {
  &--container {
    padding: 0 var(--l) 0 var(--s)
  }

  &--main-container,
  &--row-container {
    position: relative;
  }

  &--add-row, &--add-column {
    transform: translate(-50%, -50%);
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
    right: -30px;
    top: 50%;
  }
}

.module-type {
  &-size {
    max-width: 40px;
    margin-right: 1rem;
  }

  display: flex;
  margin-top: -.5rem;
}
</style>
