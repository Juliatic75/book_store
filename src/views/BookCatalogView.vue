<template>
<div class="page book-catalog-page">
  <h1 class="font-title mb-8">КАТАЛОГ</h1>
  <div class="flex gap-6 mb-10">
    <Tabs v-model="currentTab" :tabs="tabs" />
  </div>

  <Loader v-if="isLoading" />

  <template v-if="!isLoading">
    <div v-if="currentTab" class="mb-10">
      <span class="block font-subtitle mb-8">{{ genresBooksMap[currentTab].label.toUpperCase() }}</span>

      <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-4 mb-6">
        <span v-if="!genresBooksMap[currentTab].books.length">Здесь пока нет книг</span>
        <BookCard
          v-for="(book, i) in genresBooksMap[currentTab].books" :key="i"
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
    </div>

    <template v-if="!currentTab">
      <div v-for="(genre, i) in genresBooksMap" :key="i" class="mb-10">
        <span class="block font-subtitle mb-8">{{ genre.label.toUpperCase() }}</span>

        <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-4 mb-6">
          <span v-if="!genre.books.length">Здесь пока нет книг</span>
          <BookCard
            v-for="(book, i) in genre.books" :key="i"
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
      </div>
    </template>

<!--      <div class="flex justify-center">-->
<!--        <Link>Смотреть все книги</Link>-->
<!--      </div>-->
  </template>
</div>
</template>

<script setup>
import { onMounted, ref, watch, computed } from 'vue'
import api from '@/api'
import BookCard from '@/components/book-card/BookCard.vue'
// import Link from '@/components/common/Link.vue'
import Loader from '@/components/common/Loader.vue'
import Tabs from '@/components/tabs/Tabs.vue'

const isLoading = ref(false)
const books = ref([])
const currentTab = ref('novel')

const genres = [
  { label: 'Романтика', value: 'novel' },
  { label: 'Детективы', value: 'detective' },
  { label: 'Фентези', value: 'fantasy' },
  { label: 'Ужасы', value: 'horror' },
]

const tabs = [
  { label: 'Все жанры', value: '' },
  ...genres
]

const genresBooksMap = computed(() => {
  const result = {}
  genres.forEach(genre => {
    const books = getBooks(genre.value)

    result[genre.value] = {
      label: genre.label,
      value: genre.value,
      books
    }
  })

  console.log(result)

  return result
})

const getBooks = (genre) => {
  return books.value.filter(book => book.genre === genre)
}

const fetchBooks = async (genre = ['novel', 'detective']) => {
  isLoading.value = true

  try {
    const { results } = await api.Products.getProducts({
      ...(!!genre) && { genre }
    })

    books.value = results
  } catch (err) {
    console.warn('Error', err)
  } finally {
    isLoading.value = false
  }
}

watch(currentTab, () => {
  if (currentTab.value) {
    fetchBooks([currentTab.value])
  } else {
    fetchBooks()
  }
})

onMounted(() => {
  fetchBooks()
})
</script>

<style lang="scss" scoped>
.book-catalog-page {}
</style>
