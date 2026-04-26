<template>
<div class="event-card-component p-4">
  <span class="title block mb-4 font-medium">{{ props.title }}</span>
  <span class="date block mb-6"><span class="font-medium capitalize">{{ getDate() }} | {{ getTime() }}</span> <span class="color-text-secondary capitalize">{{ getWeekday() }}</span></span>
  <div class="flex gap-4 mb-3"></div>

  <span class="address block mb-6">{{ props.location }}</span>

  <span class="tickets block mb-4 font-medium">Билеты</span>

  <hr class="mb-4">

  <div class="flex justify-between mb-6">
    <span>Входной билет</span>
    <div class="counter flex gap-2">
      <button @click="decrease">-</button>
      <span class="select-none">{{ count }} шт.</span>
      <button @click="increase">+</button>
    </div>
  </div>

  <div class="price flex justify-between font-medium">
    <span>Цена:</span>
    <span>{{ Number(props.price) }} ₽</span>
  </div>
</div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  date: {
    type: Object,
    default: () => ({})
  },
  time: {
    type: String,
    default: ''
  },
  weekday: {
    type: String,
    default: ''
  },
  location: {
    type: String,
    default: ''
  },
  price: {
    type: String,
    default: ''
  }
})

const count = ref(1)

const increase = () => {
  count.value++
}
const decrease = () => {
  if (count.value === 0) return

  count.value--
}

const getDate = () => {
  if (!props.date?.event_date) return ''
  const newDate = new Date(props.date.event_date)
  return newDate.toLocaleDateString('ru', {
    day: 'numeric',
    month: 'long'
  })
}

const getTime = () => {
  if (!props.date?.event_date) return ''
  const newDate = new Date(props.date.event_date)
  return newDate.toLocaleTimeString('ru', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

const getWeekday = () => {
  if (!props.date?.event_date) return ''
  const newDate = new Date(props.date.event_date)
  return newDate.toLocaleDateString('ru', {
    weekday: 'long'
  })
}
</script>

<style lang="scss" scoped>
.event-card-component {
  background-color: var(--lighten-color);

  .counter {
    button {
      background-color: #E0EDFF;
      width: 28px;
      height: 28px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      padding: 0;
      user-select: none;
    }
  }

  @media (max-width: 833px) {
    .counter span {
      font-size: 20px;
    }

    .title {
      font-size: 18px;
    }
    .date {
      font-size: 16px;
    }
    .address {
      font-size: 16px;
    }
    .tickets {
      font-size: 20px;
    }

    .price {
      font-size: 20px;
    }
  }

  @media (min-width: 834px) and (max-width: 1193px) {
    .title {
      font-size: 16px;
    }
    .date {
      font-size: 16px;
    }
    .address {
      font-size: 18px;
    }
    .tickets {
      font-size: 18px;
    }
  }

  @media (min-width: 1194px) and (max-width: 1439px) {
    .title {
      font-size: 18px;
    }
    .date {
      font-size: 18px;
    }
    .tickets {
      font-size: 20px;
    }
  }

  @media (min-width: 1440px) and (max-width: 1919px) {
    .title {
      font-size: 22px;
    }
    .date {
      font-size: 22px;
    }
    .address {
      font-size: 22px;
    }
    .tickets {
      font-size: 24px;
    }
  }

  @media (min-width: 1920px) {
    .title {
      font-size: 26px;
    }
    .date {
      font-size: 26px;
    }
    .address {
      font-size: 26px;
    }
    .tickets {
      font-size: 30px;
    }
  }
}
</style>
