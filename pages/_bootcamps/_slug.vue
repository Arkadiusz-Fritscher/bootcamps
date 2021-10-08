<template>
  <div class="flex gap-x-6">
    <div>
      <h1>Reviews</h1>
      <review-list :reviews="bootcampReviews" />
    </div>
    <div>
      <h1>Ratings</h1>
      <rating-list :ratings="bootcampsRatings" />
    </div>
  </div>
</template>

<script>
import ReviewList from '@/components/reviews/ReviewList';
import RatingList from '@/components/rating/RatingList.vue';
export default {
  components: {
    ReviewList,
    RatingList,
  },
  data() {
    return {};
  },

  computed: {
    slug() {
      return this.$route.params.slug;
    },
    reviews() {
      return this.$store.getters.getReviews;
    },

    ratings() {
      return this.$store.getters.getRatings;
    },

    bootcampReviews() {
      if (this.reviews.length > 0 && this.slug) {
        return this.reviews.filter(
          (review) => review.bootcamp.slug === this.slug
        );
      }
      return [];
    },

    bootcampsRatings() {
      if (this.ratings.length > 0 && this.slug) {
        return this.ratings.filter(
          (rating) => rating.bootcamp.slug === this.slug
        );
      }
      return [];
    },
  },
};
</script>
