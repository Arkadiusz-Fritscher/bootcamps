<template>
  <div id="reviews">
    <ul class="space-y-16">
      <ReviewCard
        v-for="review in getReviews"
        :id="review.id"
        :key="review.id"
        :title="review.title"
        :review="review.review"
        :bootcamp="review.bootcamp"
        :profession="review.profession"
        :user="review.users"
      />
    </ul>
    <CreateReview />
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

  data() {
    return {};
  },

  computed: {
    getReviews() {
      const slug = this.$route.params.slug;
      const reviews = this.$store.getters.getReviews;
      return reviews.filter((review) => review.bootcamp.slug === slug);
    },
  },
};
</script>
