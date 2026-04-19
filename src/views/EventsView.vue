<template>
  <div class="page events-page">
    <h1 class="font-title mb-8">МЕРОПРИЯТИЯ</h1>

    <div class="grid md:grid-cols-2 md:gap-5">
      <EventCard
        v-for="(event, i) in events"
        :key="i"
        :name="event.name"
        :description="event.description"
        :address="event.address"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import EventCard from '@/components/event-card/EventCard.vue'

const events = [
  { name: 'name', description: 'description', address: 'address' },
  { name: 'name', description: 'description', address: 'address' }
]
</script>

<style lang="scss" scoped>

</style>
