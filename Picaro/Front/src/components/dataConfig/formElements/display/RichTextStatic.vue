<script lang="ts" setup>
import {FieldContent} from "@types";


defineProps<{
  fieldContent: FieldContent
}>()


</script>
<template>
  <div v-html="fieldContent.html" />
</template>
