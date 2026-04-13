<template>
<textarea class="textarea-component" :rows="props.rows" :placeholder="props.placeholder" />
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  rows: {
    type: Number,
    default: 10
  },
  placeholder: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
.textarea-component {
  display: block;
  width: 100%;
  resize: none;
  padding: 12px;
  font-size: clamp(1rem, 0.8786rem + 0.5178vw, 1.5rem);
  border: 1px solid #D4D3D3;

  &::placeholder {
    color: #555353;
  }
}
</style>
