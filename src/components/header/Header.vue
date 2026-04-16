<template>
  <div class="header-component flex items-center justify-between py-3 mx-4 relative">
    <router-link class="logo flex items-center" to="/">
      <IconLogo class="lg:hidden" />
      <IconLogoLg class="max-lg:hidden" />
    </router-link>

    <ul class="menu flex items-center justify-end flex-1 max-lg:hidden">
      <li v-for="(item, i) in menuItems" :key="i">
        <router-link :to="item.value" class="hover:underline">{{ item.key }}</router-link>
      </li>
    </ul>

    <div class="side-menu flex items-center max-lg:hidden">
      <router-link class="flex" to="/cart">
        <IconCart />
      </router-link>

      <router-link class="flex" to="/">
        <IconUser />
      </router-link>
    </div>

    <div class="lg:hidden max-lg:visible">
      <Button @click="isMenuOpen = !isMenuOpen" variant="text">
        <IconBurgerMenu />
      </Button>
    </div>

    <div v-if="isMenuOpen" class="mobile-menu absolute p-4">
      <ul class="">
        <li v-for="(item, i) in menuItems" :key="i" class="mb-4 last:mb-0">
          <a class="block hover:underline" href="/">{{ item.key }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { onBeforeRouteLeave, RouterLink } from 'vue-router'
import IconCart from '@/components/icons/icon-cart.vue'
import IconUser from '@/components/icons/icon-user.vue'
import IconLogo from '@/components/icons/icon-logo.vue'
import Button from '@/components/common/Button.vue'
import IconBurgerMenu from '@/components/icons/icon-burger-menu.vue'
import IconLogoLg from '@/components/icons/icon-logo-lg.vue'

const isMenuOpen = ref(false)

const menuItems = [
  { key: 'Книги', value: '/catalog' },
  { key: 'Мероприятия', value: '' },
  { key: 'Кофейня', value: '' },
  { key: 'Избранное', value: '/favourites' },
  { key: 'О нас', value: '/about' }
]

const closeMenu = () => {
  isMenuOpen.value = false
}

onBeforeRouteLeave(() => {
  closeMenu()
})

onMounted(() => {
  window.addEventListener('resize', closeMenu)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', closeMenu)
})
</script>

<style lang="scss" scoped>
.header-component {
  border-bottom: 1px solid var(--text-color);

  .mobile-menu {
    position: absolute;
    left: 0;
    top: calc(100% + 1px);
    width: 100%;
    background-color: #FFFFFF;
    z-index: 100;
    border-left: 1px solid;
    border-right: 1px solid;
    border-bottom: 1px solid;
    box-shadow: 0px 10px 10px 10px rgba(#333333, 0.2);
  }

  .menu {
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

  @media (max-width: 833px) {
    .menu {
      font-size: 16px;
    }
  }

  @media (min-width: 834px) and (max-width: 1193px) {
    .menu {
      font-size: 16px;
    }
  }

  @media (min-width: 1194px) and (max-width: 1439px) {
    .menu {
      font-size: 18px;
    }
  }

  @media (min-width: 1440px) and (max-width: 1919px) {
    .menu {
      font-size: 20px;
    }
  }

  @media (min-width: 1920px) {
    .menu {
      font-size: 28px;
    }
  }
}
</style>
