<template>
  <div class="popupProcessing-component">

    <div class="header mb-4 flex justify-between ">
      <div class="title">
        <span>ПРИЯТНОГО ВЕЧЕРА!</span>
      </div>
      <div class="close flex items-center">
        <!-- Сделать кнопочкой -->
<!--        <img src="/img/close.svg"/>-->
      </div>
    </div>

    <div class="message mb-6 text-left">
      <span>
        Билет успешно оформлен.
      </span>
    </div>

    <div class="message mb-6 text-left ">
      <span>
        <span class="underlined-text">Мы отправили его на вашу почту</span> — обычно письмо приходит
        <br>в течение пары минут. Если не видите во «Входящих», загляните
        <br>в папку «Спам» или «Промоакции».
      </span>
    </div>

    <div class="button ">
      <Button lass="mb-8 ">ОТЛИЧНО, СПАСИБО</Button>
    </div>

  </div>
</template>

<script setup>
import Button from '@/components/button/index.vue'
</script>

<style lang="scss" scoped>
.popupProcessing-component {
  padding: 40px 80px;
  background-color: var(--lighten-color); /* он должен быть белым, покрасила в серый, чтобы видеть на главной */
  margin-top: 24px;
  width: 780px;
  height: 322px;

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
