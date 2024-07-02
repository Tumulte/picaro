<template>
  <label>
    {{ fieldParams.label }}
    <input v-model="state.text" :name="fieldParams.name" data-test="text-field">
  </label>
</template>
<script lang="ts" setup>
import {defineProps, ref, computed, watch, defineEmits} from "vue";
import {useVuelidate} from "@vuelidate/core";
import {helpers} from "@vuelidate/validators";

const emit = defineEmits(["updateData", "saveEdit", "endEdit"])
const props = defineProps({
  fieldParams: {type: Object, required: true},
  modelContent: {
    type: Object,
    default() {
      return {};
    }
  },
  index: {type: Number, required: true},
  isEdit: {type: Boolean, default: false}
})
const state = ref({text: ""})
state.value.text = props.modelContent.content
const formattedData = computed(() => {
  return [
    props.fieldParams.id,
    {
      name: props.fieldParams.name,
      content: state.value.text,
      fieldType: "text",
      required: props.fieldParams.required,
      position: props.index
    }
  ]
})
const rules = computed(() => {
  return {
    text: [
      helpers.withMessage("this is not the correct pattern", (v: string) => {
        if (!props.fieldParams.regex) {
          return true;
        }
        const regex = new RegExp(props.fieldParams.regex);
        return regex.test(v)
      }),
      helpers.withMessage("this field is required", (v: string) => {
        if (!props.fieldParams.required) {
          return true;
        }
        return !!v
      })
    ]
  };
})
const v$ = useVuelidate(rules.value, state.value)

watch(() => state.value.text, async () => {
  if (await v$.value.$validate()) {
    emit("updateData", formattedData.value);
  }
})


if (props.isEdit) {
  state.value.text = props.modelContent.content;
}

function saveEdit() {
  emit("saveEdit", formattedData.value);
  emit("endEdit");
}

function cancelEdit() {
  emit("endEdit");
}


</script>
