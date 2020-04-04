<template lang="pug">
    div
        input(v-model="hiddenModelString" data-jest="model-form-string-input")
        .create-model-container
            input(v-if="!currentModelName" v-model="modelNameInput" data-jest="model-name")
            v-btn(v-if="displayNewModelButton" data-jest="add-model" @click="createNewModel" :disabled="!modelNameInput") Add new model


        div(class="model-preview" v-if="currentModelName")
            h1(data-jest="model-name-title") Model : {{currentModelName}}
            .model-type
                select(data-jest="select-input" v-model="selectedFieldType")
                    option(value="none") Select…
                    option(v-for="(type, index) in fieldType" :value="index") {{type.name}}
            component( v-if="selectedFieldType !== 'none'" :is="fieldType[selectedFieldType].component" edit=true @updateFieldData="currentField = $event")
            v-btn(v-if="selectedFieldType !== 'none'" class="model-select-add" data-jest="add-button" :disabled="!allFieldsValid" @click="addFieldToModel") Add

        .current-model-elements
            div(v-for="(model,index) in modelCollection[currentModelName]")
                div(v-if="currentMovingField &&  index < currentMovingField" @click="moveField(index)" data-jest='move-field-destination') Move here
                component(:is="fieldType[model.type].component" :fieldData="model" @deletField="deleteField(index)" @updateEditedFieldData="saveEditedField($event,index)")
                v-btn(data-jest='move-field' @click="moveField(index)" v-if="modelCollection[currentModelName].length > 1 && index !== currentMovingField") Move
                div(v-if="currentMovingField && index > currentMovingField" @click="moveField(index)"  data-jest='move-field-destination') Move here
                v-btn(data-jest='delete-button' @click="deleteField(index)") Delete

</template>

<script>

    import textField from "./partials/form/_text.vue";
    import booleanField from "./partials/form/_boolean.vue";
    import arrayMove from "array-move";

    export default {
        data: function () {
            return {
                modelNameInput: "",
                displayNewModelButton: true,
                selectedFieldType: "none",
                currentModelName: "",
                currentMovingField: null,
                currentField: {},
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
            addFieldToModel() {
                let currentModelState = JSON.parse(this.modelCollectionString);
                currentModelState[this.currentModelName].push(this.currentField);
                this.$store.commit("modelCollection", currentModelState);
                this.selectedFieldType = "none";
                this.currentField = {};
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
            }
        },
        computed: {
            allFieldsValid() {
                return this.$store.getters.validCounter === 0;
            },
            modelCollection() {
                return this.$store.getters.modelCollection;
            },
            modelCollectionString() {
                return JSON.stringify(this.modelCollection);
            }
        },

    };

</script>
