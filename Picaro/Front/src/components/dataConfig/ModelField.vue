<script lang="ts" setup>
import RichText from "./formElements/display/RichText.vue";
import Text from "./formElements/display/TextLine.vue";
import {FieldContent, FieldParams, ModuleParam} from "@types";
import {PropType} from "vue";

const props = defineProps({
  fieldParams: {type: Object as PropType<FieldParams>, required: true},
  fieldContent: {type: Object as PropType<FieldContent>, required: false, default: null},
  moduleParams: {type: Object as PropType<ModuleParam>, required: true}
})

const componentMap = {
  richText: RichText,
  text: Text
}


function sendForm(data) {
  return data
}

</script>
<template>
  <component
    :is="componentMap[fieldParams.type]"
    v-if="fieldContent"
    :field-content="fieldContent.fieldContent"
    :module-params="moduleParams"
    :field-params="fieldParams"
    @saveEdit="sendForm($event)"
  />
</template>
