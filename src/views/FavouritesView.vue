<template>
  <div class="page favourites-page">
    <h1 class="font-title mb-8">ИЗБРАННОЕ</h1>

    <Loader v-if="isLoading" />

    <div v-if="!isLoading" class="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
      <BookCard
        v-for="(card, i) in bookCards" :key="i"
        :id="card.id"
        :age="card.age_rating"
        :author="card.author"
        :genre="card.genre"
        :title="card.title"
        :price="card.price"
        :img-url="card.image_url"
        :description="card.description"
        is-favorite
        enable-favourite
      />
    </div>

    <div v-if="!bookCards.length" class="pt-20">
      <span class="block font-bold text-center color-text-secondary mb-4">Полка пустует.</span>
      <span class="block font-bold text-center color-text-secondary mb-10">Но каждая великая библиотека когда-то начиналась с одной книги.</span>
      <div class="flex justify-center">
        <Button to="/catalog" size="inline">ПЕРЕЙТИ В КАТАЛОГ</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/api'
import BookCard from '@/components/book-card/BookCard.vue'
import Button from '@/components/common/Button.vue'
import Loader from '@/components/common/Loader.vue'

const isLoading = ref(false)

const bookCards = ref([])

const fetchFavourites = async () => {
  isLoading.value = true

  try {
    const { results } = await api.Favourites.getFavourites()

    bookCards.value = results
  } catch (err) {
    console.warn('Error', err)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchFavourites()
})
</script>

<style lang="scss" scoped>

</style>
