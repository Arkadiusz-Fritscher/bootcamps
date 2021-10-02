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
          slug
          title
          subtitle
          schedule {
            price
            remote
            start
            end
            address {
              city
              name
              number
              street
              zipCode
              bootcamp {
                id
                title
              }
            }
            language
            profession {
              title
              description
              id
            }
            id
          }
          address {
            city
            id
            zipCode
            street
            number
            name
          }
          logo {
            url
            fileName
            id
          }
          id
        }
      }
    `;
    // Query end

    const request = await apollo.query({ query });
    const bootcamps = await request.data.bootcamps;
    commit('storeBootcamps', bootcamps);
    return request.data.bootcamps;
  },
};
