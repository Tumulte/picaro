<template lang="pug">
    div
        h3 {{label}}
        editor-menu-bar( :editor="editor"  v-slot="{ commands, isActive }" class="editor-textarea" v-on:keydown.enter.prevent.stop="true")
            div
                //todo add borders
                //todo add require option
                span( :class="{ 'is-active': isActive.bold() }" @click.stop="commands.bold")
                    v-icon mdi-format-bold
                span( :class="{ 'is-active': isActive.italic() }" @click.stop="commands.italic")
                    v-icon mdi-format-italic
                span( :class="{ 'is-active': isActive.heading({ level: 1 }) }" @click.stop="commands.heading({ level: 1 })")
                    v-icon mdi-format-header-1
                span( :class="{ 'is-active': isActive.heading({ level: 2 }) }" @click.stop="commands.heading({ level: 2 })")
                    v-icon mdi-format-header-2
                span( :class="{ 'is-active': isActive.heading({ level: 3 }) }" @click.stop="commands.heading({ level: 3 })")
                    v-icon mdi-format-header-3
        editor-content(:editor="editor" class="editor-textarea")
        v-btn(v-if="isEdit  && temporaryContent" @click="save()") save
        v-btn(v-if="isEdit" @click="cancel()") cancel


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
import {mapActions} from "vuex";

export default {
    name: "richTextEdit",
    components: {EditorContent, EditorMenuBar},
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
                content: this.fieldData,
                onUpdate: ({getJSON}) => {
                    const content = Object.assign({}, getJSON(), {fieldType: "rich-text", required: this.required});
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
</style>
