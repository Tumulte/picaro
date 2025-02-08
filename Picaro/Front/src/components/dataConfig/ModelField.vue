<script lang="ts" setup>
import Text from "./formElements/display/TextLine.vue";
import {FieldContentParams, Model, ModuleParam} from "@types";
import {computed, shallowRef} from "vue";

const props = defineProps<{
  fieldContent: FieldContentParams
  moduleParams: ModuleParam
  currentModel: Model
}>()

const fieldParams = computed(() => props.currentModel.fieldCollection.find(item => item.id === props.fieldContent.fieldParamsId))


const componentMap = shallowRef();

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
