<script lang="ts" setup>
import {computed, ref} from "vue";
import {useSettingsStore} from "@stores/settings";

const props = defineProps<{
  selectedEditLayout: string
}>()

const settings = useSettingsStore()
const availableLayout = ref(["filterLink", "list", "filterCategories"]);
const componentKey = ref(0);
const selectedLayoutName = computed(() => {
  return props.selectedEditLayout ||
      settings.currentAppSettings?.filterCollection?.all?.layout ||
      settings.currentAppSettings?.defaultLayout
});
const selectedLayout = computed(() => {
  if (selectedLayoutName.value) {
    return settings.currentAppSettings?.layoutCollection.find(item => item.id === selectedLayoutName.value).layout || [];
  } else {
    return null;
  }
});
const modelCollection = computed(() => {
  return settings.currentAppSettings?.modelCollection ?? []
});

function makeClass(module) {
  return module.type ? `rf-${module.type}-module` : "";
}

function initModule(module) {
  return {
    type: module.type,
    model: module.model,
    categories: module.categories,
    cols: module.cols
  };
}
</script>

<template>
  <div class="pic-layout--dynamic-module">
    <div
      class="pic-module-label"
    >
      DYNAMIC LAYOUT
    </div>
    <template v-for="(layoutLine, index) in selectedLayout">
      <v-row v-if="selectedLayout" :key="index" class="rf-layout--container pic-row-container">
        <template v-for="(module) in layoutLine">
          <v-col :class="makeClass(module)" :cols="module.cols" class="pic-layout--module">
            <div class="common-layout-settings">
              <v-text-field
                :value="module.cols || 0"
                dense="dense"
                label="Width"
                max="11"
                min="0"
                type="number"
                @input="()=>{}"
              />
              <v-select
                :items="availableLayout"
                :value="module.type"
                label="Type"
                @update:model-value="module.type = $event"
              />
              <v-select
                :items="modelCollection"
                :model-value="modelCollection.find(item=> item.id === module.model)"
                item-title="name"
                item-value="id"
                label="Model"
                @update:model-value="module.model = $event"
              />
              <v-select
                :items="settings.currentAppSettings.categories"
                :multiple="true"
                item-title="label"
                item-value="id"
                @update:model-value="module.categories = $event"
              />
            </div>
            <component
              :is="module.type ? module.type : 'div'"
              :key="index + componentKey"
              :module-params="module"
            />
            <div
              class="pic-layout--add-column"
              data-jest="add-column"
              @click="layoutLine.splice(index + 1,0 , initModule(module))"
            >
              <v-icon>mdi-table-column-plus-after</v-icon>
            </div>
          </v-col>
        </template>
        <div
          class="pic-layout--add-row"
          data-jest="add-row-inner"
          @click="selectedLayout.splice(index + 1, 0, [ initModule(layoutLine[0])])"
        >
          <v-icon>mdi-table-row-plus-after</v-icon>
        </div>
      </v-row>
    </template>
    <div
      class="pic-layout--add-row"
      data-jest="add-row"
      @click="selectedLayout.push([{model:null, type:null, categories: null}])"
    >
      <v-icon>mdi-table-row-plus-after</v-icon>
    </div>
  </div>
</template>

<style scoped>
.pic-layout {
  &--dynamic-module {
    background: var(--white);
  }

  &--module {
    border: var(--main) var(--4xs) solid;
    border-radius: var(--3xs);
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
    background: var(--main);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
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
    bottom: 15px;
    right: 50%;
    transform: translateX(-50%);
  }

  &--add-column {
    right: -20px;
    top: 50%;
  }
}
</style>
