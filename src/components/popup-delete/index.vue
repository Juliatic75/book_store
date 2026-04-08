<template>
  <div class="popupProcessing-component">
    
    <div class="header mb-4 flex justify-between ">
      <div class="title"> 
        <span>УДАЛИТЬ ПРОФИЛЬ</span>
      </div>
      <div class="close flex items-center">
        <!-- Сделать кнопочкой -->
        <img src="/img/close.svg"/>
      </div>
    </div>

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

    <div class="button">
      <Button lass="mb-8">ОСТАВИТЬ АККАУНТ</Button>
      <Button variant="delete">ДА, УДАЛИТЬ НАВСЕГДА</Button>
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
  height: 298px;

  .button{
    display: flex;
    flex-direction: row;
    gap: 16px;
  }

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

  

  .underlined-text {
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-thickness: 1px;
  color: var(--text-selection-danger);
}

}
</style>