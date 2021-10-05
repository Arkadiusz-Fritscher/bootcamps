import gql from 'graphql-tag';

export default {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getBootcamps');
  },

  async getBootcamps({ commit }) {
    const apollo = this.app.apolloProvider.defaultClient;
    const query = gql`
      {
        bootcamps {
          id
          name
          slug
          subtitle
          website
          ratings {
            id
            createdAt
            rating
            review
            bootcamp {
              id
              slug
            }
          }
          reviews {
            id
            createdAt
            title
            review
            bootcamp {
              id
              name
              slug
            }
            profession {
              id
              title
            }
            users {
              id
              username
              job
              company
            }
          }
          logo {
            url
            alternativeText
            name
            caption
            ext
          }
          addresses {
            id
            name
            street
            number
            zipCode
            city
          }
          professions {
            id
            title
            description
          }
          languages {
            id
            title
          }
          dates {
            id
            start
            end
            language {
              id
              title
            }
            address {
              id
              name
              street
              number
              zipCode
              city
            }
          }
        }
      }
    `;
    // Query end

    try {
      const request = await apollo.query({ query });
      const bootcamps = await request.data.bootcamps;
      commit('setBootcamps', bootcamps);
    } catch (err) {
      console.error(err);
    }
  },

  setCookie(_, data) {
    this.app.$strapi.setToken(data);
  },

  async login({ commit, dispatch }, { email, pw }) {
    try {
      const response = await this.$strapi.login({
        identifier: email,
        password: pw,
      });
      const { jwt, user } = response;
      commit('setUser', user);
      dispatch('setCookie', jwt);
      this.app.router.push('/');
    } catch (err) {
      console.log(err);
    }
  },
};
