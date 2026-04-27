<template>
  <div class="home-page">

    <section>
      <img src="/img/hero-img.png" alt="hero-image">
    </section>

    <section class="mb-20">
      <h2 class="font-bold mb-8">ДОБРО ПОЖАЛОВАТЬ В МЕСТО, ГДЕ ПАХНЕТ КОФЕ И КНИГАМИ</h2>
      <div class="grid grid-cols-2 gap-5 mb-20">
        <span>Мы&nbsp;собрали лучшую печатную продукцию&nbsp;&mdash; от&nbsp;бестселлеров до&nbsp;независимых изданий, а&nbsp;рядом работает кофейня, где всегда готовы согреть разговором или идеальным капучино.</span>
        <span>У&nbsp;нас можно бесконечно бродить между стеллажами, вдыхать аромат cвежеобжаренных зерен и&nbsp;находить те&nbsp;самые истории, которые останутся с&nbsp;вами надолго.</span>
      </div>
      <div class="text-center">
        <span>Приходите листать, читать, пить кофе и чувствовать себя как дома.</span>
      </div>
    </section>

    <section>
      <h2 class="mb-10 font-bold">ЛУЧШИЕ КНИГИ МЕСЯЦА</h2>

      <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mb-6 gap-5">
        <BookCard
          v-for="(book, i) in booksItems" :key="i"
          :id="book.id"
          :age="book.age_rating"
          :author="book.author"
          :genre="book.genre"
          :title="book.title"
          :price="book.price"
          :img-url="book.image_url"
          :description="book.description"
          :quantity="book.quantity"
        />
      </div>
    </section>

    <section class="mb-20">
      <h2 class="mb-10 font-bold">КОФЕЙНЯ</h2>

      <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mb-6 gap-5">
        <CoffeeCard
          v-for="coffee in coffeeItems"
          :key="coffee.id"
          :title="coffee.title"
          :description="coffee.description"
          :price="coffee.price"
          :compound="coffee.composition"
        />
      </div>

      <div class="flex justify-center">
        <Link to="/coffee">Перейти в меню</Link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/api'
import CoffeeCard from '@/components/coffee-card/CoffeeCard.vue'
import BookCard from '@/components/book-card/BookCard.vue'
import Link from '@/components/common/Link.vue'

const coffeeItems = ref([])
const booksItems = ref([])

const fetchCoffeeList = async () => {
  try {
    const { results } = await api.Coffee.getCoffee({
      limit: 3
    })

    coffeeItems.value = results
  } catch (err) {
    console.warn('Error', err)
  }
}

const fetchBooksList = async () => {
  try {
    const { results } = await api.Products.getProducts({
      limit: 3
    })

    booksItems.value = results
  } catch (err) {
    console.warn('Error', err)
  }
}

onMounted(() => {
  fetchCoffeeList()
  fetchBooksList()
})
</script>

<style lang="scss" scoped>

</style>
