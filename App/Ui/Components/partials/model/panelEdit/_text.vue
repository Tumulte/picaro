<template lang="pug">
    div
        v-text-field(data-jest='rf-form-text')
        v-form(v-model="valid")
            formFieldEditCommon(@changeParentCommonData="getCommonData($event)"  :edit="editOrAdd" :fieldData="fieldData" @updateEditedFieldData="saveEdit($event)")
            v-text-field(label="Regex" v-model="regex" v-if="edit")
            v-btn(v-if="!edit && !isEdited" data-jest='edit-boolean' @click="editField" edit) Edit
            v-btn(v-if="isEdited" data-jest='cancel-boolean' @click="cancelEdit") Cancel
            v-btn(v-if="isEdited" data-jest='saveStyleSet-boolean' @click="saveEdit" :disabled="!valid") Save
            v-btn(v-else-if="edit && !isEdited" data-jest="add-button" @click="addField" :disabled="!valid") Add field

</template>
<script>
import editFieldCommons from "../../../mixins/modelEditCommons";
import formFieldEditCommon from "./formEditCommons/_formFieldEditCommon.vue";

export default {
    name: "TextPanelEdit",
    data: function () {
        return {
            regex: ""
        };
    },
    mixins: [editFieldCommons],
    components: {
        formFieldEditCommon
    },
    methods: {
        getCommonData(event) {
            event.type = "Text";
            event.regex = this.regex;
            this.commonData = event;
        },

    },
};

</script>
