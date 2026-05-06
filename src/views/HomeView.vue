<template>
  <div class="page home-page">

    <Hero />

    <Description />

    <Gallery class="md:visible" />

    <div class="text-center mb-10">
      <p>Приходите листать, читать, пить кофе и чувствовать себя как дома.</p>
    </div>

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
import Hero from '@/components/page-home/Hero.vue'
import Description from '@/components/page-home/Description.vue'
import Gallery from '@/components/page-home/Gallery.vue'

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
@use "@/assets/mixins.scss";

.home-page {
  p {
    @include mixins.responsive-prop(font-size, 16px, 18px, 18px, 22px, 24px);
    @include mixins.responsive-prop(line-height, 18px, 20px, 20px, 24px, 26px);
  }
}
</style>
