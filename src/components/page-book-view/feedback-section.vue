<template>
<div class="feedback-section-component p-4">
  <span class="block font-subtitle mb-4">ОСТАВЬТЕ ОТЗЫВ</span>
  <Textarea class="mb-6" placeholder="Напишите отзыв о книге" />
  <span class="block font-medium mb-3">Сколько звезд поставите?</span>
  <span class="font-light">Нужен ваш вердикт!</span>

  <div class="flex stars mt-3 mb-6">
    <IconStarInactive v-for="(item, i) in 5" :key="i"/>
  </div>

  <Button variant="outline">Опубликовать</Button>
</div>
</template>

<script lang="ts" setup>
import Textarea from '@/components/common/Textarea.vue'
import IconStarInactive from '@/components/icons/icon-star-inactive.vue'
import Button from '@/components/common/Button.vue'
</script>

<style lang="scss" scoped>
.feedback-section-component {
  background-color: var(--lighten-color);

  .stars {
    color: var(--text-lighten-color)
  }
}
</style>
