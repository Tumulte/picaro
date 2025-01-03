<script lang="ts" setup>
import {ref} from 'vue'
import axios from "axios";
import {useRouter} from 'vue-router'

const router = useRouter()

const username = ref('')
const password = ref('')


function login() {
  if (username.value && password) {
    axios.post('/api/auth/login', {username: username.value, password: password.value}).then(async (res) => {
      if (res.data) {
        localStorage.setItem('accessToken', res.data.accessToken)
        await router.push({path: '/admin'})
      }
    }).catch((error) => {
      console.error(error)
    })
  }
}


</script>

<template>
  <div id="login-container">
    <v-form>
      <v-text-field v-model="username" label="Username" />
      <v-text-field v-model="password" label="Password" type="password" />
      <v-btn @click="login">
        Login
      </v-btn>
    </v-form>
  </div>
</template>

<style scoped>
#login-container {
  max-width: 500px;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 1rem;
  margin: 200px auto auto;
}
</style>
