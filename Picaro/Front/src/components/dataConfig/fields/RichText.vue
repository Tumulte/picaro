<script lang="ts" setup>
import {Editor, EditorContent} from "@tiptap/vue-3";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";

import StarterKit from "@tiptap/starter-kit";
import {onMounted, ref} from "vue";
import {FieldContent, FieldParams} from "@types";
import {useSettingsStore} from "@stores/settings";


const props = defineProps<{
  fieldParams: FieldParams;
  fieldContent?: FieldContent;
}>()

const emit = defineEmits<{
  (emit: 'updateData', value: [string, FieldParams]): void
  (emit: 'saveEdit', value: string): void
  (emit: 'endEdit'): void
}>()

const editor = ref<typeof Editor | null>(null)
const selectedImg = ref<string | null>(null)

const settingsStore = useSettingsStore()

onMounted(() => {

      editor.value = new Editor({
        extensions: [StarterKit, Image, Link, TextAlign.configure({
          types: ['heading', 'paragraph', 'image'],
        })],
        onUpdate: ({editor}) => {
          const content = Object.assign({}, editor.getJSON(), {
            fieldType: "rich-text",
            required: props.fieldParams.required
          });

          updateModelData(content);
        }
      });
      editor.value.on("selectionUpdate", ({editor}) => {
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

function updateModelData(content: FieldContent) {
  emit("updateData", [props.fieldParams.id, content]);
}

function addImage() {
  if (settingsStore.rteImage) {
    editor.value.commands.setImage({src: `/api/uploads/${settingsStore.rteImage}`})
  }
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
      </span>
      <span
        :class="{ 'is-active': editor.isActive('bulletList') }"
        @click="editor.chain().focus().toggleBulletList().run()"
      >
        <v-icon>mdi-format-list-bulleted</v-icon>
      </span>
      <span
        :class="{ 'is-active': editor.isActive('codeBlock') }"
        @click.stop="editor.chain().focus().toggleCodeBlock().run()"
      >
        <v-icon>mdi-code-array</v-icon>
      </span>
      <span :class="{ 'is-active': editor.isActive('link') }" @click="setUrl">
        <v-icon>mdi-link</v-icon>
      </span>
      <span
        :class="{ 'is-active': editor.isActive('code') }"
        @click.stop="editor.chain().focus().toggleCode().run()"
      >
        <v-icon>mdi-code-not-equal-variant</v-icon>
      </span>
      <span
        :class="{ 'is-active': settingsStore.rteImage }"
        @click.stop="addImage()"
      >
        <v-icon>mdi-image</v-icon>
      </span>
      <span
        @click.stop="editor.chain().focus().setTextAlign('left').run()"
      >
        <v-icon>mdi-format-align-left</v-icon>
      </span>
      <span
        @click.stop="editor.chain().focus().setTextAlign('right').run()"
      >
        <v-icon>mdi-format-align-right</v-icon>
      </span>
    </div>
    <editor-content :editor="editor" class="editor-textarea" />
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
