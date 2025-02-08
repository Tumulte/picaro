<script lang="ts" setup>
import {FieldContentParams} from "@types";


defineProps<{
  fieldContent: FieldContentParams
}>()


</script>
<template>
  <div v-html="fieldContent.html" />
</template>
