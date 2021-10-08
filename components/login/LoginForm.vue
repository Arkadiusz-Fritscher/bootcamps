<template>
  <div class="mx-auto max-w-md">
    <h1>Login</h1>

    <div class="pt-6">
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
        <div class="flex justify-between pt-4">
          <button class="text-gray-600" @click="logout">Logout</button>
          <button type="submit">Login</button>
        </div>
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

<style scoped>
label {
  display: block;
}
input {
  border: 1px solid black;
  width: 100%;
}
</style>
