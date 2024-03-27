<script setup lang="ts">
import {ref} from 'vue'
import axios from "axios";
import {useRouter} from 'vue-router'

const router = useRouter()

const username = ref('')
const password = ref('')


function login() {
  if (username.value && password) {
    axios.post('/api/auth/login', {username: username.value, password: password.value}).then((res) => {
      if (res.data) {
        localStorage.setItem('accessToken', res.data.accessToken)
        router.push({path: '/admin'})
      }
    })
  }
}


</script>

<template>
  <v-form>
    <v-text-field v-model="username" label="Username" />
    <v-text-field v-model="password" label="Password" type="password" />
    <v-btn @click="login">
      Login
    </v-btn>
  </v-form>
</template>

<style scoped>

</style>
