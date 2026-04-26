<template>
  <div class="page cart-page">
    <h1 class="font-title mb-8">КОРЗИНА</h1>

    <Tabs v-model="currentTab" :tabs="tabs">
      <template #books>
        <Loader v-if="isLoading" />
        <div v-if="!isLoading" class="grid md:grid-cols-12 md:gap-5 items-start">
          <div class="flex flex-col gap-2 md:col-span-7">
            <span v-if="!books.length">Корзина пуста</span>
            <CartBookCard
              v-for="(book, i) in books"
              :key="i"
              :id="book.id"
              :cart-id="book.cart_id"
              :title="book.title"
              :author="book.author"
              :genre="book.genre"
              :img-url="book.image_url"
              :description="book.description"
              :quantity="book.quantity"
              :price="book.price"
              @update:quantity="onUpdateBookQuantity"
              @on-delete="onDeleteCartItem"
            />
          </div>

          <div class="md:mt-0 sm:mt-8 md:col-span-5">
            <CartSummary :summ="getBooksSumm" />
          </div>
        </div>
      </template>

      <template #events>
        <div class="grid md:grid-cols-12 md:gap-5 items-start">
          <div class="flex flex-col gap-2 md:col-span-7">
            <span v-if="!isLoading && !getCartEvents.length">Корзина пуста</span>
            <EventCard
              v-for="(event, i) in getCartEvents"
              :key="i"
              :title="event.title"
              :date="event.dates[0]"
              :location="event.location"
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

<script setup>
import { onMounted, ref, watch, computed } from 'vue'
import api from '@/api'
import Tabs from '@/components/tabs/Tabs.vue'
import CartBookCard from '@/components/page-cart/BookCard.vue'
import CartSummary from '@/components/page-cart/CartSummary.vue'
import EventCard from '@/components/page-cart/EventCard.vue'
import Loader from '@/components/common/Loader.vue'

const currentTab = ref('books')
const cartUpdateTimeout = ref(null)

const tabs = [
  { label: 'КНИГИ', value: 'books' },
  { label: 'МЕРОПРИЯТИЯ', value: 'events' }
]

const cartBooks = ref([])
const cartEvents = ref([])
const books = ref([])
const events = ref([])
const isLoading = ref(false)

const getBooksSumm = computed(() => {
  return books.value.reduce((acc, item) => acc + Number(item.price * item.quantity), 0)
})

const getCartEvents = computed(() => {
  const results = []

  cartEvents.value.forEach(event => {
    const index = events.value.findIndex(item => item.id === event.item_id)
    if (index !== -1) {
      results.push(events.value[index])
    }
  })

  return results
})

const onUpdateBookQuantity = (cartId, id, quantity) => {
  clearTimeout(cartUpdateTimeout.value)

  const index = books.value.findIndex(item => item.id === id)
  if (index === -1) return

  books.value[index].quantity = quantity

  cartUpdateTimeout.value = setTimeout(() => {
    fetchAddToCart(cartId, quantity)
  }, 500)
}

const onDeleteCartItem = async (id) => {
  try {
    await api.Cart.deleteCartItem({
      item_id: id
    })
    await fetchCart()
    if (!cartBooks.value.length) books.value = []
    if (!cartEvents.value.length) events.value = []
  } catch (err) {
    console.warn('Error', err)
  }
}

const fetchAddToCart = async (id, quantity) => {
  try {
    await api.Cart.patchUpdateCart({
      item_id: id,
      quantity
    })
  } catch (err) {
    console.warn('Error', err)
  }
}

const fetchCart = async () => {
  isLoading.value = true
  try {
    const { items } = await api.Cart.getCart()
    cartBooks.value = items.filter(item => item.item_type === 'book')
    cartEvents.value = items.filter(item => item.item_type === 'event')

    await fetchBooks()
    await fetchEvents()
    isLoading.value = false
  } catch (err) {
    console.warn('Error', err)
    isLoading.value = false
  }
}

const fetchBooks = async () => {
  if (!cartBooks.value.length) return
  isLoading.value = true

  try {
    const { results } = await api.Products.getProducts({
      id: cartBooks.value.map(item => item.item_id),
      limit: 99999
    })

    books.value = results.map(result => {
      const currentBook = cartBooks.value.find(item => item.item_id === result.id)

      return {
        ...result,
        quantity: currentBook.quantity,
        cart_id: currentBook.id
      }
    })
  } catch (err) {
    console.warn('Error', err)
  } finally {
    isLoading.value = false
  }
}

const fetchEvents = async () => {
  if (!cartEvents.value.length) return

  isLoading.value = true
  try {
    const { results } = await api.Events.getEvents({
      id: cartEvents.value.map(item => item.item_id),
      limit: 99999
    })

    events.value = results
  } catch (err) {
    console.warn('Error', err)
  } finally {
    isLoading.value = false
  }
}

watch(currentTab, () => {
  if (currentTab.value) fetchCart()
})

onMounted(() => {
  fetchCart()
})
</script>

<style lang="scss" scoped>
.cart-page {}
</style>
