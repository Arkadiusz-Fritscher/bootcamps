<template>
  <div id="reviews">
    <ul class="space-y-16">
      <ReviewCard
        v-for="review in reviews"
        :id="review.id"
        :key="review.id"
        :title="review.title"
        :review="review.review"
        :bootcamp="review.bootcamp"
        :profession="review.profession"
        :user="review.users"
      />
    </ul>
    <client-only>
      <CreateReview />
    </client-only>
  </div>
</template>

<script>
import ReviewCard from './ReviewCard';
import CreateReview from './CreateReview.vue';
export default {
  components: {
    ReviewCard,
    CreateReview,
  },
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
};
</script>
