<script>
export default {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
    ratings: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <div class="flex flex-wrap gap-6">
    <ul class="space-y-2 flex-1 w-1/3">
      <li>Reviews:</li>
      <li v-for="review in reviews" :key="review.id">
        <div class="text-lg font-medium text-gray-900">
          {{ review.title }}
        </div>
        <div class="text-xs text-gray-400">
          {{ review.updatedAt }}
        </div>
      </li>
    </ul>
    <ul class="space-y-2 flex-1 w-1/3">
      <li>Ratings:</li>
      <li v-for="rating in ratings" :key="rating.id">
        <div class="text-lg font-medium text-gray-900">
          {{ rating.review }}
        </div>
        <div class="text-xs text-gray-400">
          {{ rating.updatedAt }}
        </div>
      </li>
    </ul>
  </div>
</template>
