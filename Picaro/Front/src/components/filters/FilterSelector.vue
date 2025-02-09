<script lang="ts" setup>
import {ref} from "vue";

const filterList = ref([]);
const currentFilterList = ref([]);
const displaySave = ref(false);

function checkForNewElement() {
  return true
}

function saveFilterList() {
  return true
}
</script>

<template>
  <div>
    <v-combobox
      v-model="currentFilterList"
      :items="filterList"
      :multiple="true"
      item-text="label"
      item-value="id"
      label="Categories"
      small-chips="small-chips"
      @change="checkForNewElement"
    />
    <v-btn v-if="displaySave" @click="saveFilterList">
      Save
    </v-btn>
  </div>
</template>

<style scoped>

</style>
