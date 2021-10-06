<script>
import UserContent from '@/components/user/UserContent.vue';
export default {
  components: {
    UserContent,
  },
  middleware: ['auth'],
  mounted() {
    console.log(this.$strapi.user);
  },
};
</script>

<template>
  <div>
    <h1 class="mb-6">Usersettings</h1>
    <user-content />
    <dir>Strapi:</dir>
  </div>
</template>
