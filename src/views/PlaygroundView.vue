<template>
  <main>
    <Tabs :tabs="tabs">
      <template #descr>

      </template>

      <template #chars>
        <span>ХАРАКТЕРИСТИКИ</span>
      </template>
    </Tabs>

    <button @click="isModalOpen = !isModalOpen">test</button>
    <Modal v-model="isModalOpen"></Modal>

    <Button class="mb-4">PRIMARY</Button>

    <Button variant="outline">OUTLINE</Button>

    <div class="buttonDEL ">
      <Button variant="delete">УДАЛИТЬ ПРОФИЛЬ</Button>
    </div>

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

    <div class="grid grid-cols-3 gap-5">
      <CoffeeCard
        v-for="coffee in coffeeItems"
        :key="coffee.id"
        :title="coffee.title"
        :description="coffee.description"
        :price="coffee.price"
        :compound="coffee.compound"
      />
    </div>

    <div class="grid grid-cols-3 gap-5">
      <ReviewsCard
        v-for="reviews in reviewsItems"
        :key="reviews.id"
        :author="reviews.author"
        :gradeStar="reviews.gradeStar"
        :genre="reviews.genre"
        :description="reviews.description"
        :date="reviews.date"
        :gradeHert="reviews.gradeHert"
      />
    </div>

    <div class="popup flex justify-center items-center">
      <PopupProcess/>
    </div>

    <div class="popup flex justify-center items-center">
      <ModalDeleteProfile v-model="isModalOpen" />
    </div>

    <div class="popup flex justify-center items-center">
      <PopupTicketing/>
    </div>

    <div class="grid grid-cols-2 gap-5 items-center">
      <FavoritesCard
        v-for="favorites in favoritesItems"
        :key="favorites.id"
        :title="favorites.title"
        :author="favorites.author"
        :genre="favorites.genre"
        :description="favorites.description"
      />
    </div>

    <div class="title-book">
      <TitleCard
        v-for="title in titleItems"
        :key="title.id"
        :title="title.title"
        :author="title.author"
        :genre="title.genre"
        :gradeStar="title.gradeStar"
        :reviews="title.reviews"
      />
    </div>

    <div class="price-book">
      <PriceAndButton
        v-for="price in pticeItems"
        :key="price.id"
        :price="price.price"
        :oldPrice="price.oldPrice"
        :availability="price.availability"
      />
    </div>

  </main>
</template>

<script setup>
import { ref } from 'vue'
import Button from '@/components/button/index.vue'
import BookCard from '@/components/book-card/index.vue'
import CoffeeCard from '@/components/coffee-card/index.vue'
import ReviewsCard from '@/components/review-card/index.vue'
import PopupProcess from '@/components/popup-processing/index.vue'
import ModalDeleteProfile from '@/components/modal-delete-profile/index.vue'
import PopupTicketing from '@/components/popup-ticketing/index.vue'
import FavoritesCard from '@/components/favorites-card/index.vue'
import TitleCard from '@/components/title-card/index.vue'
import PriceAndButton from '@/components/price-and-button-card/index.vue'
import Modal from '@/components/modal/index.vue'
import Tabs from '@/components/tabs/index.vue'

const isModalOpen = ref(false)

const tabs = [
  { label: 'Описание', value: 'descr' },
  { label: 'Характеристики', value: 'chars' }
]

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

const coffeeItems = [
  {
    id: 4,
    title: 'Карамельно-осенний латте \n «В метре от тебя»',
    description: 'Нежный латте с мягким карамельным вкусом и лёгкими фруктовыми нотками, передающий тепло и трогательность истории.',
    price: '499',
    compound: 'Эспрессо, молоко, карамельный сироп, яблочный сок, сливки, карамельная крошка'
  },

  {
    id: 5,
    title: 'Магический фраппе \n «Швея теней»',
    description: 'Глубокий и насыщенный напиток с ягодно-ванильными нотками, словно сотканный из магии и тайн прямо со страниц книги.',
    price: '499',
    compound: 'Эспрессо, молоко, черничный сироп, ванильный сироп, сливки,  декоративные посыпки'
  },

]

const reviewsItems = [
  {
    id: 1,
    author: 'Дарья Новикова',
    gradeStar: '4.6',
    description: 'Блестяще! Граница между безумием и гениальностью стирается с каждой главой. Следователь Стахов — герой нашего времени, заложник не системы, а собственного здравомыслия. ',
    date: '22.03.2024',
    gradeHert: '10'
  }

]

const favoritesItems = [
  {
    id: 1,
    title: 'Шёпот эха',
    author: 'Михаил Лукин',
    genre: 'Фентези',
    description: 'Каждую ночь её сны становятся реальностью для всего города. Чтобы никто не пострадал, она не спит уже месяц.'
  },

  {
    id: 2,
    title: 'Шёпот эха',
    author: 'Михаил Лукин',
    genre: 'Фентези',
    description: 'Каждую ночь её сны становятся реальностью для всего города. Чтобы никто не пострадал, она не спит уже месяц.'
  }
]

const titleItems = [
  {
    id: 1,
    title: 'НОЧНОЙ СВИДЕТЕЛЬ',
    author: 'Дарья Новикова',
    genre: 'Детектив',
    gradeStar: '4.6',
    reviews: '6'
  }
]

const pticeItems = [
  {
    id: 1,
    price: '1299',
    oldPrice: '1499',
    availability: 'В наличие',
  }
]

</script>

<style scoped>
  main div div {
    text-align: center;
  }

  .buttonDEL{
    margin-top: 20px;
  }
</style>
