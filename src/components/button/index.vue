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
  const variants = ['primary', 'outline', 'delete', 'text']

  let variant

  if (variants.includes(props.variant)) {
    variant = `variant-${props.variant}`
  } else {
    variant = 'variant-primary'
  }

  return {
    [variant]: true
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

      &-text {
        padding: 0;
        background-color: transparent;
        color: var(--text-color);
      }
    }
  }
</style>
