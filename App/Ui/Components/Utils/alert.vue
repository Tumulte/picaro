<template lang="pug">
    div(id="rf-alert-container")
        v-scroll-y-reverse-transition(group=true tag="ul" class="alert-group-list")
            li(v-for="(alert, index) in alertCallbackCollection" :key="index")
                v-alert(:type="alert.type" transition="scroll-y-reverse-transition" dense prominent)
                    v-row(align="center" justify="center")
                        v-col(cols="6" class="px-8 pr-0") {{alert.text}}
                        v-col(cols="6" class="pa-0 text-right")
                            v-btn(class="rf-alert-button" @click="confirmCallbackMessage(alert.key, index)" outlined data-jest="confirm-callback-button") Confirm
                            v-btn(class="rf-alert-button" @click="discardCallbackMessage(alert.key, index)" outlined data-jest="discard-callback-button") Cancel
        v-scroll-y-reverse-transition(group=true tag="ul" class="alert-group-list")
            li(v-for="(alert, index) in alertCollection"  :key="index")
                v-alert(:type="alert.type"  transition="scroll-y-reverse-transition" dense)
                    v-row(align="center" justify="center")
                        v-col(cols="6" class="px-8 pr-0") {{alert.text}}
                        v-col(cols="6" class="pa-0 text-right")
                            v-btn(@click="discardMessage" data-jest="discard-button" outlined) Ok
</template>
<script>
export default {
  name: "Alert",
  computed: {
    alertCollection() {
      return this.$store.getters.alertCollection;
    },
    alertCallbackCollection() {
      return this.$store.getters.alertCallbackCollection;
    }
  },
  methods: {
    confirmCallbackMessage(key, index) {
      this.$store.dispatch("addAlertConfirmation", { key: key, index: index });
    },
    discardCallbackMessage(key, index) {
      this.$store.dispatch("addAlertDiscard", { key: key, index: index });
    },
    discardMessage(index) {
      this.$store.dispatch("removeAlert", index);
    }
  }
};
</script>
<style scoped>
li {
  list-style: none;
}

button {
  margin: 10px;
}

#rf-alert-container {
  width: 620px;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 999999;
}
</style>
