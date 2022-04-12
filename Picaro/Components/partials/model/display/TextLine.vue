<template>
  <component :is="fieldParams.template || 'span'" v-if="fieldData.content">
    {{ fieldData.content }}
  </component>
</template>
<script setup lang="ts">

const props = defineProps({
  fieldData: {
    type: Object, default: () => {
    }
  },
  fieldParams: {
    type: Object, default: () => {
    }
  }
})
</script>
