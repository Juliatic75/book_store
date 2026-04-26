<template>
<div class="page page-registration">
  <div class="grid grid-cols-12">
    <div class="col-start-5 col-span-4">
      <h1 class="text-center font-bold mb-10">РЕГИСТРАЦИЯ</h1>

      <form @submit.prevent>
        <Input v-model="form.username" label="Логин *" placeholder="Логин" class="mb-6" :disabled="isLoading" />
        <Input v-model="form.email" label="E-mail *" placeholder="E-mail" class="mb-6" :disabled="isLoading" />
        <Input v-model="form.password" label="Пароль *" placeholder="Пароль" class="mb-6" :disabled="isLoading" />
        <Input v-model="form.passwordRepeat" label="Повторите пароль *" placeholder="Пароль" class="mb-4" :disabled="isLoading" />

        <div class="text-right mb-10">
          <a href="#">Забыли пароль?</a>
        </div>

        <div class="block mb-8">
          <Button @click="submit" type="submit" :loading="isLoading">
            ЗАРЕГИСТРИРОВАТЬСЯ
          </Button>
        </div>

        <div class="text-center">
          <router-link to="/login" class="underline">ВОЙТИ</router-link>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/api'
import Input from '@/components/common/Input.vue'
import Button from '@/components/common/Button.vue'

const router = useRouter()

const isLoading = ref(false)
const form = ref({
  username: '',
  email: '',
  password: '',
  passwordRepeat: ''
})

const submit = async () => {
  isLoading.value = true
  try {
    await api.Auth.register({
      username: form.value.username,
      email: form.value.email,
      password: form.value.password
    })

    await router.push('/login')
  } catch (err) {
    console.warn('Error', err)
  } finally {
    isLoading.value = false
  }
}
</script>

<style lang="scss" scoped>
.page-registration {}
</style>
