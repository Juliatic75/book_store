<template>
  <div class="header-component flex items-center justify-between">
    <router-link class="logo" to="/">Чернила</router-link>

    <ul class="menu flex items-center justify-end flex-1">
      <li>Книги</li>
      <li>Мероприятия</li>
      <li>Кофейня</li>
      <li>Избранное</li>
      <li>О нас</li>
    </ul>

    <div class="side-menu flex items-center">
      <router-link class="flex">
        <IconCart />
      </router-link>

      <router-link class="flex">
        <IconUser />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import IconCart from '@/components/icons/icon-cart.vue'
import IconUser from '@/components/icons/icon-user.vue'
</script>

<style lang="scss" scoped>
.header-component {
  border-bottom: 1px solid var(--text-color);
  padding: 24px 0 32px 0;

  .logo {
    font-size: 38px;
    line-height: 1;
  }

  .menu {
    font-size: 20px;
    line-height: 1;

    li + li {
      margin-left: 32px;
    }
  }

  .side-menu {
    margin-left: 82px;

    a {
      width: 38px;
      height: 38px;

      & + a {
        margin-left: 18px;
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
