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
import Header from '@/components/header/header.vue'
import Footer from '@/components/footer/footer.vue'
import Preloader from '@/components/preloader/preloader.vue'

const isLoading = ref(true);

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
