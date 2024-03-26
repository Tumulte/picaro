<template lang="pug">

</template>
<script>
export default {
  props: {
    edit: {
      type: Boolean,
      default: false
    },
    modelContent: Object
  },
  data() {
    return {
      name: "",
      label: "",
      required: false,
      labelRules: [v => !!v || "Label is required"],
      nameRules: [
        v => !!v || "Name is required",
        v =>
            /^[a-z0-9-]+$/.test(v) ||
            'The name must use lower case letters, numbers or "-"'
      ]
    };
  },

  created() {
    if (this.modelContent.label) {
      this.label = this.modelContent.label;
      this.name = this.modelContent.name;
      this.required = this.modelContent.required;
    }
  },
  methods: {
    updateCommonData() {
      this.$emit("changeParentCommonData", {
        name: this.name,
        required: this.required,
        label: this.label
      });
    }
  }
};
</script>
