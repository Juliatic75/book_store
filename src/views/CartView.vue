<template>
  <div class="page cart-page">
    <h1 class="font-title mb-8">КОРЗИНА</h1>

    <Tabs :tabs="tabs">
      <template #books>
        <div class="grid md:grid-cols-12 md:gap-5 items-start">
          <div class="flex flex-col gap-2 md:col-span-7">
            <CartBookCard
              v-for="(book, i) in books"
              :key="i"
              :title="book.title"
              :author="book.author"
              :genre="book.genre"
              :description="book.description"
              :price="book.price"
            />
          </div>

          <div class="md:mt-0 sm:mt-8 md:col-span-5">
            <CartSummary />
          </div>
        </div>
      </template>

      <template #events>
        <div class="grid md:grid-cols-12 md:gap-5 items-start">
          <div class="flex flex-col gap-2 md:col-span-7">
            <EventCard
              v-for="(event, i) in events"
              :key="i"
              :title="event.title"
              :date="event.date"
              :time="event.time"
              :weekday="event.weekday"
              :address="event.address"
              :price="event.price"
            />
          </div>

          <div class="md:mt-0 sm:mt-8 md:col-span-5">
            <CartSummary />
          </div>
        </div>
      </template>
    </Tabs>
  </div>
</template>

<script lang="ts" setup>
// import { ref } from 'vue'
import Tabs from '@/components/tabs/Tabs.vue'
import CartBookCard from '@/components/page-cart/BookCard.vue'
import CartSummary from '@/components/page-cart/CartSummary.vue'
import EventCard from '@/components/page-cart/EventCard.vue'

// const currentTab = ref('books')

const tabs = [
  { label: 'КНИГИ', value: 'books' },
  { label: 'МЕРОПРИЯТИЯ', value: 'events' }
]

const books = [
  {
    age: '16',
    author: 'Ольга Быкова',
    genre: 'Роман',
    title: 'В метре от тебя',
    price: '1299',
    description: 'В театре во время премьеры гаснет свет. Когда через три минуты включается резервное освещение, главная актриса мертва.'
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

const events = [
  {
    title: 'Премьера детектива «Уравнение для призрака»',
    date: '12 Июля',
    time: '19:30',
    weekday: 'Воскресенье',
    address: 'Магазин «Чернила», ул. Литературная, д. 15',
    price: '1200'
  }
]
</script>

<style lang="scss" scoped>
.cart-page {}
</style>
