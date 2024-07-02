<script setup lang="ts">
import {ref} from "vue";

const emit = defineEmits<{
  (emit: 'update', value: string): void
}>()

const props = defineProps<{
  value: string
  onSave?: (value: string) => void
}>()

const editedValue = ref(props.value)

const isEditing = ref(false)

function cancel() {
  isEditing.value = false
  editedValue.value = props.value
}
</script>

<template>
  <div class="pic-editable-container">
    <v-text-field v-if="isEditing" v-model="editedValue" />
    <slot v-else />
    <div>
      <v-icon v-if="!isEditing" @click="isEditing = !isEditing">
        mdi-pencil
      </v-icon>
      <v-icon v-else @click="emit('update', editedValue);isEditing = false">
        mdi-check
      </v-icon>
      <v-icon @click="cancel">
        mdi-close
      </v-icon>
    </div>
  </div>
</template>

<style scoped>
.pic-editable-container {
  display: flex;
  align-items: center;
}
</style>
