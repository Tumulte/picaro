<script setup lang="ts">
import {Editor, EditorContent} from "@tiptap/vue-3";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import type {EditorEvents} from "@tiptap/core";


import StarterKit from "@tiptap/starter-kit";
import {ref, onMounted} from "vue";
import {FieldContent, FieldParams} from "@types";


const props = defineProps<{
  fieldParams: FieldParams;
  fieldContent?: FieldContent;
}>()

const emit = defineEmits<{
  (emit: 'updateData', value: [string, FieldParams]): void
  (emit: 'saveEdit', value: string): void
  (emit: 'endEdit'): void
}>()

const editor = ref<any | null>(null)
const temporaryContent = ref<string | null>(null)
const selectedImg = ref<string | null>(null)
const availableImgWidth = ref<number[]>([]) // todo
const awaitImg = ref(false)
const awaitVideo = ref(false)

onMounted(() => {
      editor.value = new Editor({
        extensions: [StarterKit, Image, Link],
        onUpdate: ({editor}) => {
          const content = Object.assign({}, editor.getJSON(), {
            fieldType: "rich-text",
            required: props.fieldParams.required
          });

          updateModelData(content);
        }
      });
      editor.value.on("selectionUpdate", ({editor}: any) => {
        const src = editor.state.selection.node?.attrs?.src;
        if (src) {
          selectedImg.value = src.split("/").at(-1);
        } else {
          selectedImg.value = null;
        }
      });
      editor.value.commands.setContent(props.fieldContent || "");

    }
)


async function save() {
  emit("saveEdit", temporaryContent.value);
  emit("endEdit");
}

function setUrl() {
  const previousUrl = editor.value.getAttributes("link").href;
  const url = window.prompt("URL", previousUrl);
  if (url === null) {
    return;
  }
  if (url === "") {
    editor.value
        .chain()
        .focus()
        .extendMarkRange("link")
        .unsetLink()
        .run();

    return;
  }
  editor.value
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({href: url})
      .run();
}

async function cancel() {
  emit("endEdit");
}

function updateModelData(content: FieldContent) {
  emit("updateData", [props.fieldParams.id, content]);
}


</script>
<template>
  <div>
    <h3 class="pic-field-title">
      {{ fieldParams.label }}
    </h3>
    <div v-if="editor">
      <span
        :class="{ 'is-active': editor.isActive('bold') }"
        @click.stop="editor.chain().focus().toggleBold().run()"
      >
        <v-icon>mdi-format-bold</v-icon>
      </span><span
        :class="{ 'is-active': editor.isActive('italic') }"
        @click.stop="editor.chain().focus().toggleItalic().run()"
      >
        <v-icon>mdi-format-italic</v-icon>
      </span><span
        :class="{ 'is-active': editor.isActive('heading',{ level: 1 }) }"
        @click.stop="editor.chain().focus().toggleHeading({ level: 1 }).run()"
      >
        <v-icon>mdi-format-header-1</v-icon>
      </span><span
        :class="{ 'is-active': editor.isActive('heading',{ level: 2 }) }"
        @click.stop="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      >
        <v-icon>mdi-format-header-2</v-icon>
      </span><span
        :class="{ 'is-active': editor.isActive('heading',{ level: 3 }) }"
        @click.stop="editor.chain().focus().toggleHeading({ level: 3 }).run()"
      >
        <v-icon>mdi-format-header-3</v-icon>
      </span><span
        :class="{ 'is-active': editor.isActive('bulletList') }"
        @click="editor.chain().focus().toggleBulletList().run()"
      >
        <v-icon>mdi-format-list-bulleted</v-icon>
      </span><span
        :class="{ 'is-active': editor.isActive('codeBlock') }"
        @click.stop="editor.chain().focus().toggleCodeBlock().run()"
      >
        <v-icon>mdi-code-array</v-icon>
      </span><span :class="{ 'is-active': editor.isActive('link') }" @click="setUrl">
        <v-icon>mdi-link</v-icon>
      </span><span
        :class="{ 'is-active': editor.isActive('code') }"
        @click.stop="editor.chain().focus().toggleCode().run()"
      >
        <v-icon>mdi-code-not-equal-variant</v-icon>
      </span>
    </div>
    <editor-content class="editor-textarea" :editor="editor" />
  </div>
</template>
<style scoped>
.editor-textarea {
  margin: var(--xs) 0;
  border: 1px solid var(--greyDark);


  :deep(.tiptap) {
    > * {
      padding: 0 var(--xs);
    }

    p:first-of-type {
      margin-top: 0;
      padding-top: var(--xs);
    }

    p:last-of-type {
      margin-bottom: 0;
      padding-bottom: var(--xs);
    }
  }

}

.is-active :deep(.v-icon) {
  color: var(--main);
}
</style>
