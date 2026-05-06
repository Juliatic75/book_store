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
@use "@/assets/_mixins.scss";

.link-component {
  color: var(--primary-color);

  .line {
    display: flex;
    line-height: 1;
  }

  @include mixins.responsive-prop(font-size, 16px, 16px, 18px, 22px, 30px);
}
</style>
