<template lang="pug">
    div(:key="key")
        v-form(v-model="valid")
            v-switch(v-model="valid" class="ma-4" label="Valid" readonly)
            div(v-for="modelParams in modelCollection[panelParams.model]" data-jest="form-element")
                component(:is="`rf${modelParams.type}`" :is-edit="isEdit" :required="modelParams.required" :label="modelParams.label" :regex="modelParams.regex" :name="modelParams.name" :model="panelParams.model" :field-data="modelData[modelParams.name]" @updateData="updateData")
            div(v-for="modelParams in modelCollection.appFilters" data-jest="form-element")
                component(:is="`rf${modelParams.type}`" :model-params="modelParams" @updateData="updateData" :is-edit="true" :field-data="modelData[modelParams.name]")
            v-btn(@click="sendForm" small outlined) Submit
</template>
<script>
import axios from "axios";
import rfBoolean from "./partials/model/edit/_booleanSwitch.vue";
import rfText from "./partials/model/edit/_textLine.vue";
import rfRichText from "./partials/model/edit/_richText.vue";
import rfCategoryFilter from "./partials/model/edit/_categoryFilter.vue";

import { mapActions, mapGetters } from "vuex";
import { nanoid } from "nanoid";

export default {
  name: "ModelForm",
  components: { rfBoolean, rfText, rfRichText, rfCategoryFilter },
  props: {
    modelData: {
      type: Object,
      default() {
        return {};
      }
    },
    panelParams: {
      type: Object,
      require: true
    },
    isEdit: { type: Boolean, default: false }
  },
  data: function() {
    return {
      valid: true,
      currentModelData: {},
      key: true
    };
  },
  methods: {
    ...mapActions(["addAlert"]),
    updateData(data) {
      this.$set(this.currentModelData, data.name, data.value);
    },
    sendForm() {
      if (this.panelParams.categories) {
        this.currentModelData.categories = this.panelParams.categories.map(
          item => {
            return {
              id: item.id
            };
          }
        );
      }
      this.currentModelData.id = nanoid(8);
      this.$nextTick(() => {
        axios
          .post(
            `/api/${encodeURI(this.panelParams.model)}`,
            this.currentModelData
          )
          .then(() => {
            this.addAlert({
              type: "success",
              text: "Saved successfully"
            });
            this.$emit("reloadData");
            this.key = !this.key;
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
  computed: {
    ...mapGetters(["modelCollection", "settings"])
  },
  watch: {
    modelCollection() {
      this.currentModelData = this.modelCollection[this.panelParams.model];
    }
  },
  created() {
    this.currentModelData = this.modelData;
  }
};
</script>

<style scoped></style>
