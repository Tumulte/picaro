<script setup lang="ts">
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
      label="Categories"
      multiple="multiple"
      small-chips="small-chips"
      :items="filterList"
      item-text="label"
      item-value="id"
      @change="checkForNewElement"
    />
    <v-btn v-if="displaySave" @click="saveFilterList">
      Save
    </v-btn>
  </div>
</template>

<style scoped>

</style>
