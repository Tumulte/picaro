<template lang="pug">
    div(v-html="html")

</template>

<script>
    import {Editor} from "tiptap";
    import {
        Blockquote, Bold,
        BulletList, Code,
        CodeBlock,
        HardBreak,
        Heading, History, Italic, Link,
        ListItem,
        OrderedList, Strike,
        TodoItem, TodoList, Underline
    } from "tiptap-extensions";


    export default {
        name: "richText",
        data: function () {
            return {
                html: ""
            };
        },
        props: {editorData: {type: String, default: ""}},
        mounted() {
            let editor = new Editor({
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
            });
            editor.setContent(JSON.parse(this.editorData));
            this.html = editor.getHTML();
        },
        beforeDestroy() {
            this.editor.destroy();
        },

    };

</script>

<style scoped>

</style>