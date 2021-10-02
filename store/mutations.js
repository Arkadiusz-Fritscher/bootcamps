import initialState from './state';

export default {
  RESET_STORE(state) {
    Object.assign(state, initialState());
  },

  storeBootcamps(state, bootcamps) {
    const updatedBootcamps = bootcamps;
    for (const i in updatedBootcamps) {
      const languages = [];
      const locations = [];
      const professions = [];
      let remote = false;

      bootcamps[i].schedule.forEach((obj) => {
        // Get Languages
        const language = obj.language;
        if (!languages.includes(language)) {
          languages.push(language);
        }

        // Get Locations
        const city = obj.address.city;
        if (!locations.includes(city)) {
          locations.push(city);
        }

        // Get Professions
        const profession = obj.profession.title;
        if (!professions.includes(profession)) {
          professions.push(profession);
        }

        // Get Remote Option
        const hasRemote = obj.remote;
        if (hasRemote) remote = true;
      });

      // Update current Bootcamp
      updatedBootcamps[i].languages = languages;
      updatedBootcamps[i].locations = locations;
      updatedBootcamps[i].professions = professions;
      updatedBootcamps[i].remote = remote;
    }

    // Store updated Bootcamps
    state.bootcamps = updatedBootcamps;
  },
};
