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
  },
};
</script>

<template>
  <div>
    <h1 class="mb-6">Usersettings</h1>
    <client-only>
      <user-content :user="user" />
    </client-only>
  </div>
</template>
