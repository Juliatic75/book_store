<template>
  <div class="page events-page">
    <h1 class="font-title mb-8">МЕРОПРИЯТИЯ</h1>

    <Loader v-if="isLoading" />

    <div v-if="!isLoading" class="grid md:grid-cols-2 md:gap-5">
      <EventCard
        v-for="(event, i) in events"
        :key="i"
        :name="event.title"
        :description="event.description"
        :address="event.location"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import api from '@/api'
import EventCard from '@/components/event-card/EventCard.vue'
import Loader from '@/components/common/Loader.vue'

const isLoading = ref(false)
const events = ref([])

const fetchEvents = async () => {
  isLoading.value = true

  try {
    const { results } = await api.Events.getEvents()
    events.value = results
  } catch (err) {
    console.warn('Error', err)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchEvents()
})
</script>

<style lang="scss" scoped>

</style>
