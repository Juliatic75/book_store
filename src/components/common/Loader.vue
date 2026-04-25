<template>
  <div class="loader-component">
    <span class="loader"></span>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.loader-component {
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
    width: 32px;
    height: 32px;
    border: 3px solid var(--text-color);
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
