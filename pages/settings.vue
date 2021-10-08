<script>
import UserContent from '@/components/user/UserContent.vue';
export default {
  components: {
    UserContent,
  },
  middleware: ['auth'],

  computed: {
    user() {
      return this.$strapi.user;
    },

    reviews() {
      return this.$store.getters.getReviews;
    },

    ratings() {
      return this.$store.getters.getRatings;
    },

    userReviews() {
      if (this.user && this.reviews.length > 0) {
        return this.reviews.filter(
          (review) => review.users.id === this.user.id
        );
      }
      return [];
    },

    userRatings() {
      if (this.user && this.ratings.length > 0) {
        return this.ratings.filter((rating) => rating.user.id === this.user.id);
      }
      return [];
    },
  },
};
</script>

<template>
  <div>
    <h1 class="mb-6">Usersettings</h1>
    <user-content :reviews="userReviews" :ratings="userRatings" />
  </div>
</template>
