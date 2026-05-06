<template>
<div class="page page-profile">
  <h1 class="font-title mb-6">ЛИЧНЫЙ КАБИНЕТ</h1>

  <Tabs v-model="currentTab" :tabs="tabs">
    <template #profile>
      <div class="grid md:grid-cols-12 sm:grid-col-1">
        <div class="sm:mb-6 md:col-span-5">
          <img src="/img/profile.png" alt="profile">
        </div>

        <div class="md:col-span-1"></div>

        <div class="form md:col-span-6">
          <div class="flex flex-col gap-6">
            <Input v-model="userForm.username" label="Логин" placeholder="Логин" disabled />
            <Input v-model="userForm.lastName" label="Фамилия *" placeholder="Фамилия" />
            <Input v-model="userForm.firstName" label="Имя *" placeholder="Имя" />
            <Input v-model="userForm.patronymic" label="Отчество *" placeholder="Отчество" />
            <Input label="Дата рождения" placeholder="ДД.ММ.ГГГГ" />
          </div>
        </div>

        <div class="flex flex-col gap-6 mt-8 md:col-span-12">
          <span class="font-subtitle color-text-secondary">ПОЧТА И НОМЕР ТЕЛЕФОНА</span>

          <div class="grid md:grid-cols-12 md:gap-5 sm:gap-6">
            <Input v-model="userForm.phone" label="Ваш номер телефона *" placeholder="Номер телефона" class="md:col-span-6" />
            <Input v-model="userForm.email" label="Ваш email *" placeholder="Почта email" class="md:col-span-6" />

            <Button
              @click="logoutUser"
              variant="delete"
              class="md:col-span-6 md:order-6"
            >
              ВЫЙТИ ИЗ АККАУНТА
            </Button>
            <Button
              @click="fetchUpdateUserMe"
              :loading="isUpdateLoading"
              class="md:col-span-6"
            >
              ОБНОВИТЬ ДАННЫЕ
            </Button>
          </div>
        </div>
      </div>
    </template>

    <template #orders>
      <div class="mt-8">
        <div class="grid gap-5 md:grid-cols-3 sm:grid-cols-1">
          <span class="col-span-3 block font-bold text-center color-text-secondary mb-4">Нет заказов</span>
        </div>
      </div>
    </template>

    <template #feedback>
      <div class="mt-8">
        <Loader v-if="isReviewsLoading" />

        <div v-if="!isReviewsLoading" class="grid gap-5 md:grid-cols-3 sm:grid-cols-1">
          <span v-if="!reviews.length" class="col-span-3 block font-bold text-center color-text-secondary mb-4">Вы ещё не оставили ни одного отзыва</span>
          <ReviewCard
            v-for="(review, i) in reviews"
            :key="i"
            :author="review.user"
            :description="review.text"
            :star-count="review.rating"
          />
        </div>
      </div>
    </template>
  </Tabs>
</div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { useAuthStore } from '@/stores/auth'
import api from '@/api'
import Tabs from '@/components/tabs/Tabs.vue'
import ReviewCard from '@/components/review-card/ReviewCard.vue'
import Input from '@/components/common/Input.vue'
import Button from '@/components/common/Button.vue'
import Loader from '@/components/common/Loader.vue'

const { user, logout } = useAuthStore()

const isLoading = ref(false)
const isUpdateLoading = ref(false)
const isReviewsLoading = ref(false)

const currentTab = ref('')
const reviews = ref([])
const userForm = ref({
  email: '',
  phone: '',
  username: '',
  firstName: '',
  lastName: '',
  patronymic: '',
})

const tabs = [
  { label: 'Личные данные', value: 'profile' },
  { label: 'Заказы', value: 'orders' },
  { label: 'Мои отзывы', value: 'feedback' }
]

const fetchUser = async () => {
  isLoading.value = true
  try {
    const res = await api.Auth.whoami()
    userForm.value.username = res.username
    userForm.value.firstName = res.first_name
    userForm.value.lastName = res.last_name
    userForm.value.patronymic = res.patronymic
    userForm.value.phone = res.phone
    userForm.value.email = res.email
  } catch (err) {
    console.warn('Error', err)
  } finally {
    isLoading.value = false
  }
}

const fetchUpdateUserMe = async () => {
  isUpdateLoading.value = true

  try {
    await api.Auth.patchUsersMe({
      email: userForm.value.email,
      phone: userForm.value.phone,
      first_name: userForm.value.firstName,
      last_name: userForm.value.lastName,
      patronymic: userForm.value.patronymic
    })
  } catch (err) {
    console.warn('Error', err)
  } finally {
    isUpdateLoading.value = false
  }
}

const fetchReviews = async () => {
  isReviewsLoading.value = true

  try {
    const { results } = await api.Reviews.getReviews({
      user_id: user.user_id
    })

    reviews.value = results
  } catch (err) {
    console.warn('Error', err)
  } finally {
    isReviewsLoading.value = false
  }
}

const logoutUser = () => {
  logout()
  window.location.replace('/')
}

watch(currentTab, () => {
  if (currentTab.value === 'feedback') {
    fetchReviews()
  }
})

onMounted(() => {
  fetchUser()
})
</script>

<style lang="scss" scoped>
.page-profile {}
</style>
