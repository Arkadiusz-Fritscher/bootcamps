<template>
  <div>
    <div class="mb-2">
      <BaseAvatar :user-id="userData.id" />
    </div>
    <div>
      {{ review.data }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    review: {
      type: Object,
      required: true,
    },
  },

  computed: {
    userData() {
      const id = this.review.user;
      const users = this.$store.getters.getUsers;
      return users.find((user) => user.id === id);
    },
  },
};
</script>
