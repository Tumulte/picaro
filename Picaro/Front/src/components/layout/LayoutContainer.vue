<script lang="ts" setup>
import {ref} from "vue";
import CommonLayoutEdit from "@components/layout/CommonLayoutEdit.vue";
import LayoutEdit from "@components/layout/LayoutEdit.vue";

const tabs = ref<'common' | 'dynamic'>('dynamic')

</script>
<template>
  <v-tabs v-model="tabs">
    <v-tab value="common">
      Common layout
    </v-tab>
    <v-tab value="dynamic">
      Dynamic layout
    </v-tab>
  </v-tabs>
  <v-tabs-window v-model="tabs">
    <v-tabs-window-item value="common">
      <CommonLayoutEdit />
    </v-tabs-window-item>
    <v-tabs-window-item value="dynamic">
      <LayoutEdit />
    </v-tabs-window-item>
  </v-tabs-window>
</template>

<style scoped>

</style>
