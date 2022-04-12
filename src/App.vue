<template>
  <v-app>
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import {Model} from "../Picaro/Types";
import {ref} from "vue";


export default defineComponent({
  name: 'App',

  components: {
    HelloWorld,
  },

  data() {
    return {
      //
    }
  },
})
</script>
