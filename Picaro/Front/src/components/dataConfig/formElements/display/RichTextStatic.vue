<script lang="ts" setup>
import {RichTextContent} from "@types";


defineProps<{
  fieldContent: RichTextContent
}>()


</script>
<template>
  <div v-html="fieldContent.html" />
</template>
