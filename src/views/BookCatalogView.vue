<template>
<div class="page book-catalog-page">
  <h1 class="font-title mb-8">КАТАЛОГ</h1>
  <div class="flex gap-6 mb-10">
    <span
      v-for="(category, i) in categories"
      :key="i"
      @click="currentCategory = category.value"
      class="cursor-pointer"
      :class="{ 'color-text-secondary': currentCategory !== category.value }"
    >
      {{ category.label }}
    </span>
  </div>

  <Loader v-if="isLoading" />

  <template v-if="!isLoading">
    <div class="mb-10">
      <span class="block font-subtitle mb-8">ДЕТЕКТИВЫ</span>

      <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-4 mb-6">
        <BookCard
          v-for="(book, i) in books" :key="i"
          :id="book.id"
          :age="book.age_rating"
          :author="book.author"
          :genre="book.genre"
          :title="book.title"
          :price="book.price"
          :img-url="book.image_url"
          :description="book.description"
        />
      </div>

      <div class="flex justify-center">
        <Link>Смотреть все книги</Link>
      </div>
    </div>
  </template>
</div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import api from '@/api'
import BookCard from '@/components/book-card/BookCard.vue'
import Link from '@/components/common/Link.vue'
import Loader from '@/components/common/Loader.vue'

const isLoading = ref(false)
const books = ref([])
const currentCategory = ref('all')

const categories = [
  { label: 'Все жанры', value: 'all' },
  { label: 'Романтика', value: 'romantic' },
  { label: 'Детективы', value: 'detective' },
  { label: 'Фентези', value: 'fantasy' },
  { label: 'Ужасы', value: 'horror' },
]

const fetchBooks = async () => {
  isLoading.value = true

  try {
    const { results } = await api.Products.getProducts()
    books.value = results
  } catch (err) {
    console.warn('Error', err)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchBooks()
})
</script>

<style lang="scss" scoped>
.book-catalog-page {}
</style>
