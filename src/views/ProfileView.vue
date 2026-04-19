<template>
<div class="page page-profile">
  <h1 class="font-title mb-6">ЛИЧНЫЙ КАБИНЕТ</h1>

  <Tabs :tabs="tabs">
    <template #profile>
      <div class="grid md:grid-cols-12 sm:grid-col-1">
        <div class="sm:mb-6 md:col-span-5">
          <img src="/img/profile.png" alt="profile">
        </div>

        <div class="md:col-span-1"></div>

        <div class="form md:col-span-6">
          <div class="flex flex-col gap-6">
            <Input label="Фамилия *" placeholder="Фамилия" />
            <Input label="Имя *" placeholder="Имя" />
            <Input label="Отчество *" placeholder="Отчество" />
            <Input label="Дата рождения" placeholder="ДД.ММ.ГГГГ" />
          </div>
        </div>

        <div class="flex flex-col gap-6 mt-8 md:col-span-12">
          <span class="font-subtitle color-text-secondary">ПОЧТА И НОМЕР ТЕЛЕФОНА</span>

          <div class="grid md:grid-cols-12 md:gap-5 sm:gap-6">
            <Input label="Ваш номер телефона *" placeholder="Номер телефона" class="md:col-span-6" />
            <Input label="Ваш email *" placeholder="Почта email" class="md:col-span-6" />

            <Button variant="delete" class="md:col-span-6 md:order-6">УДАЛИТЬ ПРОФИЛЬ</Button>
            <Button class="md:col-span-6">ОБНОВИТЬ ДАННЫЕ</Button>
          </div>
        </div>
      </div>
    </template>

    <template #orders></template>

    <template #feedback>
      <div class="grid gap-5 md:grid-cols-3 sm:grid-cols-1">
        <ReviewCard author="Дарья Новикова"
                    description="Блестяще! Граница между безумием и гениальностью стирается с каждой главой. Следователь Стахов — герой нашего времени, заложник не системы, а собственного здравомыслия. "
                    :star-count="4" :like-count="10"/>
        <ReviewCard author="Дарья Новикова"
                    description="Блестяще! Граница между безумием и гениальностью стирается с каждой главой. Следователь Стахов — герой нашего времени, заложник не системы, а собственного здравомыслия. "
                    :star-count="4" :like-count="10"/>
        <ReviewCard author="Дарья Новикова"
                    description="Блестяще! Граница между безумием и гениальностью стирается с каждой главой. Следователь Стахов — герой нашего времени, заложник не системы, а собственного здравомыслия. "
                    :star-count="4" :like-count="10"/>
      </div>
    </template>
  </Tabs>
</div>
</template>

<script lang="ts" setup>
import Tabs from '@/components/tabs/Tabs.vue'
import ReviewCard from '@/components/review-card/ReviewCard.vue'
import Input from '@/components/common/Input.vue'
import Button from '@/components/common/Button.vue'

const tabs = [
  { label: 'Личные данные', value: 'profile' },
  { label: 'Заказы', value: 'orders' },
  { label: 'Мои отзывы', value: 'feedback' }
]
</script>

<style lang="scss" scoped>
.page-profile {}
</style>
