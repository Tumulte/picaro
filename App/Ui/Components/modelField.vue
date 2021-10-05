<template lang="pug">
    div
        component(v-if="fieldData[fieldName]" :is="`${fieldData[fieldName].fieldType}${edit?'-edit':''}`" :field-data="fieldData[fieldName]" :field-params="fieldParams" :is-edit="isEdit" @saveEdit="sendForm($event)" @endEdit="edit = false")

</template>

<script>
import richTextEdit from "./partials/model/edit/_richText.vue";
import richText from "./partials/model/display/_richText.vue";
import textLine from "./partials/model/display/_textLine.vue";
import textLineEdit from "./partials/model/edit/_textLine.vue";
import categoryFilter from "./partials/model/edit/_categoryFilter.vue";
import { mapActions, mapGetters } from "vuex";

import axios from "axios";

export default {
  name: "ModelField",
  components: {
    richTextEdit,
    richText,
    textLine,
    textLineEdit,
    categoryFilter
  },
  props: {
    fieldParams: { type: Object, require: true },
    fieldData: { type: Object, require: true },
    fieldName: { type: String, require: true },
    isEdit: { type: Boolean, default: false }
  },
  data() {
    return {
      edit: false
    };
  },
  methods: {
    ...mapActions(["awaitConfirmation", "addAlert"]),
    toggleEdit() {
      this.edit = !this.edit;
    },
    sendForm(data) {
      let currentFieldData = this.fieldData;
      currentFieldData[this.fieldName] = data;
      this.$nextTick(() => {
        axios
          .put(
            `/api/${this.settings.applicationName}/${encodeURI(
              this.$parent.model
            )}/${this.fieldData.id}`,
            currentFieldData
          )
          .then(() => {
            this.addAlert({
              type: "success",
              text: "Saved successfully"
            });
            this.$emit("reloadData");
          })
          .catch(errors => {
            this.addAlert({
              type: "error",
              text: `Request failed.  Returned status of ${errors}`
            });
          });
      });
    }
  },
  watch: {},
  computed: {
    ...mapGetters(["fieldEditInProgess", "settings"])
  }
};
</script>

<style scoped></style>
