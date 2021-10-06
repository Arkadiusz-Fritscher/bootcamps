<template>
  <div>
    <div class="h-12 w-12 rounded-full overflow-hidden bg-red-300">
      <div
        class="avatar w-full h-full"
        :style="{ backgroundImage: 'url(' + avatar + ')' }"
      ></div>
    </div>
  </div>
</template>

<script>
import { gql } from 'nuxt-graphql-request';
export default {
  props: {
    userId: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      avatar: '',
    };
  },

  beforeMount() {
    if (this.url) {
      this.avatar = this.url;
    } else if (this.userId) {
      this.getAvatar(this.userId);
    }
  },

  methods: {
    async getAvatar(userId) {
      const query = gql`
        query Users($id: ID!) {
          user(id: $id) {
            image {
              url
            }
          }
        }
      `;

      try {
        const variables = { id: userId };
        const { user } = await this.$graphql.default.request(query, variables);
        if (user.image !== null) {
          this.$set(this, 'avatar', user.image.url);
          return user.image.url;
        }
        return '';
      } catch (err) {
        console.error('Fail to fetch avatar. ID required' || err.message);
        this.avatar = '';
        return '';
      }
    },
  },
};
</script>

<style scoped>
.avatar {
  background-position: center center;
  background-size: cover;
}
</style>
