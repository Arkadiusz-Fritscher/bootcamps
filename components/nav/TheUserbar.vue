<template>
  <div v-if="user">
    <div class="w-12 h-12 bg-gray-400 overflow-hidden rounded-full">
      <template v-if="user.image">
        <div
          class="avatar w-full h-full cursor-pointer"
          :style="{ backgroundImage: `url('${user.image.url}` }"
          @click="$router.push({ name: 'settings' })"
        ></div>
      </template>
      <template v-else>
        <div class="w-full h-full flex justify-center items-center">
          <span class="block font-medium">{{ placeholderText }}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },

  computed: {
    user() {
      if (this.$strapi.user) {
        return this.$strapi.user;
      } else {
        return null;
      }
    },
    placeholderText() {
      const { firstname, lastname, username } = this.user;

      if (firstname && lastname) {
        return `${firstname[0].toUpperCase()}.${lastname[0].toUpperCase()}`;
      } else if (username) {
        return `${username[0].toUpperCase()}`;
      }
      return '';
    },
  },
};
</script>
