<template lang="pug">
    div(:key="key")
        v-form(v-model="valid")
            v-switch(v-model="valid" class="ma-4" label="Valid" readonly)
            div(v-for="(fieldParams, index) in selectedModel" data-jest="form-element")
                component(:is="`rf${fieldParams.type}`" :is-edit="isEdit" :field-params="fieldParams" :module-params="moduleParams" :field-data="modelData[fieldParams.name]" @updateData="updateData($event, index)")
            div(v-for="(fieldParams, index) in modelCollection.appFilters" data-jest="form-element")
                component(:is="`rf${fieldParams.type}`" :model-params="fieldParams" @updateData="updateData($event,index)" :is-edit="true" :field-data="modelData[fieldParams.name]" :module-params="moduleParams")
            v-btn(@click="sendForm()" small outlined) Submit
            v-select(multiple :items="availableFilterCollection.categories" item-text="label" item-value="id" @input="temporaryCategories = $event" :value="currentModelData.categories")
</template>
<script>
import axios from "axios";
import rfBoolean from "./partials/model/edit/_booleanSwitch.vue";
import rfText from "./partials/model/edit/_textLine.vue";
import rfRichText from "./partials/model/edit/_richText.vue";
import rfRelation from "./partials/model/edit/_relation.vue";
import rfCategoryFilter from "./partials/model/edit/_categoryFilter.vue";
import { VForm } from "vuetify/lib";

import { mapActions, mapGetters } from "vuex";
import { nanoid } from "nanoid";

export default {
  name: "ModelForm",
  components: { rfBoolean, rfText, rfRichText, rfCategoryFilter, VForm, rfRelation },
  props: {
    modelData: {
      type: Object,
      default() {
        return {};
      }
    },
    moduleParams: {
      type: Object,
      require: true
    },
    isEdit: { type: Boolean, default: false }
  },
  data() {
    return {
      valid: true,
      currentModelData: [],
      key: true,
      temporaryCategories: null //to avoid having the item disappearing when changing category
    };
  },
  methods: {
    ...mapActions(["addAlert"]),
    updateData(data, index) {
      this.$set(this.currentModelData, index, data.value);
    },
    sendForm() {
      let action = "post";
      if (this.temporaryCategories) {
        this.currentModelData.categories = this.temporaryCategories;
      }
      if (Object.keys(this.modelData).length > 0) action = "put";

      this.$nextTick(() => {
        axios[action](
          `/api/${encodeURI(this.moduleParams.model)}`,
            {id: nanoid(8),modelId:this.moduleParams.model, modelData: this.currentModelData} // if an array is passed each entry creates a row in the DB
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
    moduleCategories() {
      return this.moduleParams.categories?.map(item => {
        return item.id;
      });
    },
    selectedModel() {
      return this.modelCollection.find(item => item.id === this.moduleParams.model)?.model
    }
  },
  watch: {
    modelCollection() {
      this.currentModelData = this.modelCollection[this.moduleParams.model];
    }
  },
  created() {
    this.currentModelData.categories = this.moduleParams.categories?.map(
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
