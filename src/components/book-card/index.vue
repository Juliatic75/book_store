<template>
  <div class="book-card-component flex flex-col">
    <div class="header mb-4 relative">
      <span class="age absolute left-0">+{{ props.age }}</span>
      <div class="flex justify-center">
        <img :src="props.imgUrl" alt="book-preview">
      </div>
    </div>

    <div class="title mb-4 text-left">
      <span class="book-title">{{ props.title }}</span>
      <span class="subtitle">{{ props.genre }} | {{ props.author }}</span>
    </div>

    <div class="description mb-6 text-left flex-1">
      <span>
        {{ props.description }}
      </span>
    </div>

    <div class="price flex justify-between mb-4">
      <span>Цена:</span>
      <span>{{ props.price }}₽</span>
    </div>

    <Button>ДОБАВИТЬ В КОРЗИНУ</Button>
  </div>
</template>

<script  setup>
import Button from '@/components/button/index.vue'
import { defineProps } from "vue"


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
  }
})
</script>

<style lang="scss" scoped>
.book-card-component {
  padding: 16px;
  background-color: var(--lighten-color);

  .header {
    .age {
      font-size: 18px;
      font-weight: 300;
      line-height: 1;
    }
  }

  .title {
    .book-title {
      display: block;
      margin-bottom: 6px;
      line-height: 1;
      font-size: 16px;
      font-weight: 600;
    }

    .subtitle {
      display: block;
      color: var(--text-secondary);
      line-height: 1;
      font-size: 16px;
      font-weight: 500;
    }
  }

  .description {
    span {
      font-size: 18px;
      font-weight: 300;
      line-height: 1;
    }
  }

  .price {
    font-weight: 500;
    font-size: 20px;
  }
}
</style>
