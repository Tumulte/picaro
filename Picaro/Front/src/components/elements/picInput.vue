<template>
  <label
    class="pic-input"
    :class="{'pic-input__error': validation?.$errors?.length > 0}"
    :data-test="`model-field-${label.toLowerCase()}`"
  >
    <span class="pic-input--label" :class="{'pic-input--label__required': validation.required}"> {{ label }}</span>
    <input
      :value="modelValue"
      :data-test="`model-field-input-${label.toLowerCase()}`"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </label>
  <ul>
    <li
      v-for="error of validation.$errors"
      :key="error.$uid"
      :data-test="`model-field-input-${label.toLowerCase()}-error`"
      class="pic-input--error-text"
    >
      {{ error.$message }}
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    validation: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['update:modelValue'],

}
</script>
