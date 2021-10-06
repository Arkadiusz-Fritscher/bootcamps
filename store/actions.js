import { gql } from 'nuxt-graphql-request';

export default {
  async nuxtServerInit({ dispatch }) {
    await dispatch('fetchBootcamps');
    await dispatch('fetchReviews');
  },

  async fetchBootcamps({ commit }) {
    const query = gql`
      query Bootcamps {
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

    const res = await this.$graphql.default.request(query);
    commit('setBootcamps', res.bootcamps);
    console.log(res);
    return res;
  },

  async fetchReviews({ commit }) {
    const query = gql`
      query Reviews {
        reviews {
          id
          title
          review
          updatedAt
          bootcamp {
            name
            id
            slug
          }
          profession {
            id
            title
            description
          }
          users {
            id
            username
            firstname
            lastname
            job
            company
            image {
              id
              url
            }
          }
        }
      }
    `;

    try {
      const res = await this.$graphql.default.request(query);
      commit('setReviews', res.reviews);
      return res;
    } catch (err) {
      console.error('Cant fetch Reviews' || err.message);
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
      const { user } = response;
      commit('setUser', user);
      this.app.router.push({ name: 'settings' });
    } catch (err) {
      console.log(err);
    }
  },
};
