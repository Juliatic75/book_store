<template>
  <div class="page book-view">
    <Loader v-if="isLoading"/>

    <template v-if="!isLoading">
      <div class="">
        <div class="grid md:grid-cols-3 md:gap-6">
          <div class="flex items-start justify-center max-md:hidden mb-6">
            <img :src="bookInfo.image_url" alt="book-preview-lg" class="w-full aspect-1/1.2">
          </div>

          <div class="md:col-span-2">
            <div class="book-info mb-6 flex justify-between items-start grid-cols-1 sm:grid-cols-2">
              <div class="flex-1">
                <h1 class="block book-title uppercase font-title mb-2 font-medium">
                  {{ bookInfo.title }}
                </h1>
                <span class="block color-text-secondary mb-2">{{ bookInfo.genre }} | {{ bookInfo.author }}</span>

                <div class="rating flex items-center gap-1">
                  <span>4.6</span>
                  <IconStar/>
                  <span>&nbsp;(6 оценок)</span>
                </div>
              </div>
              <Button class="inline" variant="text">
                <IconBookmark/>
              </Button>
            </div>

            <div class="max-md:hidden">
              <Tabs :tabs="tabs">
                <template #desc>
                  <p>{{ bookInfo.description }}</p>
                </template>
                <template #chars>
                  <table>
                    <tbody>
                    <tr v-for="(item, i) in characteristics" :key="i">
                      <td class="pb-4">
                        <span class="font-medium">{{ item.key }}</span>
                      </td>
                      <td class="pb-4">{{ item.value }}</td>
                    </tr>
                    </tbody>
                  </table>
                </template>
              </Tabs>

              <div class="price-info mt-9 mb-10">
                <div class="flex justify-between mb-5">
                  <div class="font-price flex gap-2">
                    <span>{{ bookInfo.price }} ₽</span>
                    <span class="line-through color-text-lighten">{{ bookInfo.old_price }} ₽</span>
                  </div>

                  <div v-if="bookInfo.stock" class="flex items-center gap-2">
                    <span>В наличии&nbsp;</span>
                    <IconCheckmark/>
                  </div>

                  <div v-else class="flex items-center gap-2">
                    <span>Нет в наличии</span>
                    <IconCheckmark/>
                  </div>
                </div>

                <Button>ДОБАВИТЬ В КОРЗИНУ</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="md:hidden">
        <div class="flex justify-center">
          <img src="/img/book-preview-lg.png" alt="book-preview-lg">
        </div>

        <div class="description my-8">
          <span class="block mb-6 font-subtitle">ОПИСАНИЕ</span>

          <p>{{ bookInfo.description }}</p>
        </div>

        <div class="characteristics mb-6">
          <span class="block mb-6 font-subtitle">ХАРАКТЕРИСТИКИ</span>

          <table>
            <tbody>
            <tr v-for="(item, i) in characteristics" :key="i">
              <td class="pb-4">
                <span class="font-medium">{{ item.key }}</span>
              </td>
              <td class="pb-4">{{ item.value }}</td>
            </tr>
            </tbody>
          </table>
        </div>

        <div class="price-info mb-10">
          <div class="flex justify-between mb-5">
            <div class="font-price flex gap-2">
              <span>{{ bookInfo.price }} ₽</span>
              <span class="line-through color-text-lighten">{{ bookInfo.old_price }} ₽</span>
            </div>

            <div v-if="bookInfo.stock" class="flex items-center gap-2">
              <span>В наличии&nbsp;</span>
              <IconCheckmark/>
            </div>

            <div v-else class="flex items-center gap-2">
              <span>Нет в наличии</span>
              <IconCheckmark/>
            </div>
          </div>

          <Button>ДОБАВИТЬ В КОРЗИНУ</Button>
        </div>
      </div>

      <div class="reviews mb-6">
        <span class="block font-subtitle mb-6">
          ОТЗЫВЫ&nbsp;
          <span class="color-text-secondary">{{ bookInfo.reviews.length }}</span>
        </span>

        <div class="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 gap-2">
          <ReviewCard
            v-for="(item, i) in bookInfo.reviews"
            :key="i"
            :author="item.user_id"
            :description="item.text"
            :star-count="item.rating"
          />
        </div>
      </div>
    </template>

    <div v-if="showReviewSection" class="feedback mb-10">
      <FeedbackSection :product="route.params.id" />
    </div>

    <div class="similar-books mb-4">
      <span class="block font-subtitle mb-6">ПОХОЖИЕ КНИГИ</span>

      <div class="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 gap-2">
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
    </div>

    <div class="flex justify-center">
      <Link>Смотреть все книги</Link>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'
import api from '@/api'
import IconStar from '@/components/icons/icon-star.vue'
import Button from '@/components/common/Button.vue'
import IconBookmark from '@/components/icons/icon-bookmark.vue'
import IconCheckmark from '@/components/icons/icon-checkmark.vue'
import FeedbackSection from '@/components/page-book-view/feedback-section.vue'
import ReviewCard from '@/components/review-card/ReviewCard.vue'
import BookCard from '@/components/book-card/BookCard.vue'
import Link from '@/components/common/Link.vue'
import Tabs from '@/components/tabs/Tabs.vue'
import Loader from '@/components/common/Loader.vue'

const { user } = useAuthStore()
const route = useRoute()

const isLoading = ref(false)
const bookInfo = ref({
  title: '',
  age_rating: '',
  author: '',
  created_at: '',
  description: '',
  genre: '',
  id: '',
  image_url: '',
  old_price: '',
  price: '',
  publisher: '',
  short_description: '',
  stock: '',
  year: '',
  reviews: []
})

const tabs = [
  {label: 'ОПИСАНИЕ', value: 'desc'},
  {label: 'ХАРАКТЕРИСТИКИ', value: 'chars'}
]

const characteristics = [
  {key: 'Артикул', value: '879606'},
  {key: 'ISBN', value: '3920394788292'},
  {key: 'Переплет', value: 'Твердый'},
  {key: 'Год издания', value: '2024'},
  {key: 'Издательство', value: 'Альпина'},
  {key: 'Кол-во страниц', value: '432'},
  {key: 'Размер', value: '0.5 см × 19.8 см × 25.6 см'},
  {key: 'Тип обложки', value: 'Твердая'}
]

const bookCards = [
  {
    age: '16',
    author: 'Ольга Быкова',
    genre: 'Роман',
    title: 'В метре от тебя',
    price: '1299',
    description: 'Каждый день она едет в одном поезде с мужчиной своей мечты. Каждый день они стоят в разных концах вагона, разделенные толпой.'
  }
]

const showReviewSection = computed(() => {
  const reviewsIds = bookInfo.value.reviews.map(item => item.user_id)

  return !reviewsIds.includes(user.user_id)
})

const fetchBook = async () => {
  try {
    const res = await api.Products.getProduct(route.params.id)
    bookInfo.value = res
  } catch (err) {
    console.warn('Error', err)
  }
}

onMounted(async () => {
  isLoading.value = true
  fetchBook()
  isLoading.value = false
})
</script>

<style lang="scss" scoped>
.book-view {
  .book-info {
    .book-title {
      font-weight: 500;
    }
  }

  .description {
    p + p {
      margin-top: 12px;
    }
  }
}
</style>
