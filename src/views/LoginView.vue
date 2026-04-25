<template>
<div class="page page-login">
  <div class="grid md:grid-cols-12">
    <div class="col-span-4 col-start-5">
      <h1 class="text-center uppercase mb-6 font-title">Вход в личный кабинет</h1>

      <form @submit.prevent="submit">
        <Input
          v-model="form.username"
          label="Логин *"
          placeholder="Логин"
          class="mb-6"
          :disabled="isLoading"
        />
        <Input
          v-model="form.password"
          label="Пароль *"
          placeholder="Пароль"
          type="password"
          class="mb-6"
          :disabled="isLoading"
        />
        <Button :loading="isLoading" role="submit">Войти</Button>

        <span v-if="showLoginError" class="block mt-4">Неверный логин или пароль</span>
      </form>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import api from '@/api'
import Input from '@/components/common/Input.vue'
import Button from '@/components/common/Button.vue'
import { useAuthStore } from '@/stores/auth.js'

const { login } = useAuthStore()

const isLoading = ref(false)
const showLoginError = ref(false)

const form = ref({
  username: '',
  password: ''
})

const submit = async () => {
  showLoginError.value = false

  if (!form.value.username || !form.value.password) return

  try {
    isLoading.value = true
    const res = await api.Auth.login({
      username: form.value.username,
      password: form.value.password
    })

    login(res)

    window.location.replace('/')
  } catch (err) {
    console.warn('Error', err)
    if (err.status && err.status === 401) {
      showLoginError.value = true
    }
  } finally {
    isLoading.value = false
  }
}
</script>

<style lang="scss" scoped>
.page-login {}
</style>
