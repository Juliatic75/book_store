<template>
  <component
    :is="props.to ? 'router-link' : 'button'"
    class="button-component relative"
    :class="classList"
    :role="props.role"
    :disabled="props.loading"
    :to="props.to"
  >
    <slot></slot>

    <span
      v-if="loading"
      class="loader-container absolute left-0 top-0 w-full h-full flex justify-center items-center"
    >
      <span class="loader"></span>
    </span>
  </component>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary'
  },
  role: {
    type: String,
    default: 'button'
  },
  size: {
    type: String,
    default: 'block'
  },
  loading: {
    type: Boolean,
    default: false
  },
  to: {
    type: String,
    default: undefined
  }
})

const classList = computed(() => {
  const variants = ['primary', 'outline', 'delete', 'text']
  const sizes = ['block', 'inline']

  let variant, size

  if (variants.includes(props.variant)) {
    variant = `variant-${props.variant}`
  } else {
    variant = 'variant-primary'
  }

  if (sizes.includes(props.size)) {
    size = `size-${props.size}`
  } else {
    size = 'size-block'
  }

  return {
    [variant]: true,
    [size]: true
  }
})
</script>

<style lang="scss" scoped>
  @use "@/assets/_mixins.scss";

  .button-component {
    display: block;
    color: #FFFFFF;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    line-height: 1;
    user-select: none;
    padding: 14px 40px;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;

    // eslint-disable-next-line
    @include mixins.responsive-prop(font-size, 16px, 16px, 16px, 20px, 24px);
    @include mixins.responsive-prop(
      padding, 10px 40px, 12px 40px, 12px 40px, 15px 40px, 20px 40px);

    &.size {
      &-block {
        width: 100%
      }
      &-inline {
        width: auto;
      }
    }

    &.variant {
      &-primary {
        background-color: var(--primary-color);
        box-shadow: 0 0 0 1px var(--primary-color) inset;

        &:hover {
          background-color: #FFFFFF;
          color: var(--primary-color);
        }
      }

      &-outline {
        background-color: #FFFFFF;
        box-shadow: 0 0 0 1px var(--primary-color) inset;
        color: var(--primary-color);

        .loader-container {
          background-color: rgba(#FFFFFF, 0.5);
        }

        .loader {
          border: 3px solid var(--primary-color);
          border-bottom-color: transparent;
        }
      }

      &-delete {
        background-color: #FFFFFF;
        box-shadow: 0 0 0 2px var(--delete-color) inset;
        color: var(--text-color);
      }

      &-text {
        display: inline-block;
        width: auto;
        padding: 0;
        background-color: transparent;
        color: var(--text-color);

        .loader {
          width: 16px;
          height: 16px;
          border-width: 2px;
        }
      }
    }

    //@media (max-width: 833px) {
    //  font-size: 16px;
    //}
    //
    //@media (min-width: 834px) and (max-width: 1193px) {
    //  font-size: 16px;
    //}
    //
    //@media (min-width: 1194px) and (max-width: 1439px) {
    //  font-size: 16px;
    //}
    //
    //@media (min-width: 1440px) and (max-width: 1919px) {
    //  font-size: 20px;
    //}
    //
    //@media (min-width: 1920px) {
    //  font-size: 24px;
    //}

    .loader-container {
      background-color: rgba(#FFFFFF, 0.2);
    }

    .loader {
      width: 32px;
      height: 32px;
      border: 3px solid #FFFFFF;
      border-bottom-color: transparent;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
</style>
