<template>
  <div class="page error-page">
    <div class="grid grid-cols-12">
      <div class="col-start-4 col-span-6 flex items-center justify-center flex-col">
        <img src="/img/error-logo.svg" alt="error-logo">
        <h1 class="font-bold text-center mt-8 mb-6">404 – СТРАНИЦА НЕ НАЙДЕНА</h1>
        <span class="block mb-8">Ведется следствие</span>
        <Button @click="router.push('/')">НА ГЛАВНУЮ</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Button from '@/components/common/Button.vue'

const router = useRouter()
</script>

<style lang="scss" scoped>
.error-page {
  img {
    max-width: 476px;
    width: 100%;
  }

  h1 {
    font-size: 40px;
  }
}
</style>
