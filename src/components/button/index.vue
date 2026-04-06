<template>
  <button class="button-component" :class="classList">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary'
  },
})

const classList = computed(() => {
  return {
    'variant-primary': props.variant === 'primary',
    'variant-outline': props.variant === 'outline',
    'variant-delete': props.variant === 'delete',
  }
})
</script>

<style lang="scss" scoped>
  .button-component {
    display: block;
    width: 100%;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 16px;
    line-height: 1;
    user-select: none;
    padding: 12px 40px;
    cursor: pointer;

    &.variant {
      &-primary {
        background-color: var(--primary-color);
      }

      &-outline {
        background-color: #FFFFFF;
        box-shadow: 0 0 0 1px var(--primary-color) inset;
        color: var(--primary-color);
      }
      &-delete {
        background-color: #FFFFFF;
        box-shadow: 0 0 0 2px var(--delete-color) inset;
        color: var(--text-color);
      }
    }
  }
</style>
