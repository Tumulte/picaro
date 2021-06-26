<template lang="pug">
    div
        input(v-model="editorString")
        div
            span( :class="{ 'is-active': isActive.bold() }" @click.stop="editor.chain().focus().toggleBold().run()")
                v-icon mdi-format-bold
            span( :class="{ 'is-active': isActive.italic() }" @click.stop="editor.chain().focus().toggleItalic().run()")
                v-icon mdi-format-italic
            span( :class="{ 'is-active': isActive.heading({ level: 1 }) }" @click.stop="editor.chain().focus().toggleHeading({ level: 1 }).run()")
                v-icon mdi-format-header-1
            span( :class="{ 'is-active': isActive.heading({ level: 2 }) }" @click.stop="editor.chain().focus().toggleHeading({ level: 2 }).run()")
                v-icon mdi-format-header-2
            span( :class="{ 'is-active': isActive.heading({ level: 3 }) }" @click.stop="editor.chain().focus().toggleHeading({ level: 3 }).run()")
                v-icon mdi-format-header-3
            span( :class="{ 'is-active': isActive.codeBlock() }" @click.stop="editor.chain().focus().toggleCodeBlock().run()")
                v-icon mdi-code-array
            span( :class="{ 'is-active': isActive.code() }" @click.stop="editor.chain().focus().toggleCode().run()")
                v-icon mdi-code-not-equal-variant
        editor-content(:editor="editor" class="editor-textarea")
        v-btn(v-if="isEdit  && temporaryContent" @click="save()") save
        v-btn(v-if="isEdit" @click="cancel()") cancel

        editor-content(:editor="editor" class="editor-textarea")
        v-form(v-model="valid")
            //todo : add required
            formFieldEditCommon(@changeParentCommonData="getCommonData($event)" @updateEditedFieldData="saveEdit()" :edit="editOrAdd" :fieldData="fieldData")
            v-btn(v-if="isEdited" data-jest='cancel-boolean' @click="cancelEdit") Cancel
            v-btn(v-if="isEdited" data-jest='save-boolean' @click="saveEdit" :disabled="!valid") Save
            v-btn(v-else-if="edit && !isEdited" data-jest="add-button" @click="addField" :disabled="!valid") Add field
</template>

<script>
import {Editor, EditorContent} from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";
import editFieldCommons from "../../../mixins/modelEditCommons";
import formFieldEditCommon from "./formEditCommons/_formFieldEditCommon.vue";

export default {
    name: "richText",
    components: {EditorContent, formFieldEditCommon},
    mixins: [editFieldCommons],
    data: function () {
        return {
            editor: null,
            editorString: ""
        };
    },
    methods: {
        getCommonData: function (event) {
            event.type = "RichText";
            this.commonData = event;
        },
    },

    mounted() {
        this.editor = new Editor({
                extensions: [
                    StarterKit
                ],
                onUpdate: ({editor}) => {
                    this.editorString = JSON.stringify(editor.getJSON());
                },
            }
        );
    },
    beforeDestroy() {
        this.editor.destroy();
    },

};

</script>

<style scoped>
.editor-textarea {
    border: 1px solid #ddd;
}
</style>
