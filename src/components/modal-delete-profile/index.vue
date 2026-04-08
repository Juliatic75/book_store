<template>
  <div class="popup-processing-component">
    <Modal v-model="isOpen" size="800px">
      <template #title>
        УДАЛИТЬ ПРОФИЛЬ
      </template>

      <div>
        <div class="message mb-6 text-left">
          <span>
            Вы действительно хотите удалить свой профиль?
          </span>
        </div>

        <div class="message mb-6 text-left ">
          <span>
            <span class="underlined-text">Это действие необратимо</span> — все ваши данные, сохранения
            <br>и история будут стерты навсегда.
          </span>
        </div>
      </div>

      <template #actions>
        <div class="flex gap-4">
          <Button>ОСТАВИТЬ АККАУНТ</Button>
          <Button variant="delete">ДА, УДАЛИТЬ НАВСЕГДА</Button>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script setup>
import Button from '@/components/button/index.vue'
import Modal from '@/components/modal/index.vue'

const isOpen = defineModel(false)
</script>

<style lang="scss" scoped>
.popup-processing-component {
  .message {
    white-space: pre-line;

    span {
      font-size: 20px;
      font-weight: 400;
      line-height: 1;
    }
  }

  .underlined-text {
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-thickness: 1px;
    color: var(--text-selection-danger);
  }

}
</style>
