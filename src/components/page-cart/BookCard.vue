<template>
<div class="cart-book-card-component flex gap-4 relative p-6">
  <div class="absolute right-2 top-2">
    <Button @click="deleteItem" class="absolute" variant="text">
      <IconClose />
    </Button>
  </div>

  <div class="img max-w-[217] w-full sm:mb-8 md:mb-0">
    <img :src="props.imgUrl" alt="book-preview">
  </div>

  <div class="col-span-2 flex flex-col">
    <span class="title block font-medium mb-2">{{ props.title }}</span>
    <span class="subtitle block mb-4 color-text-secondary">
      {{ getGenre }} {{ getGenre || props.author ? '|' : '' }} {{ props.author }}
    </span>
    <span class="description flex-1">{{ props.description }}</span>

    <div class="flex justify-between mt-8">
      <div class="counter flex gap-2">
        <button @click="decrease">-</button>
        <span class="select-none">{{ count }} шт.</span>
        <button @click="increase">+</button>
      </div>

      <span class="price font-medium flex gap-6">Цена: <span>{{ props.price }}₽</span></span>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import { computed, defineProps, watch, ref, defineEmits } from 'vue'
import Button from '@/components/common/Button.vue'
import IconClose from '@/components/icons/icon-close.vue'

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  cartId: {
    type: Number,
    required: true
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
    default: '0'
  },
  imgUrl: {
    type: String,
    default: ''
  },
  quantity: {
    type: Number,
    default: 1
  }
})

const emit = defineEmits(['update:quantity', 'on-delete'])

const genres = [
  { key: 'Роман', value: 'novel' },
  { key: 'Детектив', value: 'detective' },
]

const count = ref(1)

const getGenre = computed(() => {
  return genres.find(genre => genre.value === props.genre)?.key ?? ''
})

const deleteItem = () => {
  emit('on-delete', props.cartId, props.id)
}

const increase = () => {
  ++count.value
  emit('update:quantity', props.cartId, props.id, count.value)
}
const decrease = () => {
  if (count.value === 0) return

  --count.value
  emit('update:quantity', props.cartId, count.value)
}

watch(props, () => {
  count.value = props.quantity
}, {
  immediate: true
})

// const emit = defineEmits()
</script>

<style lang="scss" scoped>
.cart-book-card-component {
  background-color: var(--lighten-color);

  .counter {
    button {
      background-color: #E0EDFF;
      width: 28px;
      height: 28px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      padding: 0;
      user-select: none;
    }
  }

  .img {
    display: flex;
    justify-content: center;
    img {
      width: 100%;
    }
  }
}
</style>
