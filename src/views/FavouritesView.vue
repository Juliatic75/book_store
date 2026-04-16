<template>
  <div class="page favourites-page">
    <h1 class="font-title mb-8">ИЗБРАННОЕ</h1>

    <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
      <BookCard
        v-for="(card, i) in bookCards" :key="i"
        :age="card.age"
        :author="card.author"
        :genre="card.genre"
        :title="card.title"
        :price="card.price"
        :description="card.description"
        enable-favourite
      />
    </div>

    <div v-if="false">
      <span class="block font-bold text-center color-text-secondary mb-4">Полка пустует.</span>
      <span class="block font-bold text-center color-text-secondary mb-10">Но каждая великая библиотека когда-то начиналась с одной книги.</span>
      <div class="flex justify-center">
        <Button size="inline">ДОБАВИТЬ В КОРЗИНУ</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BookCard from '@/components/book-card/BookCard.vue'
import Button from '@/components/common/Button.vue'

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

</style>
