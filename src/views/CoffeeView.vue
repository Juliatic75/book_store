<template>
  <div class="page page-coffee">
    <h1 class="font-title font-bold mb-10">МЕНЮ</h1>

    <Loader v-if="isLoading" />

    <template v-if="!isLoading">
      <h2 class="font-subtitle mb-4">Специальное меню</h2>
      <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-5 mb-6">
        <CoffeeCard
          v-for="(item, i) in special"
          :key="i"
          :title="item.title"
          :price="item.price"
          :img-url="item.image_url"
          :description="item.description"
          :compound="item.composition"
        />
      </div>

      <h2 class="font-subtitle mb-4">Кофе</h2>
      <div class="grid grid-cols-3 gap-5">
        <CoffeeCard
          v-for="(item, i) in coffee"
          :key="i"
          :title="item.title"
          :price="item.price"
          :img-url="item.image_url"
          :description="item.description"
          :compound="item.composition"
        />
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/api'
import CoffeeCard from '@/components/coffee-card/CoffeeCard.vue'
import Loader from '@/components/common/Loader.vue'

const isLoading = ref(false)
const coffee = ref([])
const special = ref([])

const fetchCoffeeList = async () => {
  isLoading.value = true

  try {
    const { results } = await api.Coffee.getCoffee({
      limit: 100
    })

    coffee.value = results.filter(item => item.group === 'coffee')
    special.value = results.filter(item => item.group === 'special')
  } catch (err) {
    console.warn('Error', err)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchCoffeeList()
})
</script>

<style lang="scss" scoped>

</style>
