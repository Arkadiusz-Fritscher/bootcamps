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
};
</script>

<style scoped>
#page {
  width: 96%;
  max-width: 1440px;
  margin: 0 auto;
}
</style>
