import initialState from './state';

export default {
  RESET_STORE(state) {
    Object.assign(state, initialState());
  },

  setBootcamps(state, bootcamps) {
    state.bootcamps = bootcamps;
  },

  setReviews(state, reviews) {
    state.reviews = reviews;
  },

  setRatings(state, ratings) {
    state.ratings = ratings;
  },

  setUser(state, user) {
    state.user = user;
  },
};
