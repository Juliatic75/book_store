<template>
  <div class="page book-view">
    <div class="">
      <div class="grid md:grid-cols-3 md:gap-4">
        <div class="max-md:hidden mb-6">
          <img src="/img/book-preview-lg.png" alt="book-preview-lg">
        </div>

        <div class="md:col-span-2">
          <div class="book-info mb-6 flex justify-between items-start grid-cols-1 sm:grid-cols-2">
            <div class="flex-1">
              <h1 class="block book-title uppercase font-title mb-2">Ночной свидетель</h1>
              <span class="block color-text-secondary mb-2">Детектив | Дарья Новикова</span>

              <div class="rating flex items-center gap-1">
                <span>4.6</span>
                <IconStar/>
                <span>&nbsp;(6 оценок)</span>
              </div>
            </div>
            <Button class="inline" variant="text">
              <IconBookmark/>
            </Button>
          </div>

          <div class="max-md:hidden">
            <Tabs :tabs="tabs">
              <template #desc>
                <p>Когда в тихом городке происходят жестокие преступления, а улики ведут в тупик,
                  единственной надеждой становится человек, чье свидетельство невозможно
                  проверить. </p>

                <p>Он — ночной свидетель. Его мир существует в тёмное время суток, а граница между
                  реальностью и кошмаром стирается. Но чтобы поймать убийцу, следователю придётся
                  погрузиться в эту тьму и довериться тому, кого все считают безумцем.</p>

                <p>Следователь Игорь Стахов, заложник собственного здравомыслия, вынужден идти по
                  следу, который видится только в полубреду. Но каждая призрачная подсказка
                  свидетеля необъяснимо материальна. </p>

                <p>Вскоре Стахов понимает, что убийца знает о своём ночном двойнике. И тьма, которая
                  когда-то хранила секреты, теперь манит их обоих в смертельную ловушку.</p>
              </template>
              <template #chars>
                <table>
                  <tbody>
                  <tr v-for="(item, i) in characteristics" :key="i">
                    <td class="pb-4">
                      <span class="font-medium">{{ item.key }}</span>
                    </td>
                    <td class="pb-4">{{ item.value }}</td>
                  </tr>
                  </tbody>
                </table>
              </template>
            </Tabs>

            <div class="price-info mt-9 mb-10">
              <div class="flex justify-between mb-5">
                <div class="font-price flex gap-2">
                  <span>1199 ₽</span>
                  <span class="line-through color-text-lighten">1499 ₽</span>
                </div>

                <div class="flex items-center gap-2">
                  <span>В наличии&nbsp;</span>
                  <IconCheckmark/>
                </div>
              </div>

              <Button>ДОБАВИТЬ В КОРЗИНУ</Button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="md:hidden">
      <div class="flex justify-center">
        <img src="/img/book-preview-lg.png" alt="book-preview-lg">
      </div>

      <div class="description my-8">
        <span class="block mb-6 font-subtitle">ОПИСАНИЕ</span>

        <p>Когда в тихом городке происходят жестокие преступления, а улики ведут в тупик,
          единственной надеждой становится человек, чье свидетельство невозможно проверить. </p>

        <p>Он — ночной свидетель. Его мир существует в тёмное время суток, а граница между
          реальностью и кошмаром стирается. Но чтобы поймать убийцу, следователю придётся
          погрузиться в эту тьму и довериться тому, кого все считают безумцем.</p>

        <p>Следователь Игорь Стахов, заложник собственного здравомыслия, вынужден идти по следу,
          который видится только в полубреду. Но каждая призрачная подсказка свидетеля необъяснимо
          материальна. </p>

        <p>Вскоре Стахов понимает, что убийца знает о своём ночном двойнике. И тьма, которая
          когда-то хранила секреты, теперь манит их обоих в смертельную ловушку.</p>
      </div>

      <div class="characteristics mb-6">
        <span class="block mb-6 font-subtitle">ХАРАКТЕРИСТИКИ</span>

        <table>
          <tbody>
          <tr v-for="(item, i) in characteristics" :key="i">
            <td class="pb-4">
              <span class="font-medium">{{ item.key }}</span>
            </td>
            <td class="pb-4">{{ item.value }}</td>
          </tr>
          </tbody>
        </table>
      </div>

      <div class="price-info mb-10">
        <div class="flex justify-between mb-5">
          <div class="font-price flex gap-2">
            <span>1199 ₽</span>
            <span class="line-through color-text-lighten">1499 ₽</span>
          </div>

          <div class="flex items-center gap-2">
            <span>В наличии&nbsp;</span>
            <IconCheckmark/>
          </div>
        </div>

        <Button>ДОБАВИТЬ В КОРЗИНУ</Button>
      </div>
    </div>

    <div class="reviews mb-6">
      <span class="block font-subtitle mb-6">
        ОТЗЫВЫ&nbsp;
        <span class="color-text-secondary">4</span>
      </span>

      <div class="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-2">
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
    </div>

    <div class="feedback mb-10">
      <FeedbackSection/>
    </div>

    <div class="similar-books mb-4">
      <span class="block font-subtitle mb-6">ПОХОЖИЕ КНИГИ</span>

      <div class="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-2">
        <BookCard
          v-for="(card, i) in bookCards" :key="i"
          :age="card.age"
          :author="card.author"
          :genre="card.genre"
          :title="card.title"
          :price="card.price"
          :description="card.description"
        />
      </div>
    </div>

    <div class="flex justify-center">
      <Link>Смотреть все книги</Link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconStar from '@/components/icons/icon-star.vue'
import Button from '@/components/common/Button.vue'
import IconBookmark from '@/components/icons/icon-bookmark.vue'
import IconCheckmark from '@/components/icons/icon-checkmark.vue'
import FeedbackSection from '@/components/page-book-view/feedback-section.vue'
import ReviewCard from '@/components/review-card/ReviewCard.vue'
import BookCard from '@/components/book-card/BookCard.vue'
import Link from '@/components/common/Link.vue'
import Tabs from '@/components/tabs/Tabs.vue'

const tabs = [
  {label: 'ОПИСАНИЕ', value: 'desc'},
  {label: 'ХАРАКТЕРИСТИКИ', value: 'chars'}
]

const characteristics = [
  {key: 'Артикул', value: '879606'},
  {key: 'ISBN', value: '3920394788292'},
  {key: 'Переплет', value: 'Твердый'},
  {key: 'Год издания', value: '2024'},
  {key: 'Издательство', value: 'Альпина'},
  {key: 'Кол-во страниц', value: '432'},
  {key: 'Размер', value: '0.5 см × 19.8 см × 25.6 см'},
  {key: 'Тип обложки', value: 'Твердая'}
]

const bookCards = [
  {
    age: '16',
    author: 'Ольга Быкова',
    genre: 'Роман',
    title: 'В метре от тебя',
    price: '1299',
    description: 'Каждый день она едет в одном поезде с мужчиной своей мечты. Каждый день они стоят в разных концах вагона, разделенные толпой.'
  }
]
</script>

<style lang="scss" scoped>
.book-view {
  .book-info {
    .book-title {
      font-weight: 500;
    }
  }

  .description {
    p + p {
      margin-top: 12px;
    }
  }
}
</style>
