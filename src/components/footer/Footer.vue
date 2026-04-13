<template>
  <div class="footer-component pt-6 pb-5">
    <IconLogo class="mb-6 md:hidden" />
    <IconLogoLg class="mb-6 max-md:hidden" />

    <div>
      <ul class="grid grid-cols-2 gap-4 mb-10">
        <li>Личный кабинет</li>
        <li>Каталог</li>
        <li>Мероприятия</li>
        <li>Корзина</li>
        <li>Для авторов</li>
      </ul>

      <div class="mb-4">
        <span class="block font-bold mb-1">8 (800) 324 -98-89</span>
        <span class="color-text-tertiary">Бесплатный звонок по РФ</span>
      </div>

      <div class="mb-4">
        <span class="block font-bold mb-1">8 (800) 324 -98-89</span>
        <span class="color-text-tertiary">Ежедневно с 10:00 - 19:00</span>
      </div>

      <div class="mb-4">
        <span class="font-bold">Связаться с нами:&nbsp;</span>
        <span>Chernila@gmail.com</span>
      </div>

      <div class="flex gap-4 mb-4">
        <IconMapPoint/>
        <span>г. Санкт-Петербург, ул Яблочкова, д.4</span>
      </div>
    </div>

    <hr class="md:mb-6 mb-1" />

    <div class="md:flex md:justify-between">
      <span class="color-secondary md:order-2">Политика обработки персональных данных</span>

      <div class="max-md:mt-2 md:order-1">
        <span class="color-secondary">@2025</span>Chernila
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { useViewport } from '@/composables/useViewport'
import IconLogo from "@/components/icons/icon-logo.vue";
import IconMapPoint from "@/components/icons/icon-map-point.vue";
import IconLogoLg from "@/components/icons/icon-logo-lg.vue";
</script>

<style lang="scss" scoped>
.footer-component {
  margin: 0 16px;
  border-top: 1px solid var(--text-color);
}
</style>
