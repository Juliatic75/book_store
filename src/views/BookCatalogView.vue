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

  <div class="mb-10">
    <span class="block font-subtitle mb-8">ДЕТЕКТИВЫ</span>

    <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-4 mb-6">
      <BookCard
        v-for="(card, i) in bookCards" :key="i"
        :age="card.age"
        :author="card.author"
        :genre="card.genre"
        :title="card.title"
        :price="card.price"
        :description="card.description"
      />
    </div>

    <div class="flex justify-center">
      <Link>Смотреть все книги</Link>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import BookCard from '@/components/book-card/BookCard.vue'
import Link from '@/components/common/Link.vue'

const currentCategory = ref('all')

const categories = [
  { label: 'Все жанры', value: 'all' },
  { label: 'Романтика', value: 'romantic' },
  { label: 'Детективы', value: 'detective' },
  { label: 'Фентези', value: 'fantasy' },
  { label: 'Ужасы', value: 'horror' },
]

const bookCards = [
  {
    age: '16',
    author: 'Ольга Быкова',
    genre: 'Роман',
    title: 'В метре от тебя',
    price: '1299',
    description: 'Каждый день она едет в одном поезде с мужчиной своей мечты. Каждый день они стоят в разных концах вагона, разделенные толпой.'
  },
  {
    age: '16',
    author: 'Ольга Быкова',
    genre: 'Роман',
    title: 'В метре от тебя',
    price: '1299',
    description: 'Каждый день она едет в одном поезде с мужчиной своей мечты. Каждый день они стоят в разных концах вагона, разделенные толпой.'
  },
  {
    age: '16',
    author: 'Ольга Быкова',
    genre: 'Роман',
    title: 'В метре от тебя',
    price: '1299',
    description: 'Каждый день она едет в одном поезде с мужчиной своей мечты. Каждый день они стоят в разных концах вагона, разделенные толпой.'
  }
]
</script>

<style lang="scss" scoped>
.book-catalog-page {}
</style>
