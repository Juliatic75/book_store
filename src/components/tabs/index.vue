<template>
  <div class="tabs-component">
    <div class="flex gap-4 mb-4">
      <span
        v-for="(tab, i) in props.tabs"
        @click="currentTab = tab.value"
        :key="i"
        class="cursor-pointer"
        :class="{ 'border-b-2': currentTab === tab.value }">
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
import { defineProps, ref } from 'vue'


const props = defineProps({
  tabs: {
    type: Array,
    default: () => []
  }
})

const currentTab = ref(props.tabs[0].value || '');
</script>

<style lang="scss" scoped>
.tabs-component {}
</style>
