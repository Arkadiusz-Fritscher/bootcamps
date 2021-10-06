<template>
  <div>
    <div>{{ user }}</div>
    <button
      @click="
        () => {
          skipQuery = false;
        }
      "
    >
      change
    </button>
  </div>
</template>

<script>
import gql from 'graphql-tag';
export default {
  props: {
    userID: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      user: '',
      skipQuery: true,
    };
  },

  watch: {
    userID(val) {
      console.log(val);
    },
  },

  apollo: {
    user: {
      query: gql`
        query User($id: ID!) {
          user(id: $id) {
            username
            image {
              url
            }
          }
        }
      `,
      variables() {
        return {
          id: this.userID,
        };
      },
      skip() {
        return this.skipQuery;
      },

      // update: (data) => data.user.image.url,
    },
  },
};
</script>
