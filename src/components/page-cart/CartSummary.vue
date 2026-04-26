<template>
  <div class="cart-summary-component p-6">
    <div class="flex justify-between font-medium mb-6">
      <span>Итого:</span>
      <span>{{ props.summ }} ₽</span>
    </div>

    <hr class="mb-6">

    <div class="flex justify-between font-medium mb-4">
      <span>Доставка:</span>
      <span>1200 ₽</span>
    </div>

    <div class="flex justify-between font-medium mb-8">
      <span>Всего:</span>
      <span>{{ props.summ + 1200 }} ₽</span>
    </div>

    <Button>ОФОРМИТЬ ЗАКАЗ</Button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import Button from '@/components/common/Button.vue'

const props = defineProps({
  summ: {
    type: Number,
    default: 0
  }
})
</script>

<style lang="scss" scoped>
.cart-summary-component {
  background-color: var(--lighten-color);
}
</style>
