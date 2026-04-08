<template>
  <div class="popupProcessing-component">

    <div class="header mb-4 flex justify-between ">
      <div class="title">
        <span>ЗАКАЗ ОФОРМЛЕН!</span>
      </div>
      <div class="close flex items-center">
        <Button variant="text">
          <IconClose />
        </Button>
      </div>
    </div>

    <div class="message mb-6 text-left">
      <span>
        Спасибо за покупку! Мы уже собираем ваши книги с особой тщательностью.
      </span>
    </div>

    <div class="message mb-6 text-left ">
      <span>
        Доставка обычно занимает 3–5 дней.
        <br> <span class="underlined-text">Пожалуйста, будьте на связи</span> — перед выездом курьер позвонит вам,
        чтобы подтвердить адрес и удобное время. Мы тоже пришлём вам уведомление,
        когда заказ будет передан курьеру.
      </span>
    </div>

    <div class="button ">
      <Button lass="mb-8 ">ОТЛИЧНО, СПАСИБО</Button>
    </div>

  </div>
</template>

<script setup>
import Button from '@/components/button/index.vue'
import IconClose from "@/components/icons/icon-close.vue";
</script>

<style lang="scss" scoped>
.popupProcessing-component {
  padding: 40px 80px;
  background-color: var(--lighten-color); /* он должен быть белым, покрасила в серый, чтобы видеть на главной */
  margin-top: 24px;
  width: 780px;
  height: 366px;

  .title{
    display: block;
      margin-bottom: 6px;
      line-height: 1;
      font-size: 24px;
      font-weight: 600;
  }

  .message {
    white-space: pre-line;
    span {
      font-size: 20px;
      font-weight: 400;
      line-height: 1;
    }
  }

  .button{
    width: 300px;
  }

  .underlined-text {
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-thickness: 1px;
  color: var(--text-selection);
}

}
</style>
