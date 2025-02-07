<script lang="ts" setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()

const username = ref('')
const password = ref('')


function login() {
  if (username.value && password) {
    fetch('/api/auth/login', {
      method: 'POST',
      headers: [
        ["Content-Type", "application/json"],
      ],
      body: JSON.stringify({username: username.value, password: password.value})
    })
        .then(res => res.json())
        .then(async data => {
          if (data) {
            localStorage.setItem('accessToken', data.accessToken)
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
    <v-form @submit="login">
      <v-text-field v-model="username" label="Username" />
      <v-text-field v-model="password" label="Password" type="password" />
      <v-btn type="submit">
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
