<template lang="pug">
    div(v-html="html")

</template>

<script>
import {Editor, EditorContent} from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";

let editor;

export default {
    name: "richText",
    data: function () {
        return {
            html: ""
        };
    },
    props: {fieldData: {type: Object, default: ""}},
    mounted() {
        editor = new Editor({
            extensions: [
                StarterKit
            ],
        });
        editor.commands.setContent(this.fieldData);
        this.html = editor.getHTML();
    },
    beforeDestroy() {
        editor.destroy();
    },

};

</script>

<style scoped>

</style>
