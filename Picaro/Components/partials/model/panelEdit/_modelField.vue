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
      <unicon name="draggabledots"/>
    </span>
  </div>
  <label v-if="isEdited">
    Field Type
    <select
        v-show="noFieldSelected"
        v-model="type"
        data-test="select-model-field"
        @change="noFieldSelected = type === 'none'"
    >
      <option value="none">
        Select a form element…
      </option>
      <option v-for="{type, name} in fieldType" :key="type" :value="type">
        {{ name }}
      </option>
    </select>
    <button
        v-if="noFieldSelected"
        class="pic-button--text"
        @click="noFieldSelected = false; type = savedFieldType"
    >
      cancel
    </button>
    <div v-show="!noFieldSelected">
      <strong>
        <span>{{ type }}</span>
      </strong>
      <button class="pic-button--text" @click="savedFieldType = type; noFieldSelected = true">
        Change
      </button>
    </div>
  </label>
  <span v-show="!noFieldSelected" v-if="isEdited">
    <pic-input v-model="label" :validation="v$.label" label="Label"/>
    <pic-input v-model="name" :validation="v$.name" label="Name"/>
    <pic-input
        v-model="template"
        :validation="v$.template"
        label="template (or HTML tag)"
    />

    <label>
      Attributes
      <input
          v-model.trim="attributes"
      >
    </label>
    <label>
      Required
      <input
          v-model="required"
          type="checkbox"
      >
    </label>
    <label>
      hidden
      <input
          v-model="hidden"
          type="checkbox"
      >
    </label>
    <label v-if="hasRegEx.includes(props.type)">
      Regex
      <input
          v-model="regex"
      >
    </label>

    <button
        v-if="modelFormState === 'editingField'"
        data-test="save-model-field-button"
        :disabled="v$.$invalid"
        @click="saveEdit"
    >
      Save
    </button>
    <button
        v-if="modelFormState === 'editingField'"
        data-test="delete-model-field-button"
        class="pic-button--text"
        @click="deleteField"
    >
      delete
    </button>
    <button
        v-else-if="modelFormState === 'addingField'"
        data-test="add-field-button"
        :disabled="v$.$invalid"
        @click="addField"
    >
      Add field to model
    </button>
    <button
        class="pic-button--text"
        @click="cancelEdit"
    >
      Cancel
    </button>
  </span>
</template>
<script lang="ts">
import RelationPanel from "./_relation.vue";
import {computed, ref} from "vue";
import {nanoid} from "nanoid";
import {useVuelidate} from '@vuelidate/core'
import {required, helpers} from '@vuelidate/validators'
import PicInput from "@components/customUiElements/picInput.vue";
import {MESSAGE} from "@/utils/const";
import {useUtilsStore} from "@/stores/utils";


export default {
  components: {PicInput},
  props: {
    modelFormState: {String, default: "noModel"},
    existingFieldData: {Object, default: () => ({})},
    currentEditField: {String, default: ""},
    isNew: {Boolean, default: false},
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
    const noFieldSelected = ref(fieldData.type === "none")
    const savedFieldType = ref('');
    const isEdited = computed(() => {
      return (props.modelFormState === 'editingField' && props.currentEditField === props.existingFieldData.id) || (props.isNew && props.modelFormState === 'addingField')
    })


    const fieldType = [
      {name: 'Boolean', type: 'boolean'},
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
