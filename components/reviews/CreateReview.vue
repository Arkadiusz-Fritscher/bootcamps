<template>
  <div>
    <div v-if="!user">Einloggen zum Erstellen eines Reviews</div>
    <div v-else>
      <form class="flex flex-col" @submit.prevent="submitForm">
        <label for="title">Title</label>
        <input id="title" v-model="title" type="text" />
        <label for="review">Review</label>
        <textarea
          id="review"
          v-model="review"
          name="review"
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">Absenden</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      review: '',
    };
  },
  computed: {
    user() {
      return this.$strapi.user;
    },
  },
  methods: {
    async submitForm() {
      await this.$strapi.create('review', {
        title: this.title,
        review: this.review,
        user: this.user.username,
      });
    },
  },
};
</script>

<style scoped>
input,
textarea {
  border: 1px solid black;
}
</style>
