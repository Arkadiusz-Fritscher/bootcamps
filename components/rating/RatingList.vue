<script>
import RatingCard from '~/components/rating/RatingCard.vue';
export default {
  components: {
    RatingCard,
  },
  data() {
    return {
      ratings: [],
    };
  },
  async fetch() {
    const ratings = this.$store.getters.getRatings;
    if (ratings.length === 0) {
      this.ratings = await this.$store.dispatch('fetchRatings');
    } else {
      this.ratings = ratings;
    }
  },
  computed: {
    currentRatings() {
      const slug = this.$route.params.slug;
      if (this.ratings.length > 0) {
        return this.ratings.filter((rating) => rating.bootcamp.slug === slug);
      }
      return [];
    },
  },
};
</script>

<template>
  <div>
    <h1>List of Ratings</h1>
    <rating-card
      v-for="rating in currentRatings"
      :key="rating.id"
      :rating="rating"
    />
  </div>
</template>
