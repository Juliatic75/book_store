<template>
  <div class="book-card-component flex flex-col">
    <div class="header mb-4 relative">
      <span class="age absolute left-0">+{{ props.age }}</span>
      <div class="flex justify-center">
        <img :src="props.imgUrl" alt="book-preview">
      </div>
      <Button
        v-if="isLogged"
        @click="processFavourites"
        class="button-like absolute top-0 right-0"
        :class="{ 'is-active': isLocalFavorite }"
        variant="text"
        :loading="isFavoritesLoading"
      >
        <IconBookmark />
      </Button>
    </div>

    <div class="title mb-4 text-left">
      <router-link :to="`/catalog/${props.id}`" class="book-title">{{ props.title }}</router-link>
      <span class="subtitle">{{ getGenreLabel(props.genre) }} {{ getGenreLabel(props.genre) || props.author ? '|' : '' }} {{ props.author }}</span>
    </div>

    <div class="description mb-6 text-left flex-1">
      <span>
        {{ props.description }}
      </span>
    </div>

    <div v-if="!props.enableFavourite" class="price flex justify-between mb-4">
      <span>Цена:</span>
      <span>{{ props.price }}₽</span>
    </div>

    <Button
      v-if="!props.enableFavourite && !localCount"
      @click="fetchAddToCart"
      :loading="isCartLoading"
    >
      ДОБАВИТЬ В КОРЗИНУ
    </Button>

    <div v-if="!props.enableFavourite && localCount" class="count flex items-center justify-between">
      <Button @click="decrease" size="inline">-</Button>
      <span>{{ localCount }}</span>
      <Button @click="increase" size="inline">+</Button>
    </div>
  </div>
</template>

<script  setup>
import { defineProps, ref, computed, onMounted, defineEmits, watch } from 'vue'
import { useAuthStore } from '@/stores/auth.js'
import { useGenre } from '@/composables/useGenre.js'
import api from '@/api'
import Button from '@/components/common/Button.vue'
import IconBookmark from '@/components/icons/icon-bookmark.vue'

const { getGenreLabel } = useGenre()

const props = defineProps({
  id: {
    type: Number,
    default: null
  },
  imgUrl: {
    type: String,
    default: '/img/book-preview.png'
  },
  age: {
    type: [String, Number],
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  genre: {
    type: String,
    default: ''
  },
  author: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  price: {
    type: [String, Number],
    default: ''
  },
  isFavorite: {
    type: Boolean,
    default: false
  },
  enableFavourite: {
    type: Boolean,
    default: false
  },
  cart: {
    type: Object,
    default: () => ({})
  },
  quantity: {
    type: Number,
  }
})

const { isLogged } = useAuthStore()
const emit = defineEmits(['on-favourite-delete', 'on-cart-add'])

const isLocalFavorite = ref(false)
const isFavoritesLoading = ref(false)
const isCartLoading = ref(false)
const countTimeout = ref(null)
const localCount = ref(0)

const getCartItem = computed(() => {
  const cartItems = props.cart.items
  return cartItems.find(item => item.item_id === props.id)
})

const increase = () => {
  clearTimeout(countTimeout.value)
  localCount.value++

  countTimeout.value = setTimeout(() => {
    fetchUpdateCart()
  }, 500)
}

const decrease = () => {
  clearTimeout(countTimeout.value)

  if (localCount.value >= 1) localCount.value--

  countTimeout.value = setTimeout(() => {
    localCount.value >=1 ? fetchUpdateCart() : fetchDeleteCartItem()
  }, 500)
}

const processFavourites = () => {
  if (!isLocalFavorite.value) {
    fetchAddFavourite()
  } else {
    fetchDeleteFavourite()
  }
}

const fetchAddFavourite = async () => {
  if (!props.id) return

  isFavoritesLoading.value = true

  try {
    await api.Favourites.postAddFavourite({
      product_id: props.id
    })

    isLocalFavorite.value = true
  } catch (err) {
    console.warn('Error', err)
  } finally {
    isFavoritesLoading.value = false
  }
}

const fetchDeleteFavourite = async () => {
  if (!props.id) return
  isFavoritesLoading.value = true

  try {
    await api.Favourites.deleteFavourite({
      product_id: props.id
    })

    isLocalFavorite.value = false
    emit('on-favourite-delete')
  } catch (err) {
    console.warn('Error', err)
  } finally {
    isFavoritesLoading.value = false
  }
}

const fetchAddToCart = async () => {
  isCartLoading.value = true

  try {
    await api.Cart.postAddToCart({
      item_type: 'book',
      item_id: props.id,
      quantity: 1
    })
    emit('on-cart-add')
  } catch (err) {
    console.warn('Error', err)
  } finally {
    isCartLoading.value = false
  }
}

const fetchDeleteCartItem = async () => {
  isCartLoading.value = true

  try {
    await api.Cart.deleteCartItem({
      item_id: getCartItem.value.id,
      quantity: localCount.value
    })
  } catch (err) {
    console.warn('Error', err)
  } finally {
    isCartLoading.value = false
  }
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
  } finally {
    isCartLoading.value = false
  }
}

watch(props, () => {
  if (props.quantity) {
    localCount.value = props.quantity
  }
}, {
  immediate: true
})

onMounted(() => {
  isLocalFavorite.value = props.isFavorite
})
</script>

<style lang="scss" scoped>
@use "@/assets/_mixins.scss";

.book-card-component {
  padding: 16px;
  background-color: var(--lighten-color);

  .header {
    .age {
      font-weight: 300;
      line-height: 1;
    }
  }

  .button-like {
    position: absolute !important;
    color: var(--text-lighten-color);

    &.is-active {
      color: var(--primary-color);
    }
  }

  .title {
    .book-title {
      display: block;
      margin-bottom: 6px;
      line-height: 1;
      font-weight: 600;
    }

    .subtitle {
      display: block;
      color: var(--text-secondary);
      line-height: 1;
      font-weight: 500;
    }
  }

  .description {
    span {
      font-weight: 300;
    }
  }

  .price {
    font-weight: 500;
  }

  .book-title {
    @include mixins.responsive-prop(font-size, 16px, 18px, 18px, 24px, 30px);
    @include mixins.responsive-prop(line-height, 18px, 20px, 20px, 26px, 32px);
  }

  .book-subtitle {
    @include mixins.responsive-prop(font-size, 16px, 16px, 16px, 20px, 24px);
    @include mixins.responsive-prop(line-height, 18px, 18px, 18px, 22px, 26px);
  }

  .description {
    @include mixins.responsive-prop(font-size, 18px, 18px, 18px, 22px, 24px);
    @include mixins.responsive-prop(line-height, 20px, 20px, 20px, 24px, 26px);
  }
}
</style>
