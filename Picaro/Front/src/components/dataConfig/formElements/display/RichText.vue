<script lang="ts" setup>
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import {FieldContent} from "@types";
import {ref, watch} from "vue";
import {generateHTML} from '@tiptap/core'


const props = defineProps<{
  fieldContent: FieldContent
}>()


const html = ref("")

watch(() => props.fieldContent, () => {
  html.value = generateHTML(
      props.fieldContent,
      [
        StarterKit,
        Image,
        Link
      ],
  )
}, {immediate: true})

</script>
<template>
  <div v-html="html" />
</template>
