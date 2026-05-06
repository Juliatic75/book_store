<template>
  <div class="gallery-component grid md:grid-cols-12 sm:grid-cols-1 gap-5 mb-8">
    <div class="flex gap-5 flex-col col-span-8">
      <img class="hidden md:block" src="/img/gallery-1.png" alt="gallery">
      <img src="/img/gallery-2.png" alt="gallery">
    </div>
    <div class="hidden md:flex items-center col-span-4">
      <img src="/img/gallery-3.png" alt="gallery">
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.gallery-component {}
</style>
