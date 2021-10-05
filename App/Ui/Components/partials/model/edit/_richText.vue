<template lang="pug">
    div
        h3 {{fieldParams.label}}
        div(v-if="selectedImg")
            span(@click="changeImgWidth('original')") original -
            span( v-for="width in availableImgWidth"  @click="changeImgWidth(width)") {{width}} -
            span(@click="changeImgWidth('thumb')") 150

        div(v-if="editor")
            span( :class="{ 'is-active': editor.isActive('bold') }" @click.stop="editor.chain().focus().toggleBold().run()")
                v-icon mdi-format-bold
            span( :class="{ 'is-active': editor.isActive('italic') }" @click.stop="editor.chain().focus().toggleItalic().run()")
                v-icon mdi-format-italic
            span( :class="{ 'is-active': editor.isActive('heading',{ level: 1 }) }" @click.stop="editor.chain().focus().toggleHeading({ level: 1 }).run()")
                v-icon mdi-format-header-1
            span( :class="{ 'is-active': editor.isActive('heading',{ level: 2 }) }" @click.stop="editor.chain().focus().toggleHeading({ level: 2 }).run()")
                v-icon mdi-format-header-2
            span( :class="{ 'is-active': editor.isActive('heading',{ level: 3 }) }" @click.stop="editor.chain().focus().toggleHeading({ level: 3 }).run()")
                v-icon mdi-format-header-3
            span( :class="{ 'is-active': editor.isActive('codeBlock') }" @click.stop="editor.chain().focus().toggleCodeBlock().run()")
                v-icon mdi-code-array
            span( :class="{ 'is-active': editor.isActive('code') }" @click.stop="editor.chain().focus().toggleCode().run()")
                v-icon mdi-code-not-equal-variant
            span(:class="{ 'is-active': awaitImg }"  @click.stop="addImage")
                v-icon mdi-image
        editor-content(:editor="editor" class="editor-textarea")


</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-2";
import Image from "@tiptap/extension-image";
import rougeSettings from "./../../../../../../rougeSettings.json";

import StarterKit from "@tiptap/starter-kit";

import { mapActions } from "vuex";

export default {
  name: "RichTextEdit",
  components: { EditorContent },
  props: {
    fieldParams: { type: Object, required: true },
    fieldData: { type: Object, default: null },
    isEdit: { type: Boolean, default: false }
  },
  data() {
    return {
      editor: null,
      temporaryContent: null,
      selectedImg: null,
      availableImgWidth: rougeSettings.upload.availableWidth,
      awaitImg: false
    };
  },
  methods: {
    ...mapActions(["awaitConfirmation", "getImageFromLibrary"]),
    async save() {
      this.$emit("saveEdit", this.temporaryContent);
      this.$emit("endEdit");
    },
    async cancel() {
      if (this.temporaryContent) {
        await this.awaitConfirmation({
          type: "warning",
          text: "Are you sure you want to cancel your changes ?"
        });
      }
      this.$emit("endEdit");
    },
    updateModelData(content) {
      this.$emit("updateData", {
        name: this.fieldParams.name,
        value: content
      });
    },
    changeImgWidth(width) {
      let [name, ext] = this.selectedImg.split(".");
      name = name.split("-");
      name.splice(-1);
      name = name.join("-");
      this.editor
        .chain()
        .focus()
        .setImage({
          src: `/public/uploaded/${name}-${width}.${ext}`
        })
        .run();
    },
    async addImage() {
      this.awaitImg = true;

      const fileName = await this.getImageFromLibrary();

      if (fileName) {
        const [name, ext] = fileName.split(".");
        this.editor
          .chain()
          .focus()
          .setImage({
            src: "/public/uploaded/" + name + "-thumb." + ext
          })
          .run();
        this.selectedImg = name + "-thumb." + ext;
        this.awaitImg = false;
      }
    }
  },
  mounted() {
    this.editor = new Editor({
      extensions: [StarterKit, Image],
      content: this.fieldData,
      onUpdate: ({ editor }) => {
        const content = Object.assign({}, editor.getJSON(), {
          fieldType: "rich-text",
          required: this.fieldParams.required
        });

        this.updateModelData(content);
      }
    });
    this.editor.on("selectionUpdate", ({ editor }) => {
      const src = editor.state.selection.node?.attrs?.src;
      if (src) {
        this.selectedImg = src.split("/").at(-1);
      } else {
        this.selectedImg = null;
      }
    });
  },
  beforeDestroy() {
    this.editor.destroy();
  }
};
</script>
<style scoped>
.editor-textarea {
  border: 1px solid #ddd;
}

.is-active .theme--light.v-icon {
  color: coral;
}
</style>
