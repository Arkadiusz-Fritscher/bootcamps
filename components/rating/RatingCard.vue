<script>
import BaseStars from '@/components/base/BaseStars.vue';
export default {
  components: {
    BaseStars,
  },

  props: {
    rating: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div>
    <div>{{ rating.user.username }}</div>
    <base-stars :stars="rating.rating" />
    <div>{{ rating.review }}</div>
  </div>
</template>
