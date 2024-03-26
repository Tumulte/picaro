<script setup lang="ts">

import {PropType} from "vue";
import {FieldContent, FieldParams} from "@types";

const props = defineProps({
  fieldParams: {
    type: Object as PropType<FieldParams>,
    required: true
  },
  fieldContent: {
    type: Object as PropType<FieldContent>,
    required: false,
    default: ""
  }
})
</script>
<template>
  <component :is="fieldParams.template || 'span'" v-if="fieldContent">
    {{ fieldContent.content }}
  </component>
</template>

