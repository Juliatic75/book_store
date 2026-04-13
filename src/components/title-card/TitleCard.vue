<template>
  <div class="title-card-component">
    <div class="book-title flex justify-between items-center">
      <span>{{ props.title }}</span>

      <!-- Сделать кнопочкой -->
      <img src="/img/favorites.svg"/>
    </div>

    <div class="subtitle flex items-center">

      <span>{{ props.genre }} | {{ props.author }}</span>

      <div class="gradeStar flex items-center ">
        <span>
          {{ props.gradeStar }}
        </span>
      </div>

      <div class="star flex items-center">
        <img src="/img/star.svg"/>
      </div>

      <div class="reviews flex items-center">
        <span>
          ({{ props.reviews }} оценок)
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

  gradeStar: {
    type: [String, Number],
    default: '',
  },

  reviews: {
    type: [String, Number],
    default: '',
  },
})

</script>

<style lang="scss" scoped>
.title-card-component {
  margin-top: 24px;
  width: 540px;

  .book-title{
    span{
      display: block;
      margin-bottom: 12px;
      line-height: 1;
      font-size: 24px;
      font-weight: 600;
    }
  }

  .subtitle{
    span{
      display: block;
      color: var(--text-secondary);
      line-height: 1;
      font-size: 18px;
      font-weight: 300;
      padding-right: 56px;
    }
  }

  .gradeStar{
    span {
      font-size: 18px;
      font-weight: 300;
      line-height: 1;
      padding-right: 4px;
      color: var(--text-color);
    }
  }

  .reviews{
    span {
      font-size: 18px;
      font-weight: 300;
      line-height: 1;
      padding-left: 8px;
      color: var(--text-color);
    }
  }
  



}
</style>