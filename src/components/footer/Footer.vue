<template>
  <div class="footer-component pt-6 pb-5">
    <router-link to="/">
      <IconLogo class="mb-6 md:hidden" />
      <IconLogoLg class="mb-6 max-md:hidden" />
    </router-link>

    <div>
      <ul class="grid grid-cols-2 gap-4 mb-10">
        <li>
          <router-link to="/profile">Личный кабинет</router-link>
        </li>
        <li>
          <router-link to="/catalog">Каталог</router-link>
        </li>
        <li>
          <router-link to="/events">Мероприятия</router-link>
        </li>
        <li>
          <router-link v-if="isLogged" to="/cart">Корзина</router-link>
        </li>
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
      <a
        class="policy color-secondary md:order-2"
        href="/policy"
        target="_blank"
      >
        Политика обработки персональных данных
      </a>

      <div class="max-md:mt-2 md:order-1">
        <span class="policy color-secondary">@2025</span>Чернила
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth'
import IconLogo from '@/components/icons/icon-logo.vue'
import IconMapPoint from '@/components/icons/icon-map-point.vue'
import IconLogoLg from '@/components/icons/icon-logo-lg.vue'

const { isLogged } = useAuthStore()
</script>

<style lang="scss" scoped>
@use "@/assets/_mixins.scss";

.footer-component {
  margin: 0 16px;
  border-top: 1px solid var(--text-color);

  @include mixins.responsive-prop(font-size, 16px, 18px, 18px, 22px, 24px);

  .policy {
    @include mixins.responsive-prop(font-size, 14px, 16px, 16px, 18px, 20px);
  }

  a:hover {
    color: var(--link-hover-color);
  }
}
</style>
