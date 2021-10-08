<template>
  <div class="flex justify-between py-6">
    <div>Logo</div>
    <div class="flex gap-x-1 justify-end items-center">
      <TheNav />
      <client-only>
        <TheUserbar />
      </client-only>
    </div>
  </div>
</template>

<script>
import TheNav from './TheNav.vue';
import TheUserbar from './TheUserbar.vue';
export default {
  components: { TheNav, TheUserbar },
  data() {
    return {};
  },
};
</script>
