<template>
  <main>
    <Button class="mb-4">PRIMARY</Button>
    <Button variant="outline">OUTLINE</Button>

    <div class="grid grid-cols-3 gap-5">
      <BookCard
        v-for="book in books"
        :key="book.id"
        :age="book.age"
        :title="book.title"
        :genre="book.genre"
        :author="book.author"
        :description="book.description"
        :price="book.price"
      />
    </div>
  </main>
</template>

<script setup>
import Button from '@/components/button/index.vue'
import BookCard from '@/components/book-card/index.vue'

const books = [
  {
    id: 1,
    age: '16',
    title: 'В метре от тебя',
    genre: 'Роман',
    author: 'Ольга Быкова',
    description: 'Каждый день она едет в одном поезде с мужчиной своей мечты. Каждый день они стоят в разных концах вагона, разделенные толпой.',
    price: '1299'
  },
  {
    id: 2,
    age: '16',
    title: 'Дом, который построил нас ',
    genre: 'Роман',
    author: 'Маргарита Петрова',
    description: 'Они развелись год назад, но вынуждены жить в одной квартире, потому что кризис продаж заморозил сделку.',
    price: '1299'
  }
]
</script>

<style scoped>
  main div div {
    text-align: center;
  }
</style>
