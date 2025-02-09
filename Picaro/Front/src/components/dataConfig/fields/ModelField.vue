<script lang="ts" setup>
import {computed, reactive, ref} from "vue";
import {nanoid} from "nanoid";
import {useVuelidate} from '@vuelidate/core'
import {MESSAGE} from "@utils/const";
import {useUtilsStore} from "@stores/utils";
import {FieldParams, Model} from "@types";
import {helpers, required as vuelidateRequired} from "@vuelidate/validators";


const props = withDefaults(defineProps<{
  modelFormState?: string
  existingFieldData?: FieldParams
  currentEditField?: string
  isNew?: boolean
  model: Model
}
>(), {
  modelFormState: "noModel",
  currentEditField: "",
  existingFieldData: () => ({
    id: "",
    label: "",
    name: "",
    regex: "",
    required: false,
    hidden: false,
    template: "",
    attributes: "",
    extraParams: {},
    type: "none",
  }),
  isNew: false
})


const emit = defineEmits<{
  updateEditedFieldData: [FieldParams],
  addFieldData: [FieldParams],
  updateEditField: [string],
  cancelField: [],
  deleteField: []
}>()


const utilsStore = useUtilsStore()

const hidden = ref(false)


const name = ref(props.existingFieldData.name)
const type = ref(props.existingFieldData.type)
const label = ref(props.existingFieldData.label)
const template = ref(props.existingFieldData.template)
const attributes = ref(props.existingFieldData.attributes)
const required = ref(props.existingFieldData.required)
const regex = ref(props.existingFieldData.regex)
const extraParams = ref(props.existingFieldData.extraParams)
const noFieldSelected = ref(type.value === 'none')
const savedFieldType = ref('');

const isEdited = computed(() => {
  return (props.modelFormState === 'editingField' && props.currentEditField === props.existingFieldData.id) || (props.isNew && props.modelFormState === 'addingField')
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
  const fieldParams: FieldParams = {
    id: nanoid(6),
    type: type.value,
    name: name.value,
    label: label.value,
    template: template.value,
    attributes: attributes.value,
    required: required.value,
    regex: regex.value,
    extraParams: extraParams.value,
    hidden: hidden.value
  }
  emit("addFieldData",
      fieldParams)
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
        type: type.value,
        name: name.value,
        label: label.value,
        template: template.value,
        attributes: attributes.value,
        required: required.value,
        regex: regex.value,
        extraParams: extraParams.value,
        hidden: hidden.value
      }
  );
}


const rules = computed(() => {
  const alphaNumHyphen = helpers.withMessage("Only letters and numbers and hyphens are allowed", (v: string) => {
    return v === '' || /^[a-z0-9-]+$/.test(v)
  })
  return {
    label: {
      vuelidateRequired
    },
    name: {
      vuelidateRequired,
      alphaNumHyphen
    },
    template: {
      alphaNumHyphen
    }
  }
})

const form = reactive({
  label: props.existingFieldData?.label ?? '',
  name: props.existingFieldData?.name ?? '',
  template: props.existingFieldData?.template ?? '',
})

const v$ = useVuelidate(rules, form)

</script>
<template>
  <div
    v-if="!isEdited && !isNew"
    class="pic-model-field-summary"
    data-test="created-model-field"
  >
    <button
      class="pic-button--text"
      data-test="edit-model-field-button"
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
      class="mb-8"
      color="secondary"
      @click="cancelEdit"
    >
      Cancel edit
    </v-btn>
    <v-select
      v-show="noFieldSelected"
      v-model="type"
      :items="fieldType"
      data-test="select-model-field"
      item-title="name"
      item-value="type"
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
  <span v-if="isEdited" v-show="!noFieldSelected">
    <v-text-field v-model="form.label" :validation="v$.label" aria-required="true" label="Label *" />
    <v-text-field v-model="form.name" :validation="v$.name" aria-required="true" label="Name *" />
    <v-text-field
      v-model="form.template"
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
      :disabled="v$.$invalid"
      data-test="save-model-field-button"
      @click="saveEdit"
    >
      Save
    </v-btn>
    <div class="pic-flex pic-between">
      <v-btn
        v-if="modelFormState === 'addingField'"
        :disabled="v$.$invalid"
        color="primary"
        data-test="add-field-button"
        @click="addField"
      >
        Add field to model
      </v-btn>


      <v-btn
        v-if="modelFormState === 'editingField'"
        class="pic-button--text"
        data-test="delete-model-field-button"
        @click="deleteField"
      >
        delete
      </v-btn>
    </div>
  </span>
</template>
<style scoped>

</style>
