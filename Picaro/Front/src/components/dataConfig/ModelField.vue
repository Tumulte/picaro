<script lang="ts" setup>
import Text from "./formElements/display/TextLine.vue";
import {FieldContent, FieldParams, ModuleParam} from "@types";
import {PropType, ref} from "vue";

defineProps({
  fieldParams: {type: Object as PropType<FieldParams>, required: true},
  fieldContent: {type: Object as PropType<FieldContent>, required: false, default: null},
  moduleParams: {type: Object as PropType<ModuleParam>, required: true}
})


const componentMap = ref();

const richTextComponent = () => import.meta.env.VITE_BUILD_MODE !== "static" ?
    import("./formElements/display/RichText.vue") :
    import("./formElements/display/RichTextStatic.vue")

richTextComponent()
    .then(component => {
          componentMap.value = {
            richText: component.default,
            text: Text
          }
        }
    ).catch(e => console.error(e))

function sendForm(data) {
  return data
}

</script>
<template>
  <component
    :is="componentMap[fieldParams.type]"
    v-if="fieldContent && componentMap"
    :key="fieldParams.id"
    :field-content="fieldContent.fieldContent"
    :field-params="fieldParams"
    :module-params="moduleParams"
    @saveEdit="sendForm($event)"
  />
</template>
