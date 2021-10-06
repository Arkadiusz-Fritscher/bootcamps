<script>
export default {
  middleware: ['auth'],
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$strapi.user;
    },
    reviews() {
      const reviews = this.$store.getters.getReviews || false;
      if (reviews && this.user) {
        const userReviews = reviews.filter(
          (review) => review.users.id === this.user.id
        );
        return userReviews;
      }
      return [];
    },
  },
};
</script>

<template>
  <div class="flex flex-wrap gap-6">
    <div class="w-1/3 flex-1">
      <div>Meine Reviews:</div>
      <ul class="flex flex-col gap-y-4">
        <li v-if="reviews.length === 0">Loading...</li>
        <li
          v-for="(review, index) in reviews"
          v-else
          :key="review.id"
          class="flex gap-x-2"
        >
          <div>{{ index + 1 }}</div>
          <div>
            <div>{{ review.title }}</div>
            <div class="text-xs text-gray-600">{{ review.updatedAt }}</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="w-1/3 flex-1">
      <div>Meine Bewertungen:</div>
      <ul class="flex flex-col gap-y-4">
        <li v-if="reviews.length === 0">Loading...</li>
        <li
          v-for="(review, index) in reviews"
          v-else
          :key="review.id"
          class="flex gap-x-2"
        >
          <div>{{ index + 1 }}</div>
          <div>
            <div>{{ review.title }}</div>
            <div class="text-xs text-gray-600">{{ review.updatedAt }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
