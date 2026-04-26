<template>
<Modal v-model="isOpen" size="1000px">
  <template #title>
    Премьера детктива «Уравнение для призрака»
  </template>

  <Loader v-if="isLoading" />

  <div v-if="!isLoading" class="flex flex-col gap-6">
    <div
      v-for="(date, i) in props.dates"
      :key="i"
      class="flex items-center justify-between date-card pl-4 pr-4 pt-3 pb-3"
    >
      <div class="flex">
        <span class="font-bold capitalize">
          {{ getDate(date.event_date) }} | {{ getTime(date.event_date) }}
        </span>

        <span class="block ml-6 color-text-secondary font-bold capitalize">
          {{ getWeekday(date.event_date) }}
        </span>
      </div>

      <span class="flex-1 text-right mr-10">{{ Number(props.price) }} ₽</span>

      <Button
        @click="fetchAddToCart(date.id)"
        size="inline"
        :disabled="!date.tickets_available"
        :loading="loadingIds.includes(date.id)"
      >
        ДОБАВИТЬ В КОРЗИНУ
      </Button>
    </div>
  </div>
</Modal>
</template>

<script setup>
import { defineModel, ref, defineProps } from 'vue'
import api from '@/api'
import Modal from '@/components/common/Modal.vue'
import Button from '@/components/common/Button.vue'
import Loader from '@/components/common/Loader.vue'

const props = defineProps({
  price: {
    type: String,
    default: ''
  },
  dates: {
    type: Array,
    default: () => []
  }
})

const isOpen = defineModel(false)

const loadingIds = ref([])

const getDate = (date) => {
  const newDate = new Date(date)
  return newDate.toLocaleDateString('ru', {
    day: 'numeric',
    month: 'long'
  })
}

const getTime = (date) => {
  const newDate = new Date(date)
  return newDate.toLocaleTimeString('ru', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

const getWeekday = (date) => {
  const newDate = new Date(date)
  return newDate.toLocaleDateString('ru', {
    weekday: 'long'
  })
}

const fetchAddToCart = async (id) => {
  loadingIds.value.push(id)

  try {
    await api.Cart.postAddToCart({
      item_type: 'event',
      item_id: id,
      quantity: 1
    })
  } catch (err) {
    console.warn('Error', err)
  } finally {
    loadingIds.value = loadingIds.value.filter(item => item !== id)
  }
}
</script>

<style lang="scss" scoped>
.date-card {
  background-color: #F9F9FB;
}
</style>
