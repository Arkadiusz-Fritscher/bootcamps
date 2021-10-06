<template>
  <li>
    <review-card-user :user="user" />
    <div class="mt-4 max-w-lg">
      <p class="text-xl font-medium pb-1 leading-snug">{{ title }}</p>
      <p class="text-gray-600">{{ review }}</p>
    </div>
  </li>
</template>

<script>
import ReviewCardUser from './reviewCard/ReviewCardUser.vue';
export default {
  components: { ReviewCardUser },
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    bootcamp: {
      type: Object,
      required: true,
    },
    profession: {
      type: Object,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {};
  },

  computed: {},
};
</script>
