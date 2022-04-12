<script setup lang="ts">
import {Editor, EditorContent} from "@tiptap/vue-3";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import Video from "../../../rte/tiptap-video";
import picaroSettings from "../../../../picaroSettings";


import StarterKit from "@tiptap/starter-kit";
import {ref, onMounted} from "vue";
import {FieldData} from "@picTypes/index";


const props = defineProps<{
  fieldParams: {
    name: string;
    label: string;
    required: boolean;
    id: string;
  };
  fieldData: {
    content: string;
  } | null;
  isEdit: boolean;
}>()

const emit = defineEmits<{
  (emit: 'updateData', value: [string, FieldData]): void
  (emit: 'saveEdit', value: string): void
  (emit: 'endEdit'): void
}>()

const editor = ref<Editor | null>(null)
const temporaryContent = ref<string | null>(null)
const selectedImg = ref<string | null>(null)
const availableImgWidth = ref<number[]>(picaroSettings.upload.availableWidth)
const awaitImg = ref(false)
const awaitVideo = ref(false)
const toggleUrlInput = ref(false)
const currentUrl = ref("")

onMounted(() => {
      editor.value = new Editor({
        extensions: [StarterKit, Image, Link, Video, BulletList, ListItem],
        content: props.fieldData,
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
    }
)

async function save() {
  emit("saveEdit", temporaryContent.value);
  emit("endEdit");
}

function setUrl() {
  const previousUrl = editor.getAttributes("link").href;
  const url = window.prompt("URL", previousUrl);
  if (url === null) {
    return;
  }
  if (url === "") {
    editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .unsetLink()
        .run();

    return;
  }
  editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({href: url})
      .run();
}

async function cancel() {
  if (temporaryContent) {
    await awaitConfirmation({
      type: "warning",
      text: "Are you sure you want to cancel your changes ?"
    });
  }
  emit("endEdit");
}

function updateModelData(content) {
  emit("updateData", [props.fieldParams.id, content]);
}

function changeImgWidth(width) {
  // eslint-disable-next-line prefer-const
  let [name, ext] = selectedImg.value.split(".");
  name = name.split("-");
  name.splice(-1);
  name = name.join("-");
  editor
      .chain()
      .focus()
      .setImage({
        src: `/uploaded/${name}-${width}.${ext}`
      })
      .run();
}

async function addImage() {
  awaitImg.value = true;

  const fileName = await getMediaFromLibrary();

  if (fileName) {
    const [name, ext] = fileName.split(".");
    if (
        !["jpg", "jpeg", "png", "gif", "webp", "apng", "avif"].includes(ext)
    )
      return;
    editor
        .chain()
        .focus()
        .setImage({
          src: "/uploaded/" + name + "-thumb." + ext
        })
        .run();
    selectedImg.value = name + "-thumb." + ext;
    awaitImg.value = false;
  }
}

async function addVideo() {
  awaitVideo.value = true;

  const fileName = await getMediaFromLibrary();

  if (fileName) {
    const [name, ext] = fileName.split(".");
    if (ext !== "webm") return;
    editor
        .chain()
        .focus()
        .setVideo({
          src: "/uploaded/" + name + "-original." + ext,
          type: "video/webm"
        })
        .run();
    awaitVideo.value = false;
  }
}

/*
mounted() {
    this.editor = new Editor({
      extensions: [StarterKit, Image, Link, Video, BulletList, ListItem],
      content: this.fieldData,
      onUpdate: ({editor}) => {
        const content = Object.assign({}, editor.getJSON(), {
          fieldType: "rich-text",
          required: this.fieldParams.required
        });

        this.updateModelData(content);
      }
    });
    this.editor.on("selectionUpdate", ({editor}) => {
      const src = editor.state.selection.node?.attrs?.src;
      if (src) {
        this.selectedImg = src.split("/").at(-1);
      } else {
        this.selectedImg = null;
      }
    });
  },
  beforeUnmount() {
    this.editor.destroy();
  }
*/
</script>
<template>
  <div>
    <h3>{{ fieldParams.label }}</h3>
    <div v-if="selectedImg"><span @click="changeImgWidth('original')">original -</span><span
        v-for="width in availableImgWidth" @click="changeImgWidth(width)">{{ width }} -</span><span
        @click="changeImgWidth('thumb')">150</span></div>
    <div v-if="editor"><span :class="{ 'is-active': editor.isActive('bold') }"
                             @click.stop="editor.chain().focus().toggleBold().run()">
  <v-icon>mdi-format-bold</v-icon>
  </span><span :class="{ 'is-active': editor.isActive('italic') }"
               @click.stop="editor.chain().focus().toggleItalic().run()">
  <v-icon>mdi-format-italic</v-icon>
  </span><span :class="{ 'is-active': editor.isActive('heading',{ level: 1 }) }"
               @click.stop="editor.chain().focus().toggleHeading({ level: 1 }).run()">
  <v-icon>mdi-format-header-1</v-icon>
  </span><span :class="{ 'is-active': editor.isActive('heading',{ level: 2 }) }"
               @click.stop="editor.chain().focus().toggleHeading({ level: 2 }).run()">
  <v-icon>mdi-format-header-2</v-icon>
  </span><span :class="{ 'is-active': editor.isActive('heading',{ level: 3 }) }"
               @click.stop="editor.chain().focus().toggleHeading({ level: 3 }).run()">
  <v-icon>mdi-format-header-3</v-icon>
  </span><span @click="editor.chain().focus().toggleBulletList().run()"
               :class="{ 'is-active': editor.isActive('bulletList') }">
  <v-icon>mdi-format-list-bulleted</v-icon>
  </span><span :class="{ 'is-active': editor.isActive('codeBlock') }"
               @click.stop="editor.chain().focus().toggleCodeBlock().run()">
  <v-icon>mdi-code-array</v-icon>
  </span><span :class="{ 'is-active': editor.isActive('link') }" @click="setUrl">
  <v-icon>mdi-link</v-icon>
  </span><span :class="{ 'is-active': editor.isActive('code') }"
               @click.stop="editor.chain().focus().toggleCode().run()">
  <v-icon>mdi-code-not-equal-variant</v-icon>
  </span><span :class="{ 'is-active': awaitImg }" @click.stop="addImage">
  <v-icon>mdi-image</v-icon>
  </span><span :class="{ 'is-active': awaitVideo }" @click.stop="addVideo">
  <v-icon>mdi-video</v-icon>
  </span></div>
    <editor-content class="editor-textarea" :editor="editor"></editor-content>
  </div>
</template>
<style scoped>
.editor-textarea {
  border: 1px solid #ddd;
}

.is-active .theme--light.v-icon {
  color: coral;
}
</style>
