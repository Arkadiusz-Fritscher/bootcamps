<template>
  <div class="flex justify-between py-6">
    <div>Logo</div>
    <div class="flex gap-x-1 justify-end items-center">
      <TheNav />
      <template v-if="user">
        <TheUserbar :user="user" />
      </template>
    </div>
  </div>
</template>

<script>
import TheNav from './TheNav.vue';
import TheUserbar from './TheUserbar.vue';
export default {
  components: { TheNav, TheUserbar },
  data() {
    return {
      user: null,
    };
  },

  mounted() {
    this.$strapi.user ? (this.user = this.$strapi.user) : (this.user = null);
    this.$strapi.hook('userUpdated', (user) => {
      this.user = user;
    });
  },
};
</script>
