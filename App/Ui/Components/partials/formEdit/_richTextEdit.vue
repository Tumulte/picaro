<template lang="pug">
    div
        input(v-model="editorString")
        editor-menu-bar( :editor="editor"  v-slot="{ commands, isActive }" class="editor-textarea")
            div
                //todo add borders
                //todo add require option
                button( :class="{ 'is-active': isActive.bold() }" @click="commands.bold" outlined)
                    v-icon mdi-format-bold
                button( :class="{ 'is-active': isActive.italic() }" @click="commands.italic" outlined)
                    v-icon mdi-format-italic
                button( :class="{ 'is-active': isActive.heading({ level: 1 }) }" @click="commands.heading({ level: 1 })")
                    v-icon mdi-format-header-1
                button( :class="{ 'is-active': isActive.heading({ level: 2 }) }" @click="commands.heading({ level: 2 })")
                    v-icon mdi-format-header-2
                button( :class="{ 'is-active': isActive.heading({ level: 3 }) }" @click="commands.heading({ level: 3 })")
                    v-icon mdi-format-header-3

        editor-content(:editor="editor" class="editor-textarea")
        v-form(v-model="valid")
            formFieldEditCommon(@changeParentCommonData="getCommonData($event)" @updateEditedFieldData="saveEdit()" :edit="editOrAdd" :fieldData="fieldData")
            v-btn(v-if="isEdited" data-jest='cancel-boolean' @click="cancelEdit") Cancel
            v-btn(v-if="isEdited" data-jest='save-boolean' @click="saveEdit" :disabled="!valid") Save
            v-btn(v-else-if="edit && !isEdited" data-jest="add-button" @click="addField" :disabled="!valid") Add field
</template>

<script>
    import {Editor, EditorContent, EditorMenuBar} from "tiptap";
    import {
        Blockquote,
        CodeBlock,
        HardBreak,
        Heading,
        OrderedList,
        BulletList,
        ListItem,
        TodoItem,
        TodoList,
        Bold,
        Code,
        Italic,
        Link,
        Strike,
        Underline,
        History,
    } from "tiptap-extensions";
    import editFieldCommons from "../../mixins/modelEditCommons";
    import formFieldEditCommon from "./formEditCommons/_formFieldEditCommon.vue";

    export default {
        name: "richText",
        components: {EditorContent, EditorMenuBar, formFieldEditCommon},
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
                        new Blockquote(),
                        new CodeBlock(),
                        new HardBreak(),
                        new Heading({levels: [1, 2, 3]}),
                        new BulletList(),
                        new OrderedList(),
                        new ListItem(),
                        new TodoItem(),
                        new TodoList(),
                        new Bold(),
                        new Code(),
                        new Italic(),
                        new Link(),
                        new Strike(),
                        new Underline(),
                        new History(),
                    ],
                    onUpdate: ({getJSON}) => {
                        this.editorString = JSON.stringify(getJSON());
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