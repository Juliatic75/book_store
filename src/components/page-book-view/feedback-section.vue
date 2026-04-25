<template>
<div class="feedback-section-component p-4">
  <span class="block font-subtitle mb-4">ОСТАВЬТЕ ОТЗЫВ</span>

  <div class="md:grid md:grid-cols-12">
    <div class="md:col-span-7">
      <Textarea v-model="form.text" placeholder="Напишите отзыв о книге" />
    </div>

    <div class="md:col-span-1"></div>

    <div class="md:col-span-4 flex flex-col md:mt-0 sm:mt-6">
      <div class="flex-1">
        <span class="block font-medium mb-3">Сколько звезд поставите?</span>
        <span class="font-light">Нужен ваш вердикт!</span>
        <div class="flex stars mt-3 mb-6">
          <IconStarInactive
            @click="setRating(i)"
            v-for="(item, i) in 5"
            :key="i"
            class="cursor-pointer"
            :class="{ 'star-active': form.rating >= i + 1 }"
          />
        </div>
      </div>

      <Button
        @click="createFeedback"
        variant="outline"
        :loading="isLoading"
      >
        Опубликовать
      </Button>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import api from '@/api'
import Textarea from '@/components/common/Textarea.vue'
import IconStarInactive from '@/components/icons/icon-star-inactive.vue'
import Button from '@/components/common/Button.vue'

const props = defineProps({
  product: {
    type: [String, Number],
    required: true
  }
})

const isLoading = ref(false)
const form = ref({
  rating: 0,
  text: ''
})

const setRating = (index) => {
  form.value.rating = index + 1
}

const createFeedback = async () => {
  if (!form.value.rating || !form.value.text) return

  try {
    isLoading.value = true

    await api.Events.postEvent({
      product: props.product,
      text: form.value.text,
      rating: form.value.rating
    })
  } catch (err) {
    console.warn('Error', err)
  } finally {
    isLoading.value = false
  }
}
</script>

<style lang="scss" scoped>
.feedback-section-component {
  background-color: var(--lighten-color);

  .stars {
    color: var(--text-lighten-color);

    svg {
      transition: color 0.2s ease;
      &:hover {
        color: rgba(#EAE20B, 0.8);
      }
    }
  }

  .star-active {
    color: #EAE20B;
  }
}
</style>
