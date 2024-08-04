<script lang="ts" setup>
import {Editor} from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Video from "../../../../rte/tiptap-video";
import {FieldContent} from "@types";
import {onBeforeUnmount, ref, watch} from "vue";


const props = defineProps<{
  fieldContent: FieldContent
}>()


let editor;

const html = ref("")

watch(() => props.fieldContent, () => {
  editor = new Editor({
    extensions: [StarterKit, Image, Link, Video]
  });
  editor.commands.setContent(props.fieldContent);
  html.value = editor.getHTML();
}, {immediate: true})

onBeforeUnmount(() => {
  editor.destroy();
})
</script>
<template>
  <div v-html="html" />
</template>
