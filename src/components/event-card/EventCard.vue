<template>
<div class="event-card-component flex flex-col">
  <div class="img mb-6">
    <img src="/img/event-preview.png" alt="event-preview">
  </div>

  <span class="font-medium mb-4">{{ props.name }}</span>

  <span class="mb-4">{{ props.description }}</span>

  <div class="flex gap-6 mb-4">
    <span class="dot dot-red">Площадь Восстания</span>
    <span class="dot dot-green">Маяковская</span>
  </div>

  <span class="mb-6">{{ props.address }}</span>

  <Button>РАСПИСАНИЕ И БИЛЕТЫ</Button>
</div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import Button from '@/components/common/Button.vue'

const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  address: {
    type: String,
    default: ''
  },
})
</script>

<style lang="scss" scoped>
.event-card-component {
  img {
    width: 100%;
  }

  .dot {
    display: inline-flex;
    align-items: center;

    &-red:before {
      content: '';
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-right: 8px;
      border-radius: 50%;
      background-color: #DB1616;
    }
    &-green:before {
      display: inline-block;
      content: '';
      width: 12px;
      height: 12px;
      margin-right: 8px;
      border-radius: 50%;
      background-color: #0F9C19;
    }
  }
}
</style>
