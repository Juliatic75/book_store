<template>
  <div class="coffee-card-component flex flex-col">
    <div class="header mb-4 relative">
      <div class="flex justify-center">
        <img :src="props.imgUrl" alt="coffee-preview" />
      </div>
    </div>

    <div class="title mb-4 text-left ">
      <span class="coffee-title">{{ props.title }}</span>
    </div>

    <div class="description mb-6 text-left flex-1 ">
      <span>
        {{ props.description }}
      </span>
    </div>

    <div class="price flex justify-between mb-4 ">
      <span>Цена:</span>
      <span>{{ props.price }}₽</span>
    </div>

    <div class="line mb-6 justify-between "></div>

    <div class="compound mb-6 text-left ">
      <span>
        {{ props.compound }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue"

const props = defineProps({
  id: {
    type: Number,
    default: null,
  },

  imgUrl: {
    type: String,
    default: "/img/coffee-preview.png",
  },

  title: {
    type: String,
    default: "",
  },

  description: {
    type: String,
    default: "",
  },

  price: {
    type: [String, Number],
    default: '',
  },

  compound: {
    type: String,
    default: '',
  },
});

console.log(props);

</script>

<style lang="scss" scoped>
.coffee-card-component {
  padding: 16px;
  background-color: var(--lighten-color);
  margin-top: 24px;

  .title {
    .coffee-title {
      white-space: pre-line;
      display: block;
      margin-bottom: 16px;
      line-height: 1;
      font-size: 20px;
      font-weight: 600;
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

  .compound {
    span {
      display: block;
      color: var(--text-secondary);
      line-height: 1;
      font-size: 18px;
      font-weight: 500;
    }
  }

  .line {
    border: none;
    background-color: var(--line-color);
    width: 100%;
    height: 1px;
  }
}
</style>
