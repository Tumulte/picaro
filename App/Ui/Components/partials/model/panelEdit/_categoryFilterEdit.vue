<template lang="pug">
    div
        v-form(v-model="valid")
            formFieldEditCommon(@changeParentCommonData="getCommonData($event)"  :edit="editOrAdd" :fieldData="fieldData" @updateEditedFieldData="saveEdit($event)")

            h3 Options
            div(v-for="(option, index) in options")
                v-text-field(v-model="option.label")
                v-btn(@click="removeOption(index)") remove
            v-btn(@click="addOption") Add
            v-btn(v-if="!edit && !isEdited" data-jest='edit-boolean' @click="editField" edit) Edit
            v-btn(v-if="isEdited" data-jest='cancel-boolean' @click="cancelEdit") Cancel
            v-btn(v-if="isEdited" data-jest='saveStyleSet-boolean' @click="saveEdit" :disabled="!valid") Save
            v-btn(v-else-if="edit && !isEdited" data-jest="add-button" @click="addField({options:options, type: type})" :disabled="!valid") Add field

</template>
<script>
import formFieldEditCommon from "./formEditCommons/_formFieldEditCommon.vue";

export default {
  name: "CategoryFilter",
  components: {
    formFieldEditCommon
  },
  data: function() {
    return {
      type: "CategoryFilter",
      options: []
    };
  },
  created() {
    if (this.fieldData.options.length > 0) {
      this.options = this.fieldData.options;
    }
  },
  methods: {
    getCommonData(event) {
      event.type = "Text";
      event.regex = this.regex;
      this.commonData = event;
    },
    removeOption(index) {
      this.options.splice(index, 1);
    },
    addOption() {
      this.options.push({ label: "" });
    }
  }
};
</script>
