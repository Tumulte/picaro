<template lang="pug">
    div(:key="key")
        v-form(v-model="valid")
            v-switch(v-model="valid" class="ma-4" label="Valid" readonly)
            div(v-for="fieldParams in modelCollection[panelParams.model]" data-jest="form-element")
                component(:is="`rf${fieldParams.type}`" :is-edit="isEdit" :field-params="fieldParams" :panel-params="panelParams" :field-data="modelData[fieldParams.name]" @updateData="updateData")
            div(v-for="fieldParams in modelCollection.appFilters" data-jest="form-element")
                component(:is="`rf${fieldParams.type}`" :model-params="fieldParams" @updateData="updateData" :is-edit="true" :field-data="modelData[fieldParams.name]")
            v-btn(@click="sendForm()" small outlined) Submit
            v-select(multiple :items="availableFilterCollection.categories" item-text="label" item-value="id" @input="currentModelData.categories = $event" :value="panelCategories")
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
  data() {
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
      let action = "post";
      if (Object.keys(this.modelData).length > 0) action = "put";
      this.currentModelData.id = nanoid(8);
      this.$nextTick(() => {
        axios[action](
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
    ...mapGetters(["modelCollection", "availableFilterCollection"]),
    panelCategories() {
      return this.panelParams.categories?.map(item => {
        return item.id;
      });
    }
  },
  watch: {
    modelCollection() {
      this.currentModelData = this.modelCollection[this.panelParams.model];
    }
  },
  created() {
    this.currentModelData.categories = this.panelParams.categories?.map(
      item => {
        return item.id;
      }
    );
    if (Object.keys(this.modelData).length > 0) {
      this.currentModelData = this.modelData;
    }
  }
};
</script>

<style scoped></style>