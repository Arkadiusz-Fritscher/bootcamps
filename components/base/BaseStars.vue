<script>
export default {
  props: {
    stars: {
      type: [String, Number],
      required: true,
    },
  },

  data() {
    return {
      starsCount: 5,
    };
  },

  mounted() {
    const stars = this.$refs.stars.getElementsByClassName('star');
    for (let i = 0; i < this.stars; i++) {
      stars[i].classList.add('active');
    }
  },
};
</script>

<template>
  <div>
    <ul ref="stars" class="rating flex space-x-1 items-center">
      <li v-for="(star, i) in starsCount" :key="i" class="star"></li>
      <li class="text-sm text-gray-600">{{ stars }}/{{ starsCount }}</li>
    </ul>
  </div>
</template>

<style scoped>
.star {
  @apply bg-gray-300 w-3 h-3 rounded-full;
}

.active {
  @apply bg-blue-400;
}
</style>
