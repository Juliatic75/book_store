<template>
<div class="preloader fixed flex items-center justify-center">
  <span class="loader"></span>
</div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.preloader {
  left: 0;
  top: 0;
  background: #FFFFFF;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.loader {
  width: 48px;
  height: 48px;
  border: 5px solid var(--text-color);
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
</style>
