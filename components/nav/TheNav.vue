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
      <li>
        <nuxt-link :to="{ name: 'login' }">{{
          $strapi.user ? 'Logout' : 'Login'
        }}</nuxt-link>
      </li>
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
};
</script>

<style lang="scss" scoped></style>
