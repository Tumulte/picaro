<template lang="pug">
    div
        h3 {{label}}
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
        editor-content(:editor="editor" class="editor-textarea")


</template>

<script>
import {Editor, EditorContent} from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";

import {mapActions} from "vuex";

export default {
    name: "richTextEdit",
    components: {EditorContent},
    data() {
        return {editor: null, temporaryContent: null};
    },
    props: {
        required: {type: Boolean, default: false},
        label: {type: String, default: ""},
        name: {type: String, default: ""},
        fieldData: {type: Object, default: null},
        isEdit: {type: Boolean, default: false},
    },
    methods: {
        ...mapActions(["awaitConfirmation"]),
        async save() {
            this.$emit("saveEdit", this.temporaryContent);
            this.$emit("endEdit");
        },
        async cancel() {
            if (this.temporaryContent) {
                await this.awaitConfirmation({type: "warning", text: "Are you sure you want to cancel your changes ?"});
            }
            this.$emit("endEdit");
        },
        updateModelData(content) {
            this.$emit("updateData", {
                name: this.name,
                value: content
            });
        }
    },
    mounted() {
        this.editor = new Editor({
                extensions: [
                    StarterKit
                ],
                content: this.fieldData,
                onUpdate: ({editor}) => {
                    const content = Object.assign({}, editor.getJSON(), {fieldType: "rich-text", required: this.required});
                    if (this.isEdit) {
                        this.temporaryContent = content;
                    } else {
                        this.updateModelData(content);
                    }
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

.is-active .theme--light.v-icon {
    color: coral;
}
</style>
