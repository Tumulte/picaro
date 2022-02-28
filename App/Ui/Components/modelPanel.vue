<template lang="pug">
    div
        categories
        h2 Models
        .rf-side-button-container
            v-text-field(v-if="!currentEditModelIndex" v-model="modelNameInput" data-jest="model-name" outlined dense label="New model name" )
            v-btn(v-if="!currentEditModelIndex" data-jest="add-model" @click="createNewModel" :disabled="!modelNameInput || !modelNameIsUnique" elevation="0" dark) Add

        .current-model-elements(v-for="(model,index) in modelCollection")
            .rf-setting-sheet
                v-card(class="pa-3 my-3" outlined :class="{'elevation-6':(model.modelName === currentEditModelIndex)}" v-if="noEdition(index)")
                    div(class="--title-with-cta")
                        h3(:class="{closed: currentEditModelIndex !== index}")
                            span(v-if="currentEditModelIndex === model.modelName") Editing :
                            span {{model.modelName}}
                        v-btn(v-if="currentEditModelIndex !== model.modelName && !currentEditModelIndex" @click="currentEditModelIndex =  index" outlined class="mx-2" small) Edit
                        v-btn(v-else @click="cancelEditModel" outlined class="mx-2" small) Cancel
                        a(:href="`${urlPrefix}/editmodel/${model.id}`") Edit content
                    .model-type
                        .select-container(v-if="index === currentEditModelIndex || modelNameInput")
                            select(data-jest="select-input" v-model="selectedFieldType" )
                                option(value="none") Select…
                                option(v-for="(type, index) in fieldType" :value="index") {{type.name}}

                    ModelField(v-if="selectedFieldType !== 'none'" :is-created="true" :ref="selectedFieldType" :type="selectedFieldType" @addFieldData="addFieldToModel")
                    div(v-if="index === currentEditModelIndex")
                        v-card-text
                            div(v-if="index === currentEditModelIndex" v-for="(field, subIndex) in model.model")
                                v-btn(v-if="currentMovingField !== null &&  subIndex < currentMovingField" @click="moveField(subIndex)" data-jest='move-field-destination' outlined color="primary") Move here
                                v-card(outlined class="pa-1 my-2"  :loading="subIndex === currentMovingField")
                                  ModelField(:fieldData="field" @deleteField="deleteField(subIndex)" :type="field.type" :ref="field.type" @updateEditedFieldData="saveEditedField($event,subIndex)")
                                    span
                                        v-btn(data-jest='move-field' @click="moveField(subIndex)" v-if="model.length > 1 && subIndex !== currentMovingField" outlined small) Move
                                        v-btn(data-jest='delete-button' @click="deleteField(subIndex)" text x-small)
                                            v-icon mdi-delete-outline
                                v-btn(v-if="currentMovingField !== null && subIndex > currentMovingField" @click="moveField(subIndex)"  data-jest='move-field-destination' outlined color="primary" small) Move here
</template>
<script>
import booleanField from "./partials/model/panelEdit/_booleanSwitchEdit.vue";
import arrayMove from "array-move";
import richText from "./partials/model/panelEdit/_richText.vue";
import multiChoice from "./partials/model/panelEdit/_multiChoiceEdit.vue";
import categoryFilter from "./partials/model/panelEdit/_categoryFilterEdit.vue";
import categories from "./categories.vue";
import ModelField from "./partials/model/panelEdit/_modelField.vue";
import RelationPanel from "./partials/model/panelEdit/_relation.vue"

import { mapGetters } from "vuex";
import {nanoid} from "nanoid";

export default {
  components: { categoryFilter, categories, ModelField, RelationPanel},
  data: function() {
    return {
      modelNameInput: "",
      valid: true,
      displayNewModelButton: true,
      currentEditModelIndex: null,
      selectedFieldType: "none",
      currentMovingField: null,
      customFieldData: null,
      standardFieldType: {
        Boolean: { name: "Boolean", component: booleanField },
        Text: { name: "Text", component: ModelField },
        RichText: { name: "Rich Text Editor", component: richText },
        MultiChoice: { name: "Multiple Choices", component: multiChoice },
        Relation: { name: "Relation", component: RelationPanel }

      }
    };
  },
  computed: {
    ...mapGetters(["modelCollection", "urlPrefix"]),
    modelNameIsUnique() {
      return (
          Object.keys(this.modelCollection).filter(
              item => item === this.modelNameInput
          ).length === 0
      );
    },
    fieldType() {
      return this.standardFieldType;
    }
  },
  methods: {
    moveField(index) {
      if (this.currentMovingField === null) {
        this.currentMovingField = index;
      } else {
        let selectedModel = this.currentEditModelIndex
          ? this.currentEditModelIndex
          : this.currentEditModelIndex;
        this.modelCollection[selectedModel] = arrayMove(
          this.modelCollection[selectedModel],
          this.currentMovingField,
          index
        );
        this.$store.commit("modelCollection", this.modelCollection);
        this.currentMovingField = null;
      }
    },
    async cancelEditModel() {
      if (this.currentEditModelIndex) {
        await this.$store.dispatch("awaitConfirmation", {
          text:
            "Are you sure you want to abandon the creation of this new model ?",
          type: "warning"
        });
        await this.$store.dispatch("removeKeyFromCollection", {
          collection: "modelCollection",
          key: this.modelNameInput
        });
        this.modelNameInput = "";
        this.currentEditModelIndex = null;
        this.displayNewModelButton = true;
      }
      this.currentEditModelIndex = null;
    },
    deleteField(index) {
      this.modelCollection[this.currentEditModelIndex].model.splice(index, 1);
      this.$store.commit("modelCollection", this.modelCollection);
    },
    addFieldToModel(event) {
      const modelData = event;
      this.modelCollection[this.currentEditModelIndex].model.push(modelData);

      this.$store.commit("modelCollection", this.modelCollection);
      this.selectedFieldType = "none";
    },
    saveEditedField(event, index) {
      if (event.isTrusted) delete event.isTrusted;
      this.modelCollection[this.currentEditModelIndex][index] = event;
      this.$store.commit("modelCollection", this.modelCollection);
    },
    createNewModel() {
      this.modelNameInput = this.modelNameInput.toLowerCase()
      this.currentEditModelIndex = this.modelCollection.length ;
      this.$store.dispatch("addKeyToCollection", {
        collection: "modelCollection",
        key: this.modelCollection.length,
        value: {id: nanoid(6), modelName: this.modelNameInput, model: []}
      });
      this.displayNewModelButton = false;
    },
    async deleteModel() {
      await this.$store.dispatch("awaitConfirmation", {
        text: `Are you sure you want to delete this model :  ${this.currentEditModelIndex}?`,
        type: "error"
      });
      await this.$store.dispatch("removeKeyFromCollection", {
        collection: "modelCollection",
        key: this.currentEditModelIndex
      });
      await this.$nextTick();
      document.getElementById("_admin-form-ext-submit").click();
    },
    noEdition: function(index) {
      return this.currentEditModelIndex === null || index === this.currentEditModelIndex;
    }
  },
};
</script>
<style scoped>
select {
  padding: 10px;
  width: 100%;
}

.select-container {
  border: 1px solid black;
  position: relative;
  border-radius: 5px;
  background: #fefefe;
  margin: 20px 0;
}

.select-container::after {
  content: "\25BC";
  pointer-events: none;
  position: absolute;
  right: 20px;
  top: 10px;
  color: #555;
}
</style>
