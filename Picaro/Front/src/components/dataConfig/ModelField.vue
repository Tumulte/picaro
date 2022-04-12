<script lang="ts" setup>
import RichText from "./formElements/display/RichText.vue";
import Text from "./formElements/display/TextLine.vue";
import {computed, ref} from "vue";

const props = defineProps({
  fieldParams: {type: Object, require: true},
  fieldData: {type: Array, require: true},
  fieldName: {type: String, require: true},
  moduleParams: {
    type: Object, default: () => {
    }
  },
  isEdit: {type: Boolean, default: false}
})

const componentMap = {
  "rich-text": RichText,
  text: Text
}

const edit = ref(false)

function toggleEdit() {
  edit.value = !edit.value;
}

function sendForm(data) {
  return data
}

</script>
<template>
  <component
    :is="componentMap[fieldData.fieldType]"
    v-if="fieldData"
    :field-data="fieldData"
    :module-params="moduleParams"
    :field-params="fieldParams"
    :is-edit="isEdit"
    @saveEdit="sendForm($event)"
    @endEdit="edit = false"
  />
</template>
