<template>
<div class="event-card-component flex flex-col">
  <div class="img mb-6">
    <img src="/img/event-preview.png" alt="event-preview">
  </div>

  <span class="font-medium mb-4">{{ props.name }}</span>

  <span class="mb-4">{{ props.description }}</span>

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
}
</style>
