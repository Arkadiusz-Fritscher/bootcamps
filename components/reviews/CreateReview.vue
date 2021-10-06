<template>
  <div class="pt-16">
    <div v-if="!user">Einloggen zum Erstellen eines Reviews</div>
    <div v-else>
      <form class="flex flex-col" @submit.prevent="submitForm">
        <select id="profession" v-model="selectedProfession" name="profession">
          <option disabled value="">Wähle ein Kurs aus.</option>
          <option
            v-for="profession in currentBootcamp.professions"
            :key="profession.id"
            :value="profession.id"
          >
            {{ profession.title }}
          </option>
        </select>
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
      selectedProfession: '',
    };
  },
  computed: {
    user() {
      return this.$strapi.user;
    },

    bootcamps() {
      return this.$store.getters.bootcamps;
    },

    currentBootcamp() {
      const slug = this.$route.params.slug;
      const { id, professions } = this.bootcamps.find(
        (bootcamp) => bootcamp.slug === slug
      );
      return { id, professions };
    },
  },
  methods: {
    async submitForm() {
      if (
        this.title &&
        this.review &&
        this.selectedProfession &&
        this.user &&
        this.currentBootcamp.id
      ) {
        await this.$strapi.create('reviews', {
          title: this.title,
          review: this.review,
          users: this.user.id,
          profession: this.selectedProfession,
          bootcamp: this.currentBootcamp.id,
        });

        this.title = '';
        this.review = '';
        this.selectedProfession = '';
      } else {
        alert('Fomular war nicht ganz ausgefüllt!');
      }
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
