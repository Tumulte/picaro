<template lang="pug">
    div
        .create-model-container
            input(v-if="!currentModelName" v-model="modelNameInput" data-jest="model-name")
            v-btn(v-if="displayNewModelButton" data-jest="add-model" @click="createNewModel" :disabled="!modelNameInput") Add new model

        div(class="model-preview" v-if="currentModelName")
            h1(data-jest="model-name-title") Model : {{currentModelName}}
            .model-type
                select(data-jest="select-input" v-model="selectedFieldType")
                    option(value="none") Select…
                    option(v-for="(type, index) in fieldType" :value="index") {{type.name}}
            component( v-if="selectedFieldType !== 'none'" :is="fieldType[selectedFieldType].component" edit=true :ref="selectedFieldType" @addFieldData="addFieldToModel($event)")
        .current-model-elements(v-for="(model,index) in modelCollection")
            h2 {{index}}
            v-btn(@click="currentEditModelName = index") Edit
            div(v-if="index === currentEditModelName" v-for="(field, subIndex) in model")
                div(v-if="currentMovingField &&  subIndex < currentMovingField" @click="moveField(subIndex)" data-jest='move-field-destination') Move here
                component(:is="fieldType[field.type].component" :fieldData="field" @deletField="deleteField(subIndex)" :ref="field.type" @updateEditedFieldData="saveEditedField($event,subIndex)")
                v-btn(data-jest='move-field' @click="moveField(subIndex)" v-if="model.length > 1 && subIndex !== currentMovingField") Move
                div(v-if="currentMovingField && subIndex > currentMovingField" @click="moveField(subIndex)"  data-jest='move-field-destination') Move here
                v-btn(data-jest='delete-button' @click="deleteField(subIndex)") Delete
        v-btn(@click="saveModel") Save
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
            saveModel: function () {
                document.getElementById("_admin-form-ext-submit").click();

            },
            async testCallback() {
                this.$store.dispatch("awaitConfirmation", {
                    text: "Êtes-vous sûr de vouloir faire ça ???",
                    type: "warning"
                }).then(() => console.debug("it is confirmed"));
                this.$store.dispatch("awaitConfirmation", {
                    text: "Are you???",
                    type: "error"
                }).then(() => console.debug("it is confirmed"));
                this.$store.dispatch("awaitConfirmation", {
                    text: "What ???",
                    type: "info"
                }).then(() => console.debug("it is confirmed"));

            }
        },
        computed: {

            modelCollection() {
                return this.$store.getters.modelCollection;
            },
            modelCollectionString() {
                return JSON.stringify(this.modelCollection);
            }
        },
        created() {
            this.testCallback();


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
