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
                <span class="block color-text-secondary mb-2">{{ getGenreLabel(bookInfo.genre) }} | {{ bookInfo.author }}</span>

                <div class="rating flex items-center gap-1">
                  <span>{{ getReviewsTotalRating }}</span>
                  <IconStar/>
                  <span v-if="getReviewsCount">&nbsp;({{getReviewsCount}} оценок)</span>
                </div>
              </div>
              <Button v-if="isLogged" class="inline" variant="text">
                <IconBookmark/>
              </Button>
            </div>

            <div class="max-md:hidden">
              <Tabs :tabs="tabs">
                <template #desc>
                  <p class="description">{{ bookInfo.description }}</p>
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

                <Button v-if="!getCartItem" @click="fetchAddToCart" :loading="isCartLoading">ДОБАВИТЬ В КОРЗИНУ</Button>

                <div v-if="!!getCartItem" class="flex items-center justify-between">
                  <Button @click="decrease" size="inline">–</Button>
                  <span class="font-bold">{{ localCount }}</span>
                  <Button @click="increase" size="inline">+</Button>
                </div>
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

          <p class="description">{{ bookInfo.description }}</p>
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

          <Button @click="fetchAddToCart" :loading="isCartLoading">ДОБАВИТЬ В КОРЗИНУ</Button>
        </div>
      </div>

      <div class="reviews mb-6">
        <span class="block font-subtitle mb-6">
          ОТЗЫВЫ&nbsp;
          <span v-if="bookInfo.reviews.length" class="color-text-secondary">{{ bookInfo.reviews.length }}</span>
        </span>

        <div class="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 gap-2">
          <span v-if="!bookInfo.reviews.length">Нет отзывов</span>
          <ReviewCard
            v-for="(item, i) in bookInfo.reviews"
            :key="i"
            :author="item.user"
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

      <Loader v-if="isSimilarLoading" />
      <div v-if="!isSimilarLoading" class="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 gap-2">
        <span v-if="!similarBooks.length">Нет похожих книг</span>
        <BookCard
          v-for="(card, i) in similarBooks"
          :key="i"
          :age="card.age_rating"
          :author="card.author"
          :genre="card.genre"
          :title="card.title"
          :price="card.price"
          :img-url="card.image_url"
          :description="card.description"
        />
      </div>
    </div>

    <div class="flex justify-center">
      <Link to="/catalog">Смотреть все книги</Link>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'
import { useGenre } from '@/composables/useGenre.js'
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

const { getGenreLabel } = useGenre()

const { user, isLogged } = useAuthStore()
const route = useRoute()
const router = useRouter()

const isLoading = ref(false)
const isSimilarLoading = ref(false)
const localCount = ref(1)
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

const isCartLoading = ref(false)
const countTimeout = ref(null)
const similarBooks = ref([])
const cart = ref({})

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

const showReviewSection = computed(() => {
  if (!bookInfo.value.reviews.length || !user?.user_id) return false
  const reviewsIds = bookInfo.value.reviews.map(item => item.user_id)

  return !reviewsIds.includes(user.user_id)
})

const getCartItem = computed(() => {
  if (!cart.value.items) return null
  return cart.value.items.find(item => item.item_id === bookInfo.value.id)
})

const getReviewsCount = computed(() => {
  return bookInfo.value.reviews.length
})

const getReviewsTotalRating = computed(() => {
  if (!bookInfo.value.reviews.length) return 'Нет оценок'
  const amount = bookInfo.value.reviews.reduce((acc, item) => {
    return acc + item.rating
  }, 0)

  return amount / bookInfo.value.reviews.length
})

const decrease = () => {
  clearTimeout(countTimeout.value)
  if (localCount.value > 1) localCount.value--
  countTimeout.value = setTimeout(() => {
    fetchUpdateCart()
  }, 500)
}
const increase = () => {
  clearTimeout(countTimeout.value)
  localCount.value++
  countTimeout.value = setTimeout(() => {
    fetchUpdateCart()
  }, 500)
}

const fetchUpdateCart = async () => {
  isCartLoading.value = true

  try {
    await api.Cart.patchUpdateCart({
      item_id: getCartItem.value.id,
      quantity: localCount.value
    })
  } catch (err) {
    console.warn('Error', err)
  }
}

const fetchBook = async () => {
  try {
    bookInfo.value = await api.Products.getProduct(route.params.id)
  } catch (err) {
    console.warn('Error', err)

    if (err.status && err.status === 404) {
      await router.push({ name: 'error' })
    }
  }
}

const fetchAddToCart = async () => {
  isCartLoading.value = true

  try {
    await api.Cart.postAddToCart({
      item_type: 'book',
      item_id: bookInfo.value.id,
      quantity: 1
    })
    await fetchCart()
  } catch (err) {
    console.warn('Error', err)
  } finally {
    isCartLoading.value = false
  }
}

const fetchCart = async () => {
  try {
    cart.value = await api.Cart.getCart()
  } catch (err) {
    console.warn('Error', err)
    isLoading.value = false
  }
}

const fetchBooks = async (genre = ['novel', 'detective']) => {
  isSimilarLoading.value = true

  try {
    const { results } = await api.Products.getProducts({
      ...(!!genre) && { genre }
    })

    similarBooks.value = results.filter(result => result.id !== bookInfo.value.id)
  } catch (err) {
    console.warn('Error', err)
  } finally {
    isSimilarLoading.value = false
  }
}

onMounted(async () => {
  isLoading.value = true
  await fetchCart()
  await fetchBook()
  isLoading.value = false

  await fetchBooks(bookInfo.value.genre)
})
</script>

<style lang="scss" scoped>
@use "@/assets/_mixins.scss";

.book-view {
  .book-info {
    .book-title {
      font-weight: 500;
    }
  }

  .description {
    @include mixins.responsive-prop(font-size, 16px, 18px, 18px, 22px, 28px);

    p + p {
      margin-top: 12px;
    }
  }
}
</style>
