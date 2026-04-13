<template>
  <div class="price-and-button-component ">

    <div class="price-availability flex justify-between items-center mt-2 w-full">
      <div class="price flex  items-center">
        <span>{{ props.price }} ₽</span>
        <del>{{ props.oldPrice}} ₽</del>
      </div>

      <div class="availability flex">
        <span>{{ props.availability }}</span>
        <img src="/img/checkMark.svg" class="w-4 h-4"/>
      </div>
    </div>

    <Button>ДОБАВИТЬ В КОРЗИНУ</Button>

  </div>
</template>

<script setup>
import Button from '@/components/button/index.vue'

const props = defineProps({
id: {
  type: Number,
  default: null
},

price: {
  type: [String, Number],
  default: ''
},

oldPrice: {
  type: [String, Number],
  default: ''
},

availability: {
  type: String,
  default: ''
},

})

</script>

<style lang="scss" scoped>
.price-and-button-component {
  margin-top: 24px;
  width: 540px;

  .price{
    span{
      display: block;
      margin-bottom: 16px;
      line-height: 1;
      font-size: 20px;
      font-weight: 500;
    }

    del{
      display: block;
      margin-bottom: 16px;
      line-height: 1;
      font-size: 20px;
      font-weight: 500;
      color: var(--text-secondary);
      padding-left: 24px;
    }
  }

  .availability{
    span{
      display: block;
      margin-bottom: 16px;
      line-height: 1;
      font-size: 18px;
      font-weight: 400;
      padding-right: 8px;
    }

    img{
      display: inline-block;
      vertical-align: middle;
    }
  }

  button{
    width: 300px;
    padding-top: 16px;
  }
}

</style>