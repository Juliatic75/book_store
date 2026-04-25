<template>
  <div class="app">
    <transition name="fade">
      <Preloader v-if="isLoading" />
    </transition>

    <Header />

    <div class="main">
      <RouterView />
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
import Preloader from '@/components/preloader/Preloader.vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})
</script>

<style lang="scss" scoped>
.app {
  max-width: 1280px;
  width: 100%;
  margin: auto;

  .main {
    padding-top: 50px;
    min-height: 100vh;
  }
}
</style>
