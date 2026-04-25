<template>
<div class="event-card-component flex flex-col">
  <div class="img mb-6">
    <img src="/img/event-preview.png" alt="event-preview">
  </div>

  <span class="font-medium name mb-4">{{ props.name }}</span>

  <span class="description mb-4">{{ props.description }}</span>

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

  @media (max-width: 833px) {
    .name {
      font-size: 18px;
    }
    .description {
      font-size: 16px;
    }
  }

  @media (min-width: 834px) and (max-width: 1193px) {
    .name {
      font-size: 20px;
    }
    .description {
      font-size: 18px;
    }
  }

  @media (min-width: 1194px) and (max-width: 1439px) {
    .name {
      font-size: 20px;
    }
    .description {
      font-size: 18px;
    }
  }

  @media (min-width: 1440px) and (max-width: 1919px) {
    .name {
      font-size: 24px;
    }
    .description {
      font-size: 22px;
    }
  }

  @media (min-width: 1920px) {
    .name {
      font-size: 28px;
    }
    .description {
      font-size: 28px;
    }
  }
}
</style>
