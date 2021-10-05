<template>
  <div>
    <h2>Login</h2>
    <h2 @click="logout">Logout</h2>
    <div>
      <form @submit.prevent="login">
        <label for="email">Email:</label>
        <input id="email" v-model.trim="email" type="text" name="email" />
        <label for="password">Password:</label>
        <input
          id="password"
          v-model.trim="password"
          type="text"
          name="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {
    login() {
      if (this.email && this.password) {
        this.$store.dispatch('login', { email: this.email, pw: this.password });
      }
    },

    logout() {
      this.$strapi.logout();
      this.$store.commit('setUser', {});
      this.$router.push('/');
    },
  },
};
</script>
