<template lang="pug">
    div
        v-text-field(data-jest="text-field" v-model.trim="text" :rules="textRules" :label="fieldParams.label" :name="fieldParams.name")

</template>
<script>
export default {
  name: "TextLineEdit",
  props: {
    fieldParams: { type: Object, required: true },
    fieldData: {
      type: Object,
      default() {
        return {};
      }
    },
    isEdit: { type: Boolean, default: false }
  },
  data() {
    return {
      text: "",
      textRules: [
        v => !this.fieldParams.required || !!v || "Name is required",
        v => {
          if (!this.fieldParams.regex) {
            return true;
          }
          let regex = new RegExp(this.fieldParams.regex);
          return regex.test(v) || "this is not the correct pattern";
        }
      ]
    };
  },
  computed: {
    formatedData() {
      return {
        id: this.fieldParams.id,
        name: this.fieldParams.name,
        content: this.text,
        fieldType: "text-line",
        required: this.fieldParams.required
      };
    }
  },
  watch: {
    text() {
      this.$emit("updateData", {
        name: this.fieldParams.name,
        value: this.formatedData
      });
    }
  },
  created() {
    if (this.isEdit) {
      this.text = this.fieldData.content;
    }
  },
  methods: {
    saveEdit() {
      this.$emit("saveEdit", this.formatedData);
      this.$emit("endEdit");
    },
    cancelEdit() {
      this.$emit("endEdit");
    }
  }
};
</script>
