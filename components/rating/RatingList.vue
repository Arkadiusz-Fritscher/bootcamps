<script>
import RatingCard from '~/components/rating/RatingCard.vue';
export default {
  components: {
    RatingCard,
  },

  props: {
    ratings: {
      type: Array,
      required: true,
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
