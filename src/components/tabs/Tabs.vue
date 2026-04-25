<template>
  <div class="tabs-component">
    <div class="flex gap-4 mb-4">
      <span
        v-for="(tab, i) in props.tabs"
        :key="i"
        @click="currentTab = tab.value"
        class="cursor-pointer tab"
        :class="{ 'active': currentTab === tab.value }"
      >
        {{ tab.label }}
      </span>
    </div>

    <div class="tab-content">
      <template v-for="(tab, i) in props.tabs" :key="i">
        <slot v-if="currentTab === tab.value" :name="tab.value"></slot>
      </template>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue'

const props = defineProps({
  tabs: {
    type: Array,
    default: () => []
  }
})

const currentTab = ref('')

onMounted(() => {
  currentTab.value = props.tabs[0].value.toString() || ''
})
</script>

<style lang="scss" scoped>
.tabs-component {
  .tab {
    font-size: clamp(0.875rem, 0.875rem + 0vw, 0.875rem);
    color: var(--text-secondary);

    &.active {
      color: var(--text-color);
    }
  }
}
</style>
