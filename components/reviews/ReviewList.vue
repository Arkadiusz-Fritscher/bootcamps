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

  data() {
    return {
      reviews: [],
    };
  },

  async fetch() {
    const storedReviews = this.$store.getters.getReviews;
    if (storedReviews.length > 0) {
      this.reviews = storedReviews;
    } else {
      this.reviews = await this.$store.dispatch('fetchReviews');
    }
  },

  computed: {
    getReviews() {
      const slug = this.$route.params.slug;
      if (this.reviews.length > 0) {
        return this.reviews.filter((review) => review.bootcamp.slug === slug);
      }
      return [];
    },
  },
};
</script>
