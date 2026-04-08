<template>
  <transition name="fade">
    <div v-if="isOpen" class="modal-component">
      <div @click.self="isOpen = false" class="modal-background"></div>

      <div class="modal-container">
        <div class="modal-content" :style="styleList">
          <div class="title-container mb-4 flex justify-between items-center">
            <span class="title">
              <slot name="title"></slot>
            </span>

            <div>
              <Button @click="isOpen = false" variant="text">
                <IconClose />
              </Button>
            </div>
          </div>

          <div class="content mb-4">
            <slot></slot>
          </div>

          <div class="actions">
            <slot name="actions"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="js" setup>
import Button from '@/components/button/index.vue'
import IconClose from "@/components/icons/icon-close.vue";
import { watch, computed, defineProps, defineModel } from "vue";

const isOpen = defineModel(false)

const props = defineProps({
  size: {
    type: String,
    default: '304px'
  }
})

const styleList = computed(() => {
  return ({
    'min-width': `${props.size || '304px'}`
  })
})

watch(isOpen, () => {
  if (isOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = null
  }
})
</script>

<style lang="scss" scoped>
.modal-component {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  .title-container {
    .title {
      line-height: 1;
      font-size: 24px;
    }
  }

  .modal-background {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(#333333, 0.8);
    z-index: 20;
  }

  .modal-container {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 30;
  }

  .modal-content {
    padding: 40px 80px;
    max-height: 100vh;
    overflow-y: auto;
    min-width: 304px;
    max-width: calc(100% - 16px);
    background-color: #FFFFFF;
  }

  .content {
    font-size: 20px;
    font-weight: 400;
    line-height: 1;
  }
}
</style>
