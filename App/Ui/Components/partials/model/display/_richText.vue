<template lang="pug">
    div(v-html="html")

</template>
<script>
import { Editor } from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Video from "../../../../rte/tiptap-video";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";

let editor;

export default {
  name: "RichText",
  props: {
    fieldData: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data: function() {
    return {
      html: ""
    };
  },
  mounted() {
    editor = new Editor({
      extensions: [StarterKit, Image, Link, Video, BulletList, ListItem]
    });
    editor.commands.setContent(this.fieldData);
    this.html = editor.getHTML();
  },
  beforeDestroy() {
    editor.destroy();
  }
};
</script>
