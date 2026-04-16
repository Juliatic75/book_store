<template>
<div class="cart-book-card-component md:grid grid-cols-3 gap-4 relative p-6">
  <Button class="absolute right-2 top-2" variant="text">
    <IconClose />
  </Button>

  <div class="img sm:mb-8 md:mb-0">
    <img src="/img/book-preview.png" alt="book-preview">
  </div>

  <div class="col-span-2 flex flex-col">
    <span class="title block font-medium mb-2">{{ props.title }}</span>
    <span class="subtitle block mb-4 color-text-secondary">{{ props.genre }} | {{ props.author }}</span>
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
import { defineProps, ref } from 'vue'
import Button from '@/components/common/Button.vue'
import IconClose from '@/components/icons/icon-close.vue'

const props = defineProps({
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
  }
})

const count = ref(1)

const increase = () => {
  count.value++
}
const decrease = () => {
  if (count.value === 0) return

  count.value--
}

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

  @media (max-width: 833px) {
    .title {
      font-size: 16px;
    }
    .subtitle {
      font-size: 16px;
    }
    .description {
      font-size: 18px;
    }

    .counter span {
      font-size: 20px;
    }

    .price {
      font-size: 18px;
    }

    .img {
      img {
        max-width: 150px;
        width: 100%;
      }
    }
  }

  @media (min-width: 834px) and (max-width: 1193px) {
    .title {
      font-size: 18px;
    }
    .subtitle {
      font-size: 16px;
    }
    .description {
      font-size: 18px;
    }
  }

  @media (min-width: 1194px) and (max-width: 1439px) {
    .title {
      font-size: 20px;
    }
    .subtitle {
      font-size: 18px;
    }
    .description {
      font-size: 18px;
    }
  }

  @media (min-width: 1440px) and (max-width: 1919px) {
    .title {
      font-size: 24px;
    }
    .subtitle {
      font-size: 20px;
    }
    .description {
      font-size: 22px;
    }
  }

  @media (min-width: 1920px) {
    .title {
      font-size: 30px;
    }
    .subtitle {
      font-size: 24px;
    }
    .description {
      font-size: 24px;
    }
  }
}
</style>
