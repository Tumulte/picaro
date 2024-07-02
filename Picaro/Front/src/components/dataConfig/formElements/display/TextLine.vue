<script lang="ts" setup>

import {PropType} from "vue";
import {FieldContent, FieldParams} from "@types";

defineProps({
  fieldParams: {
    type: Object as PropType<FieldParams>,
    required: true
  },
  fieldContent: {
    type: Object as PropType<FieldContent>,
    required: false,
    default: null
  }
})
</script>
<template>
  <component :is="fieldParams.template || 'span'" v-if="fieldContent">
    {{ fieldContent.content }}
  </component>
</template>

