<template lang="pug">
    div
        //TODO add proper class for "selected"
        //TODO allow adding field to existing model
        .create-model-container
            v-text-field(v-if="!currentModelName" v-model="modelNameInput" data-jest="model-name" lapel="New model name" )
            v-btn(v-if="displayNewModelButton" data-jest="add-model" @click="createNewModel" :disabled="!modelNameInput || !modelNameIsUnique") Add new model

        .current-model-elements(v-for="(model,index) in modelCollection")
            v-card(class="pa-3 my-3" outlined :class="{'elevation-6':(index === currentEditModelName)}" v-if="noEdition(index)")
                v-card-title
                    h2 {{index}}
                        v-btn(v-if="currentEditModelName !== index && !currentModelName" @click="currentEditModelName = index" outlined class="mx-2") Edit
                        v-btn(v-else @click="cancelEditModel" outlined class="mx-2") Cancel
                            div(class="model-preview" v-if="currentModelName")
                .model-type
                    .select-container(v-if="index === currentEditModelName || modelNameInput")
                        select(data-jest="select-input" v-model="selectedFieldType" )
                            option(value="none") Select…
                            option(v-for="(type, index) in fieldType" :value="index") {{type.name}}
                component( v-if="selectedFieldType !== 'none'" :is="fieldType[selectedFieldType].component" edit=true :ref="selectedFieldType" @addFieldData="addFieldToModel($event)")
                div(v-if="index === currentEditModelName")
                    v-card-text
                        div(v-if="index === currentEditModelName" v-for="(field, subIndex) in model")
                            v-btn(v-if="currentMovingField !== null &&  subIndex < currentMovingField" @click="moveField(subIndex)" data-jest='move-field-destination' outlined color="primary") Move here
                            v-card(outlined class="pa-1 my-2"  :loading="subIndex === currentMovingField")
                                component(:is="fieldType[field.type].component" :fieldData="field" @deletField="deleteField(subIndex)" :ref="field.type" @updateEditedFieldData="saveEditedField($event,subIndex)")
                                div(class="d-flex justify-end")
                                    v-btn(class="mr-3 mt-3" data-jest='move-field' @click="moveField(subIndex)" v-if="model.length > 1 && subIndex !== currentMovingField" color="primary" outlined) Move
                                    v-btn(data-jest='delete-button' @click="deleteField(subIndex)" color="error" text class="mr-3 mt-3" ) Delete
                            v-btn(v-if="currentMovingField !== null && subIndex > currentMovingField" @click="moveField(subIndex)"  data-jest='move-field-destination' outlined color="primary") Move here
                    v-card-actions(class="justify-end")
                        v-btn(@click="deleteModel" color="error" text) Delete
                        v-btn(@click="saveModel" color="success" data-jest="save model") Save
        //todo add delete
        //todo test whole process
</template>
<script>
import textField from "./partials/formEdit/_textEdit.vue";
import booleanField from "./partials/formEdit/_booleanEdit.vue";
import arrayMove from "array-move";
import axios from "axios";
import richText from "./partials/formEdit/_richTextEdit.vue";
import multiChoice from "./partials/formEdit/_multiChoiceEdit.vue";

export default {
    data: function () {
        return {
            modelNameInput: "",
            valid: true,
            displayNewModelButton: true,
            currentEditModelName: null,
            selectedFieldType: "none",
            currentModelName: "",
            currentMovingField: null,
            fieldType:
                {
                    "Boolean": {name: "Boolean", component: booleanField},
                    "Text": {name: "Text", component: textField},
                    "RichText": {name: "Rich Text Editor", component: richText},
                    "MultiChoice": {name: "Multiple Choices", component: multiChoice}
                }
        };
    },
    methods: {

        moveField(index) {
            if (this.currentMovingField === null) {
                this.currentMovingField = index;
            } else {
                let currentModelState = JSON.parse(this.modelCollectionString);
                let selectedModel = this.currentModelName ? this.currentModelName : this.currentEditModelName;
                currentModelState[selectedModel] = arrayMove(currentModelState[selectedModel], this.currentMovingField, index);
                this.$store.commit("modelCollection", currentModelState);
                this.currentMovingField = null;

            }
        },
        async cancelEditModel() {
            if (this.currentModelName) {
                await this.$store.dispatch("awaitConfirmation", {
                    text: "Are you sure you want to abandon the creation of this new model ?",
                    type: "warning"
                });
                this.$store.dispatch("removeKeyFromCollection", {
                    collection: "modelCollection",
                    key: this.modelNameInput,
                });
                this.modelNameInput = "";
                this.currentModelName = null;
                this.displayNewModelButton = true;

            }
            this.currentEditModelName = null;
        },
        deleteField(index) {
            let currentModelState = JSON.parse(this.modelCollectionString);
            currentModelState[this.currentModelName].splice(index, 1);
            this.$store.commit("modelCollection", currentModelState);
        },
        addFieldToModel(event) {
            let model = "";
            if (this.currentModelName) {
                model = this.currentModelName;
            } else {
                model = this.currentEditModelName;
            }
            let currentModelState = JSON.parse(this.modelCollectionString);
            currentModelState[model].push(event);
            this.$store.commit("modelCollection", currentModelState);
            this.selectedFieldType = "none";
            this.currentEditModelName = this.currentModelName;
        },
        saveEditedField(event, index) {
            let currentModelState = JSON.parse(this.modelCollectionString);
            currentModelState[this.currentModelName][index] = event;
            this.$store.commit("modelCollection", currentModelState);
        },
        createNewModel() {
            this.$store.dispatch("addKeyToCollection", {
                collection: "modelCollection",
                key: this.modelNameInput,
                value: []
            });
            this.currentModelName = this.modelNameInput;
            this.displayNewModelButton = false;

        },
        async deleteModel() {
            await this.$store.dispatch("awaitConfirmation", {
                text: `Are you sure you want to delete this model :  ${this.currentEditModelName}?`,
                type: "error"
            });
            this.$store.dispatch("removeKeyFromCollection", {
                collection: "modelCollection",
                key: this.currentEditModelName,
            });
            await this.$nextTick();
            document.getElementById("_admin-form-ext-submit").click();

        },
        saveModel: async function () {

            this.$store.commit("newModelName", this.modelNameInput);
            await this.$nextTick();
            document.getElementById("_admin-form-ext-submit").click();

        },
        noEdition: function (index) {
            return !this.currentModelName || index === this.currentModelName;
        }
    },
    computed: {
        modelNameIsUnique() {
            return Object.keys(this.modelCollection).filter(item => item === this.modelNameInput).length === 0;
        },
        modelCollection() {
            return this.$store.getters.modelCollection;
        },
        modelCollectionString() {
            return JSON.stringify(this.modelCollection);
        }
    },
    created() {
        //TODO BACKGROUND find a better way to skip
        if (process.env.ISTEST) {
            return;
        }
        axios

            .get("/appapi/settings/")
            .then(response => {
                this.$store.commit(
                    "modelCollection",
                    JSON.parse(response.data.modelCollectionString)
                );
            })
            .catch(error => {
                this.warningMessage = {
                    type: "error",
                    text: `Request failed.  Returned status of ${error}`
                };


            });
    }

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
    width: 70%;
    background: #fefefe;
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
