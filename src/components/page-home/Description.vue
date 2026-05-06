<template>
  <div class="description-component mb-20 sm:mb-10">
    <h2 class="font-bold mb-8 sm:text-center">ДОБРО ПОЖАЛОВАТЬ В МЕСТО, ГДЕ ПАХНЕТ КОФЕ И КНИГАМИ</h2>

    <div class="grid md:grid-cols-2 sm:grid-cols-1 md:text-left sm:text-center gap-5 mb-20">
      <p>Мы&nbsp;собрали лучшую печатную продукцию&nbsp;&mdash; от&nbsp;бестселлеров до&nbsp;независимых изданий, а&nbsp;рядом работает кофейня, где всегда готовы согреть разговором или идеальным капучино.</p>
      <p>У&nbsp;нас можно бесконечно бродить между стеллажами, вдыхать аромат cвежеобжаренных зерен и&nbsp;находить те&nbsp;самые истории, которые останутся с&nbsp;вами надолго.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@use "@/assets/mixins.scss";

.description-component {
  p {
    @include mixins.responsive-prop(font-size, 16px, 18px, 18px, 22px, 24px);
    @include mixins.responsive-prop(line-height, 18px, 20px, 20px, 24px, 26px);
  }
}
</style>
