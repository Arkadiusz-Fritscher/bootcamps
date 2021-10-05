<template>
  <nav>
    <div class="md:hidden">
      <span>menu</span>
    </div>
    <ul class="hidden md:block">
      <li>
        <nuxt-link
          v-for="link in links"
          :key="link.title"
          class="py-1 px-3"
          :to="link.name ? { name: link.name } : link.url"
          >{{ link.title }}</nuxt-link
        >
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
        {
          title: 'Login',
          url: '',
          name: 'login',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
