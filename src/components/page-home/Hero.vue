<template>
  <div class="hero-component grid md:grid-cols-12 sm:grid-cols-2">
    <div class="hero-text col-span-6 flex flex-col justify-center lg:order-1 md:order-1 sm:order-2">
      <span class="hero-title">РАССКАЗ</span>
      <span class="hero-title">СЮЖЕТ</span>
      <span class="hero-title">ЭСПРЕССО</span>

      <span class="hero-subtitle">Мы создали пространство для тех,<br>кто ценит эстетику в деталях.</span>

      <Button class="button-catalog" to="/catalog" size="inline">СМОТРЕТЬ КНИГИ</Button>
    </div>

    <div class="col-span-6 md:order-2 sm:order-1 md:mb-0 sm:mb-10">
      <img src="/img/hero-img.png" alt="hero-image">
    </div>
  </div>
</template>

<script lang="ts" setup>

import Button from '@/components/common/Button.vue'
</script>

<style lang="scss" scoped>
@use "@/assets/_mixins.scss";

.hero-component {
  @include mixins.responsive-prop(margin-bottom, 129px, 102px, 164px, 205px, 165px);

  .hero-text {
    .hero-title {
      display: block;
      font-weight: 600;
      line-height: 1;
      @include mixins.responsive-prop(font-size, 50px, 44px, 70px, 80px, 110px);

      &:nth-child(1) {
        color: var(--primary-color);
      }

      &:nth-child(2) {
        color: #C1CBD9;
      }

      &:nth-child(3) {
        color: var(--primary-color);
        @include mixins.responsive-prop(margin-bottom, 16px, 24px, 16px, 24px, 50px);
      }
    }

    .hero-subtitle {
      display: block;
      margin-bottom: 50px;
      color: var(--primary-color);

      @include mixins.responsive-prop(font-size, 18px, 18px, 18px, 22px, 26px);
      @include mixins.responsive-prop(line-height, 20px, 20px, 20px, 24px, 28px);
    }

    .button-catalog {
      max-width: 480px;
      width: 100%;

      @include mixins.responsive-prop(max-width, 100%, 480px, 480px, 480px, 480px);
    }
  }
}
</style>
