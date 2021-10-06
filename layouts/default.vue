<template>
  <div id="page" class="">
    <TheNavbar />
    <Nuxt />
  </div>
</template>

<script>
import TheNavbar from '@/components/nav/TheNavbar.vue';
export default {
  components: { TheNavbar },
  data() {
    return {};
  },
};
</script>

<style>
#page {
  width: 96%;
  max-width: 1440px;
  margin: 0 auto;
}
.avatar {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

h1 {
  @apply text-gray-900 font-bold text-2xl;
}
</style>
