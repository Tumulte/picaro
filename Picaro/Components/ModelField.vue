<template lang="pug">
  div
    component(v-if="currentField" :is="`${currentField.fieldType}${edit?'-edit':''}`" :field-data="currentField" :module-params="moduleParams" :field-params="fieldParams" :is-edit="isEdit" @saveEdit="sendForm($event)" @endEdit="edit = false")
</template>
<script>
import richTextEdit from "../Front/src/components/dataConfig/formElements/_richText.vue";
import richText from "./partials/model/display/_richText.vue";
import textLine from "./partials/model/display/_textLine.vue";
import relation from "./partials/model/display/_relation.vue"
import textLineEdit from "../Front/src/components/dataConfig/formElements/_textLine.vue";
import categoryFilter from "../Front/src/components/dataConfig/formElements/_categoryFilter.vue";
import {mapActions, mapGetters} from "vuex";

import axios from "axios";

export default {
  name: "ModelField",
  components: {
    richTextEdit,
    richText,
    textLine,
    textLineEdit,
    categoryFilter,
    relation
  },
  props: {
    fieldParams: {type: Object, require: true},
    fieldData: {type: Array, require: true},
    fieldName: {type: String, require: true},
    moduleParams: {
      type: Object, default: () => {
      }
    },
    isEdit: {type: Boolean, default: false}
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
      const currentFieldData = this.fieldData;
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
    ...mapGetters(["settings"]),
    currentField() {
      return this.fieldData.find(item => item.id === this.fieldName)
    }
  }
};
</script>
