import initialState from './state';

export default {
  RESET_STORE(state) {
    Object.assign(state, initialState());
  },

  setBootcamps(state, bootcamps) {
    state.bootcamps = bootcamps;
  },

  setUser(state, user) {
    state.user = user;
  },

  setStrapiToken(state, token) {
    state.strapiToken = token;
  },
};
