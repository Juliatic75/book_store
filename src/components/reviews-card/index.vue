<template>
  <div class="reviews_card-component flex flex-col">

    <div class="header mb-4 flex justify-between ">

      <div class="author">
        <span>
          {{ props.author }}
        </span>
      </div>

      <div class="grade flex ">

        <div class="gradeStar flex items-center ">
          <span>
            {{ props.gradeStar }}
          </span>
        </div>

        <div class="star flex items-center">
            <img src="/img/star.svg"/>
        </div>

      </div>
      
    </div>

    <div class="description mb-4 text-left flex-1">
      <span>
        {{ props.description }}
      </span>
    </div>

    <div class="footer  flex justify-between">

      <div class="date">
        <span>
          {{ props.date }}
        </span>
      </div>

      <div class="grade flex ">
        <div class="gradeHert  flex items-center">
          <span>
            {{ props.gradeHert }}
          </span>
        </div>

        <div class="hert flex items-center">
          <img src="/img/hertGrey.svg"/>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue"

const props = defineProps({
  id: {
    type: Number,
    default: null,
  },

  author: {
    type: String,
    default: '',
  },

  gradeStar: {
    type: [String, Number],
    default: '',
  },

  description: {
    type: String,
    default: '',
  },

  date: {
    type: [String, Date],
    default: '',
  },

  gradeHert: {
    type: [String, Number],
    default: '',
  },
})

</script>

<style lang="scss" scoped>
.reviews_card-component {
  padding: 16px;
  background-color: var(--lighten-color);
  margin-top: 24px;

  .author{
    span {
      font-size: 18px;
      font-weight: 500;
      line-height: 1;
    }
  }

  .gradeStar{
    span {
      font-size: 18px;
      font-weight: 300;
      line-height: 1;
      padding-right: 4px;
    }
  }

  .description{
    span {
      font-size: 18px;
      font-weight: 400;
      line-height: 1;
    }
  }

   .footer{
    span {
      font-size: 18px;
      font-weight: 300;
      line-height: 1;
      color: var(--text-secondary);
    }
  }

  .gradeHert{
    span {
      font-size: 18px;
      font-weight: 300;
      line-height: 1;
      padding-right: 6px;
      color: var(--text-color);
    }
  }


}

</style>