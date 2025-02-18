<script lang="ts" setup>
import {EditorContent, useEditor} from "@tiptap/vue-3";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";

import StarterKit from "@tiptap/starter-kit";
import {onMounted, ref} from "vue";
import {FieldParams, RichTextContent, RichTextEditorJson} from "@types";
import {generateHTML} from "@tiptap/core";
import {useUtilsStore} from "@stores/utils";

const utilsStore = useUtilsStore()

const sizeList = [330, 100, 200, 500, 1000, 1500]

const imageFile = ref<File>();
const allImages = ref()

const rteImage = ref('')

fetchImages()

function fetchImages() {
  allImages.value = import.meta.glob('@uploads/picaro explained.jpg', {
    query: {format: 'webp', w: "330;100;200;500;1000;1500", picture: ''},
    import: 'default',
    eager: true
  })
}


const props = defineProps<{
  fieldParams: FieldParams;
  fieldContent?: RichTextContent | null;
}>()


const emit = defineEmits<{
  updateData: [[string, RichTextEditorJson]]
  endEdit: []
}>()

const editor = useEditor({
  extensions:
      [StarterKit,
        Image.configure({
          inline: true,
          HTMLAttributes: {
            class: 'pic-rte-image',
          },
        }),
        Link,
        TextAlign.configure({
          types: ['heading', 'paragraph'],
        })
      ],
  onUpdate: ({editor}) => {
    updateModelData(editor.getJSON());
  }
})

const imageDrawer = ref(false);

const selectedImg = ref<string | null>(null)

onMounted(() => {

      editor.value?.on("selectionUpdate", ({editor}) => {
        const src = editor.state.selection.$anchor.node()?.attrs?.src;
        if (src) {
          selectedImg.value = src.split("/").at(-1);
        } else {
          selectedImg.value = null;
        }
      });
      editor.value?.commands.setContent(props.fieldContent?.json || "");

    }
)

function setUrl() {
  if (!editor.value) {
    return;
  }
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

function updateModelData(content: RichTextEditorJson) {
  emit("updateData", [props.fieldParams.id, {
    json: content,
    html: generateHTML(
        content,
        [
          StarterKit,
          Image,
          Link
        ],
    )
  }]);
}

function selectImage(path: string) {
  editor.value?.commands.setImage({src: path})
}

function uploadImage() {
  if (imageFile.value) {
    const formData = new FormData();
    formData.append('image', imageFile.value);
    fetch(`/api/setup/uploadimages`, {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(() => {
      fetchImages()
      utilsStore.addAlert({
        text: "Image uploaded",
        type: "success"
      });
    }).catch((error) => console.error(error));
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
        :class="{ 'is-active': imageDrawer }"
        @click.stop="imageDrawer = !imageDrawer"
      >
        <v-icon>mdi-image</v-icon>
      </span>
      <span
        @click.stop="editor.chain().focus().setTextAlign('left').run()"
      >
        <v-icon>mdi-format-align-left</v-icon>
      </span>
      <span
        @click.stop="editor.chain().focus().setTextAlign('center').run()"
      >
        <v-icon>mdi-format-align-center</v-icon>
      </span>
      <span
        @click.stop="editor.chain().focus().setTextAlign('right').run()"
      >
        <v-icon>mdi-format-align-right</v-icon>
      </span>
    </div>
    <editor-content :editor="editor" class="editor-textarea" data-testid="rte-editor" />
  </div>
  <v-navigation-drawer
    v-model="imageDrawer"
    location="bottom"
    width="500"
  >
    <div class="pic-container pic-container-s">
      <v-form>
        <v-file-input
          v-model="imageFile"
          accept="image/*"
          density="compact"
          label="Image"
        />
        <v-btn class="ml-4" @click="uploadImage">
          Upload
        </v-btn>
      </v-form>
      <div v-for="image in allImages" :key="image">
        <img
          :class="{selected: image === rteImage}"
          :src="image[0]"
          class="uploaded-image"
        >
        <div class="size-btn-container">
          <v-btn
            v-for="(imageSize, index) in (image)"
            :key="imageSize"
            density="compact"
            variant="text"
            @click="selectImage(imageSize)"
          >
            {{ sizeList[index] }}px
          </v-btn>
        </div>
      </div>
    </div>
  </v-navigation-drawer>
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

.uploaded-image {
  max-height: 100px;
  display: inline-block;
}

.v-form {
  display: flex;
  align-items: start;
}

.size-btn-container {
  width: 250px;
}
</style>
