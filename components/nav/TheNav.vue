<template>
  <nav>
    <div class="md:hidden">
      <span>menu</span>
    </div>
    <ul class="hidden md:flex">
      <li>
        <nuxt-link
          v-for="link in links"
          :key="link.title"
          class="py-1 px-3"
          :to="link.name ? { name: link.name } : link.url"
          >{{ link.title }}</nuxt-link
        >
      </li>
      <client-only>
        <li v-if="!user">
          <nuxt-link :to="{ name: 'login' }">Login</nuxt-link>
        </li>
        <li v-else>
          <div class="cursor-pointer" @click="logout">Logout</div>
        </li>
      </client-only>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: 'Home',
          url: '/',
          name: '',
        },
        {
          title: 'Bootcamps',
          url: '',
          name: 'bootcamps',
        },
      ],
    };
  },

  computed: {
    user() {
      const user = this.$strapi.user;
      if (user) {
        return user;
      } else {
        return null;
      }
    },
  },

  methods: {
    logout() {
      this.$strapi.logout();
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped></style>
