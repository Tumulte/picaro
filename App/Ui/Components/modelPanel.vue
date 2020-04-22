<template lang="pug">
    div
        .create-model-container
            input(v-if="!currentModelName" v-model="modelNameInput" data-jest="model-name")
            v-btn(v-if="displayNewModelButton" data-jest="add-model" @click="createNewModel" :disabled="!modelNameInput || !modelNameIsUnique") Add new model

        div(class="model-preview" v-if="currentModelName")
            h1(data-jest="model-name-title") Model : {{currentModelName}}
            .model-type
                select(data-jest="select-input" v-model="selectedFieldType")
                    option(value="none") Select…
                    option(v-for="(type, index) in fieldType" :value="index") {{type.name}}
            component( v-if="selectedFieldType !== 'none'" :is="fieldType[selectedFieldType].component" edit=true :ref="selectedFieldType" @addFieldData="addFieldToModel($event)")
        .current-model-elements(v-for="(model,index) in modelCollection")
            v-card(class="pa-3 my-3" outlined :class="{'elevation-6':(index === currentEditModelName)}")
                v-card-title
                    h2 {{index}}
                        v-btn(v-if="currentEditModelName !== index" @click="currentEditModelName = index" outlined class="mx-2") Edit
                        v-btn(v-else @click="currentEditModelName = null" outlined class="mx-2") Cancel

                div(v-if="index === currentEditModelName")
                    v-card-text
                        div(v-if="index === currentEditModelName" v-for="(field, subIndex) in model")
                            v-card(outlined class="pa-1 my-2"  :loading="subIndex === currentMovingField")
                                v-btn(v-if="currentMovingField !== null &&  subIndex < currentMovingField" @click="moveField(subIndex)" data-jest='move-field-destination' outlined color="primary") Move here
                                component(:is="fieldType[field.type].component" :fieldData="field" @deletField="deleteField(subIndex)" :ref="field.type" @updateEditedFieldData="saveEditedField($event,subIndex)")
                                div(class="d-flex justify-end")
                                    v-btn(class="mr-3 mt-3" data-jest='move-field' @click="moveField(subIndex)" v-if="model.length > 1 && subIndex !== currentMovingField" color="primary" outlined) Move
                                    v-btn(data-jest='delete-button' @click="deleteField(subIndex)" color="error" text class="mr-3 mt-3" ) Delete
                                v-btn(v-if="currentMovingField !== null && subIndex > currentMovingField" @click="moveField(index)"  data-jest='move-field-destination' outlined color="primary") Move here
                    v-card-actions(class="justify-end")
                        v-btn(@click="saveModel" color="success") Save
</template>
<script>
    import textField from "./partials/formEdit/_textEdit.vue";
    import booleanField from "./partials/formEdit/_booleanEdit.vue";
    import arrayMove from "array-move";
    import axios from "axios";

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
                        "Boolean": {name: "boolean", component: booleanField},
                        "Text": {name: "text", component: textField},
                    }
            };
        },
        methods: {

            moveField(index) {
                if (this.currentMovingField === null) {
                    this.currentMovingField = index;
                } else {
                    let currentModelState = JSON.parse(this.modelCollectionString);
                    currentModelState[this.currentModelName] = arrayMove(currentModelState[this.currentModelName], this.currentMovingField, index);
                    this.$store.commit("modelCollection", currentModelState);
                    this.currentMovingField = null;

                }
            },
            deleteField(index) {
                let currentModelState = JSON.parse(this.modelCollectionString);
                currentModelState[this.currentModelName].splice(index, 1);
                this.$store.commit("modelCollection", currentModelState);
            },
            addFieldToModel(event) {
                let currentModelState = JSON.parse(this.modelCollectionString);
                currentModelState[this.currentModelName].push(event);
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
            saveModel: async function () {
                this.$store.commit("newModelName", this.modelNameInput);
                await this.$nextTick();
                document.getElementById("_admin-form-ext-submit").click();

                //Todo : add confirmation of the save
            },
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
            //TODO find a better way to skip
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
    .v-btn {
        font-family: "Knile-Regular", serif
    }
</style>
