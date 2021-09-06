<template lang="pug">
    div
        formFieldEditCommon(@changeParentCommonData="getCommonData($event)" @updateEditedFieldData="saveEdit()" :edit="editOrAdd" :fieldData="fieldData")
        v-btn(v-if="isEdited" data-jest='cancel-boolean' @click="cancelEdit") Cancel
        v-btn(v-if="isEdited" data-jest='save-boolean' @click="saveEdit" :disabled="!valid") Save
        v-btn(v-else-if="edit && !isEdited" data-jest="add-button" @click="addField" :disabled="!valid" outlined) Add field
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";
import formFieldEditCommon from "./formEditCommons/_formFieldEditCommon.vue";

export default {
  name: "RichText",
  components: { EditorContent, formFieldEditCommon },
  data: function() {
    return {
      editor: null,
      editorString: ""
    };
  },

  mounted() {
    this.editor = new Editor({
      extensions: [StarterKit],
      onUpdate: ({ editor }) => {
        this.editorString = JSON.stringify(editor.getJSON());
      }
    });
  },
  beforeDestroy() {
    this.editor.destroy();
  },
  methods: {
    getCommonData: function(event) {
      event.type = "RichText";
      this.commonData = event;
    }
  }
};
</script>

<style scoped>
.editor-textarea {
  border: 1px solid #ddd;
}
</style>
