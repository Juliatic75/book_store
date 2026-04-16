<template>
  <component
    class="link-component flex items-center"
    :is="getComponentTag"
    :href="props.href"
    :to="props.to"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  href: {
    type: String,
    default: ''
  },
  to: {
    type: String,
    default: ''
  },

})

const getComponentTag = computed(() => {
  if (!props.href && !props.to) return 'a'

  return props.href ? 'a' : 'router-link'
})
</script>

<style lang="scss" scoped>
.link-component {
  color: var(--primary-color);

  .line {
    display: flex;
    line-height: 1;
  }

  @media (max-width: 833px) {
    font-size: 16px;
  }

  @media (min-width: 834px) and (max-width: 1193px) {
    font-size: 16px;
  }

  @media (min-width: 1194px) and (max-width: 1439px) {
    font-size: 18px;
  }

  @media (min-width: 1440px) and (max-width: 1919px) {
    font-size: 22px;
  }

  @media (min-width: 1920px) {
    font-size: 30px;
  }
}
</style>
