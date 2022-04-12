<script setup lang="ts">
import {useSettingsStore} from "@stores/settings";
import {StyleSet} from "@types";
import {computed, ref, watch} from "vue";

const settingsStore = useSettingsStore()

const emit = defineEmits(['reloadSettings'])

const styleSet = settingsStore.currentStyleSet as StyleSet

const selectedTag = ref<string>("")

function selectTag(tag: string) {
  if (selectedTag.value === tag) {
    selectedTag.value = "";
  }
  selectedTag.value = tag;
}


const ratio = computed(() => {
  if (!selectedTag.value) return 0
  const selectedTagHeight = parseFloat(styleSet.ratioCollection[selectedTag.value]['line-height']) + parseFloat(styleSet.ratioCollection[selectedTag.value]['margin-bottom']) + parseFloat(styleSet.ratioCollection[selectedTag.value]['margin-top']);

  return selectedTagHeight.toFixed(1)
})

</script>

<template>
  <v-container class="pic-content-container">
    <v-row class="reset-margin-bottom">
      <v-col class="pa-0 rf-ratio-text-container" cols="8">
        <template v-for="(data, tag) in styleSet.ratioCollection">
          <div
            v-if="tag !== 'html'"
            class="pic-ratio--text-example"
            :class="{'--selected-tag': tag === selectedTag}"
            @click="selectTag(tag)"
          >
            <component :is="tag" class="--inner-text-example">
              {{ tag }}
            </component>
          </div>
        </template>
        <div
          class="pic-ratio--text-example"
        >
          Size for base text
        </div>
      </v-col>
      <v-col v-if="selectedTag" class="pa-0" cols="4">
        <v-text-field
          v-model="styleSet.ratioCollection[selectedTag]['font-size']"
          type="number"
          step="0.1"
          data-jest="ratio-fs"
          label="Font size"
          @update:modelValue="emit('reloadSettings')"
        />
        <v-text-field
          v-model="styleSet.ratioCollection[selectedTag]['line-height']"
          type="number"
          step="0.1"
          data-jest="ratio-lh"
          label="Line height"
          @update:modelValue="emit('reloadSettings')"
        />
        <v-text-field
          v-model="styleSet.ratioCollection[selectedTag]['margin-bottom']"
          type="number"
          step="0.1"
          data-jest="ratio-mb"
          label="Margin bottom"
          @update:modelValue="emit('reloadSettings')"
        />
        <v-text-field
          v-model="styleSet.ratioCollection[selectedTag]['margin-top']"
          type="number"
          step="0.1"
          data-jest="ratio-mt"
          label="Margin top"
          @update:modelValue="emit('reloadSettings')"
        />
        Ratio header height / base height : {{ ratio }}
      </v-col>
    </v-row>
    <v-row>
      <v-text-field
        v-model="styleSet.ratioCollection.html['font-size']"
        type="number"
        label="font-size"
        data-jest="main-font-size"
        @update:modelValue="emit('reloadSettings')"
      />
      <v-text-field
        v-model="styleSet.ratioCollection.html['line-height']"
        type="number"
        label="line height"
        step="1"
        data-jest="main-line-height"
        @update:modelValue="emit('reloadSettings')"
      />
    </v-row>
  </v-container>
</template>

<style scoped>

.pic-ratio--text-example > * {
  display: inline-block;
}

.pic-ratio--text-example {
  position: relative;
}

.pic-ratio--text-example::before {
  content: "";
  position: absolute;
  left: -1rlh;
  top: 0;
  bottom: 0;
  background: var(--warning);
  right: 100%;
}

.pic-ratio--text-example:nth-of-type(odd)::before {
  background: var(--main);
}

</style>
