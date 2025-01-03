<script lang="ts" setup>
import {computed, ref} from "vue";
import {useSettingsStore} from "@stores/settings";
import {nanoid} from "nanoid";

const settingsStore = useSettingsStore();

const availableLayout = ref(["list", "filterLink", "filterCategories"]);
const selectedEditLayout = ref("");
const isNewLayout = ref(false)

const layoutCollection = computed(() => {
  return settingsStore.currentAppSettings?.layoutCollection
});
const createdLayoutId = ref("");
const defaultLayout = computed(() => {
  return settingsStore.currentAppSettings?.defaultLayout
})

const createdLayoutName = ref('')

const selectedLayoutId = computed(() => {
  return selectedEditLayout.value ||
      settingsStore.currentAppSettings?.filterCollection?.all?.layout ||
      settingsStore.currentAppSettings?.defaultLayout
});

const selectedLayout = computed(() => {
  if (selectedLayoutId.value) {
    return settingsStore.currentAppSettings?.layoutCollection.find(item => item.id === selectedLayoutId.value).layout || [];
  } else {
    return null;
  }
});
const modelCollection = computed(() => {
  return settingsStore.currentAppSettings?.modelCollection ?? []
});

function makeClass(module) {
  return module.type ? `rf-${module.type}-module` : "";
}

function createLayout() {
  if (!createdLayoutId.value) {
    return false
  }
  layoutCollection.value.push({
    name: createdLayoutId.value,
    id: nanoid(),
    layout: []
  });
  createdLayoutId.value = "";
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
    <div class="pic-container">
      <v-select
        v-if="layoutCollection.length > 0"
        :items="layoutCollection"
        :model-value="selectedEditLayout"
        item-title="name"
        item-value="id"
        label="Choose a Layout to edit"
      />
      <v-select
        v-if="layoutCollection.length > 0"
        :items="layoutCollection"
        :model-value="defaultLayout"
        item-title="name"
        item-value="id"
        label="Default Layout (index)"
        @update:model-value="settingsStore.currentAppSettings.defaultLayout = $event"
      />
      <v-btn v-if="!isNewLayout" @click="isNewLayout = true ">
        Create a layout
      </v-btn>
      <v-form v-else @submit.prevent="createLayout">
        <v-text-field
          v-model="createdLayoutName"
          density="compact"
          label="Layout Name"
          variant="underlined"
        />
        <v-btn type="submit">
          Save layout
        </v-btn>
        <v-btn @click="isNewLayout=false">
          Cancel
        </v-btn>
      </v-form>
    </div>
    <div v-for="(layoutLine, index) in selectedLayout" :key="index">
      <v-row v-if="selectedLayout">
        <template v-for="(module) in layoutLine" :key="module.id">
          <v-col :class="makeClass(module)" :cols="module.cols" class="pic-layout--container">
            <div class="pic-container">
              <div class="common-layout-settings">
                <div class="module-type">
                  <v-text-field
                    :model-value="module.cols || 0"
                    class="module-type-size"
                    dense="dense"
                    label="Width"
                    max="11"
                    min="0"
                    type="number"
                    variant="underlined"
                    @input="module.cols = $event.target.value"
                  />
                  <v-select
                    :items="availableLayout"
                    :model-value="module.type || availableLayout[0]"
                    label="Type"
                    @update:model-value="module.type = $event"
                  />
                </div>
                <v-select
                  :items="modelCollection"
                  :model-value="modelCollection.find(item=> item.id === module.model)"
                  item-title="name"
                  item-value="id"
                  label="Model"
                  @update:model-value="module.model = $event"
                />
                TODO CATEGORIES
              </div>
              <component
                :is="module.type ? module.type : 'div'"
                :key="index"
                :module-params="module"
              />
              <div
                class="pic-layout--add-column"
                data-jest="add-column"
                @click="layoutLine.splice(index + 1,0 , initModule(module))"
              >
                <v-icon>mdi-table-column-plus-after</v-icon>
              </div>
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
    </div>
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
.pic-container {
  margin-left: 0 !important;
  margin-right: 0 !important;
  position: relative;
}

.pic-layout {
  &--container {
    padding: 0 var(--l) 0 var(--s)
  }

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

.module-type {
  &-size {
    max-width: 40px;
    margin-right: 1rem;
  }

  display: flex;
  margin-top: -.5rem;
}
</style>
