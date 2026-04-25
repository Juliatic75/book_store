<template>
  <div class="input-component">
    <label v-if="label" :for="id" class="mb-4">{{ label }}</label>

    <input
      v-model="model"
      :id="id"
      :type="props.type"
      :placeholder="props.placeholder"
      :disabled="props.disabled || props.loading"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineModel, onMounted, ref } from 'vue'

const id = ref('')

const model = defineModel()

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
})

onMounted(() => {
  if (props.label) id.value = (Math.random() * 1e20).toFixed(0)
})
</script>

<style lang="scss" scoped>
.input-component {
  input {
    display: block;
    padding: 14px;
    height: 44px;
    font-size: 14px;
    border: 1px solid #000000;
    width: 100%;
    outline: none;
  }

  label {
    display: block;
    font-size: 18px;
  }

  @media (max-width: 833px) {
    input {
      font-size: 14px;
    }
  }

  @media (min-width: 834px) and (max-width: 1193px) {
    input {
      font-size: 16px;
    }
  }

  @media (min-width: 1194px) and (max-width: 1439px) {
    input {
      font-size: 18px;
    }
  }

  @media (min-width: 1440px) and (max-width: 1919px) {
    input {
      font-size: 20px;
    }
  }

  @media (min-width: 1920px) {
    input {
      font-size: 24px;
    }
  }
}
</style>
