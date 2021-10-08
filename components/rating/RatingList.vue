<script>
import RatingCard from '~/components/rating/RatingCard.vue';
export default {
  components: {
    RatingCard,
  },
  computed: {
    ratings() {
      const ratings = this.$store.getters.getRatings;
      const slug = this.$route.params.slug;
      return ratings.filter((rating) => rating.bootcamp.slug === slug);
    },
  },
};
</script>

<template>
  <div>
    <h1>List of Ratings</h1>
    <rating-card v-for="rating in ratings" :key="rating.id" :rating="rating" />
  </div>
</template>
