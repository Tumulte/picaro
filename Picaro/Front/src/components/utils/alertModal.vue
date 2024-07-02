<template>
  <div id="pic-alert-container">
    <ul>
      <li
        v-for="(alert, index) in alertCallbackCollection"
        :key="index"
        class="pic-alert pic-alert--confirmation"
        :class="alert.type"
      >
        <div v-if="alert.key" class="pic-alert__sub-container">
          <span class="pic-alert__text">{{ alert.text }}</span>
          <button class="pic-alert__button" @click="confirmCallbackMessage(alert.key, index)">
            Confirm
          </button>
          <button class="pic-alert__button pic-button-secondary" @click="discardCallbackMessage(alert.key, index)">
            Cancel
          </button>
        </div>
      </li>
    </ul>
    <ul>
      <li
        v-for="(alert, index) in alertCollection"
        :key="index"
        class="pic-alert pic-alert--no-confirmation"
        :class="alert.type"
      >
        <div class="pic-alert__sub-container">
          {{ alert.text }}
          <button @click="discardMessage(index)">
            Ok
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import {computed} from "vue";
import {useUtilsStore} from "@stores/utils";
import {Message} from "@stores/utils.d";

const utilsStore = useUtilsStore();
const alertCollection = computed((): Message[] => {
  return utilsStore.alertCollection
});
const alertCallbackCollection = computed((): Message[] => {
  return utilsStore.alertCallbackCollection
})

function confirmCallbackMessage(key: string, index: number) {
  utilsStore.addAlertConfirmation({key, index});
}

function discardCallbackMessage(key: string, index: number) {
  utilsStore.addAlertDiscard({key, index});
}

function discardMessage(index: number) {
  utilsStore.alertCollection.splice(index, 1);
}
</script>
<style scoped>
li {
  list-style: none;
}

button {
  margin: 10px;
}

</style>
