<template>
  <div class="favorites-card-component flex gap-4 items-start max-w-md">
    <div class="book shrink-0">
      <img src="/img/book-preview.png" class="w-24 rounded"/>
    </div>

    <div class="information flex flex-col text-left flex-1">
      <div class="titel flex justify-between items-center">
        <span class="book-title">{{ props.title }}</span>
        <!-- Сделать кнопочкой -->
        <img :src="props.imgUrl" alt="book-preview" class="hert w-5 "/>
      </div>

      <span class="subtitle mb-4">{{ props.genre }} | {{ props.author }}</span>

      <div class="description text-left ">
        <span>
          {{ props.description }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue"

const props = defineProps({

  id: {
    type: Number,
    default: null
  },

  imgUrl: {
    type: String,
    default: '/img/hertRed.svg'
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
  }
})

</script>

<style lang="scss" scoped>
.favorites-card-component {
  padding: 24px;
  background-color: var(--lighten-color);
  margin-top: 24px;
  width: 460px;
  
  

  .information {
    .book-title {
      display: block;
      margin-bottom: 6px;
      line-height: 1;
      font-size: 18px;
      font-weight: 600;
    }

    .subtitle {
      display: block;
      color: var(--text-secondary);
      line-height: 1;
      font-size: 18px;
      font-weight: 400;
    }

    .description {
      span {
        font-size: 18px;
        font-weight: 300;
        line-height: 1;
      }
    } 
  }

  .titel{
    .hert{
      width: 20px;
      height: 20px;
    }
  }

}

</style>