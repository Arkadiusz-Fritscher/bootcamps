<template>
  <div class="flex gap-x-6">
    <div>
      <h1>Reviews</h1>
      <review-list />
    </div>
    <div>
      <h1>Ratings</h1>
      <rating-list />
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
};
</script>
