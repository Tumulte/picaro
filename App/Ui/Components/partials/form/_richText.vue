<template lang="pug">
    div
        input(v-model="editorString"  :name="name" type="hidden" )
        h3 {{label}}
        editor-menu-bar( :editor="editor"  v-slot="{ commands, isActive }" class="editor-textarea" v-on:keydown.enter.prevent.stop="true")
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


    export default {
        name: "richTextEdit",
        components: {EditorContent, EditorMenuBar},
        data: function () {
            return {
                editor: null,
                editorString: ""
            };
        },
        props: {
            required: {type: Boolean, default: false},
            label: {type: String, required: true},
            name: {type: String, required: true},
        },
        methods: {

            getCommonData: function (event) {
                event.type = "Rich Text Editor";
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