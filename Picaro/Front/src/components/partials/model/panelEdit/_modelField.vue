<template>
  <div
    v-if="!isEdited && !isNew"
    data-test="created-model-field"
    class="pic-model-field-summary"
  >
    <button
      data-test="edit-model-field-button"
      class="pic-button--text"
      @click="editField"
    >
      Edit
    </button>
    <strong>{{ type }}</strong>

    {{ existingFieldData.name }}

    <span class="pic-sortable-handle">
      <v-icon>mdi-drag</v-icon>
    </span>
  </div>
  <template v-if="isEdited">
    <h3>
      Add field:
    </h3>

    <v-btn
      color="secondary"
      class="mb-8"
      @click="cancelEdit"
    >
      Cancel edit
    </v-btn>
    <v-select
      v-show="noFieldSelected"
      v-model="type"
      :items="fieldType"
      item-value="type"
      item-title="name"
      data-test="select-model-field"
      @update:modelValue="noFieldSelected = type === 'none'"
    />
    <div v-if="!noFieldSelected">
      <strong>
        <span>{{ type }}</span>
      </strong>
      <button class="pic-button--text" @click="savedFieldType = type; noFieldSelected = true">
        Change
      </button>
    </div>
  </template>
  <span v-show="!noFieldSelected" v-if="isEdited">
    <v-text-field v-model="label" :validation="v$.label" label="Label *" aria-required="true" />
    <v-text-field v-model="name" :validation="v$.name" label="Name *" aria-required="true" />
    <v-text-field
      v-model="template"
      :validation="v$.template"
      label="template (or HTML tag)"
    />

    <v-text-field
      v-model.trim="attributes"
      label="Attributes"
    />

    <v-checkbox
      v-model="required"
      label="required"
      type="checkbox"
    />
    <v-checkbox
      v-model="hidden"
      label="hidden"
      type="checkbox"
    />
    <v-text-field
      v-model="regex"
      label="Regex"
    />
    <v-btn
      v-if="modelFormState === 'editingField'"
      data-test="save-model-field-button"
      :disabled="v$.$invalid"
      @click="saveEdit"
    >
      Save
    </v-btn>
    <div class="pic-flex pic-between">
      <v-btn
        v-if="modelFormState === 'addingField'"
        data-test="add-field-button"
        :disabled="v$.$invalid"
        color="primary"
        @click="addField"
      >
        Add field to model
      </v-btn>


      <v-btn
        v-if="modelFormState === 'editingField'"
        data-test="delete-model-field-button"
        class="pic-button--text"
        @click="deleteField"
      >
        delete
      </v-btn>
    </div>
  </span>
</template>
<script lang="ts">
import RelationPanel from "./_relation.vue";
import {computed, ref, PropType} from "vue";
import {nanoid} from "nanoid";
import {useVuelidate} from '@vuelidate/core'
import {required, helpers} from '@vuelidate/validators'
import PicInput from "@components/customUiElements/picInput.vue";
import {MESSAGE} from "@utils/const";
import {useUtilsStore} from "@stores/utils";
import {Model} from "@types/index.d";


export default {
  components: {PicInput},
  props: {
    modelFormState: {String, default: "noModel"},
    existingFieldData: {Object, default: () => ({})},
    currentEditField: {String, default: ""},
    isNew: {Boolean, default: false},
    model: {type: Object as PropType<Model>, required: true},
  },
  emits: ["updateEditedFieldData", "addFieldData", "updateEditField", "cancelField", "deleteField"],

  setup(props, {emit}) {
    const utilsStore = useUtilsStore()
    let fieldData = {
      name: "",
      type: "none",
      label: "",
      regex: "",
      hidden: false,
      template: "",
      attributes: "",
      required: false,
      extraParams: {}
    }
    const hasRegEx = ref(["Text"])
    const valid = ref(false)
    const hidden = ref(false)
    const extraField = ref({
      Relation: RelationPanel
    })

    if (Object.keys(props.existingFieldData).length > 0) {
      fieldData = {...props.existingFieldData}
    }
    const name = ref(fieldData.name)
    const type = ref(fieldData.type)
    const label = ref(fieldData.label)
    const template = ref(fieldData.template)
    const attributes = ref(fieldData.attributes)
    const required = ref(fieldData.required)
    const regex = ref(fieldData.regex)
    const extraParams = ref(fieldData.extraParams)
    const noFieldSelected = ref(type.value === 'none')
    const savedFieldType = ref('');

    const isEdited = computed(() => {
      return (props.modelFormState === 'editingField' && props.currentEditField === props.existingFieldData.id) || (props.isNew && props.modelFormState === 'addingField')
    })
    const existingFieldNames = computed(() => {
      return props.model.fieldCollection.map(field => field.name)
    })

    const fieldType = [
      {name: 'Boolean', type: 'boolean'},
      {name: 'Text Input', type: 'text'},
      {name: 'Date', type: 'date'},
      {name: 'Email', type: 'email'},
      {name: 'Rich text', type: 'richText'},
      {name: 'Multi choice', type: 'multiChoice'},
      {name: 'Category filter', type: 'categoryFilter'},
      {name: 'Categories', type: 'categories'},
      {name: 'Relation', type: 'relation'},
    ];

    function addField() {
      emit("addFieldData",
          {id: nanoid(6), type, name, label, template, attributes, required, regex, extraParams})
    }

    function editField() {
      emit("updateEditField", props.existingFieldData.id)
    }


    function deleteField() {
      utilsStore.awaitConfirmation({
        text:
            `Are you sure you want delete the field ${name.value}?`,
        type: "warning"
      }).then(() => {
        emit("deleteField")
      }).catch((e) => {
        if (e !== MESSAGE.PROMISE_USER_CANCELLED) {
          throw new Error(e)
        }
      });
    }

    function cancelEdit() {
      type.value = props.existingFieldData.type
      name.value = props.existingFieldData.name
      label.value = props.existingFieldData.label
      template.value = props.existingFieldData.template
      attributes.value = props.existingFieldData.attributes
      required.value = props.existingFieldData.required
      regex.value = props.existingFieldData.regex
      extraParams.value = props.existingFieldData.extraParams
      emit("cancelField")
    }

    function saveEdit() {
      emit("updateEditedFieldData", {
            id: props.existingFieldData.id,
            type,
            name,
            label,
            template,
            attributes,
            required,
            regex,
            extraParams
          }
      );
    }

    return {
      name,
      label,
      type,
      required,
      attributes,
      template,
      hasRegEx,
      regex,
      valid,
      isEdited,
      hidden,
      extraField,
      editField,
      addField,
      saveEdit,
      deleteField,
      noFieldSelected,
      cancelEdit,
      fieldType,
      props,
      savedFieldType,
      v$: useVuelidate({
        $autoDirty: true
      })
    }
  },

  validations() {
    const alphanumhyphen = helpers.withMessage("Only letters and numbers and hyphens are allowed", (v: string) => {
      return v === '' || /^[a-z0-9-]+$/.test(v)
    })
    return {
      label: {
        required
      },
      name: {
        required,
        alphanumhyphen
      },
      template: {
        alphanumhyphen
      }
    }
  }
}
</script>
<style scoped>
.rf-model-info {
  display: inline-block;
  margin-right: 10px;
  padding: 0 10px;
  font-size: 16px;
  line-height: 28px;
  vertical-align: middle;

  &.--tag {
    background: #ddd;
    border-radius: 4px;
  }
}
</style>
