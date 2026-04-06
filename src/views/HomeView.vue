<template>
  <main>
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
        v-for="Reviews in ReviewsItems"
        :key="Reviews.id"
        :author="Reviews.author"
        :gradeStar="Reviews.gradeStar"
        :description="Reviews.description"
        :date="Reviews.date"
        :gradeHert="Reviews.gradeHert"
      />
    </div>

    <div class="popup flex justify-center items-center">
      <PopupProcess
      
      />
    </div>



  </main>
</template>

<script setup>
import Button from '@/components/button/index.vue'
import BookCard from '@/components/book-card/index.vue'
import CoffeeCard from '@/components/coffee_card/index.vue'
import ReviewsCard from '@/components/reviews-card/index.vue'
import PopupProcess from '@/components/popup-processing/index.vue'

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
    title: 'Карамельно-осенний латте «В метре от тебя»',
    description: 'Нежный латте с мягким карамельным вкусом и лёгкими фруктовыми нотками, передающий тепло и трогательность истории.',
    price: '499',
    compound: 'Эспрессо, молоко, карамельный сироп, яблочный сок, сливки, карамельная крошка'
  },

  {
    id: 5,
    title: 'Магический фраппе «Швея теней»',
    description: 'Глубокий и насыщенный напиток с ягодно-ванильными нотками, словно сотканный из магии и тайн прямо со страниц книги.',
    price: '499',
    compound: 'Эспрессо, молоко, черничный сироп, ванильный сироп, сливки,  декоративные посыпки'
  },

]

const ReviewsItems = [
  {
    id: 1,
    author: 'Дарья Новикова',
    gradeStar: '4.6',
    description: 'Блестяще! Граница между безумием и гениальностью стирается с каждой главой. Следователь Стахов — герой нашего времени, заложник не системы, а собственного здравомыслия. ',
    date: '22.03.2024',
    gradeHert: '10'
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
