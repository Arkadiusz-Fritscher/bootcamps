<template>
  <div>
    <h1>Filter</h1>
    <div>
      <ul>
        <li class="title">Standorte</li>
        <li v-for="location in locations" :key="location" class="items">
          {{ location }}
        </li>
      </ul>
    </div>
    {{ allLanguages }}
    {{ locations }}
    {{ professions }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter: {
        locations: [],
        userAddress: '',
        languages: '',
        professions: [],
      },
    };
  },

  computed: {
    locations() {
      return this.getBootcampValues('addresses', 'city');
    },

    allLanguages() {
      return this.getBootcampValues('languages', 'title');
    },

    professions() {
      return this.getBootcampValues('professions', 'title');
    },
  },

  methods: {
    getBootcampValues(key, val) {
      const bootcamps = this.$store.getters.bootcamps;
      const result = [];
      bootcamps.forEach((first) => {
        first[key].forEach((sec) => {
          if (!result.includes(sec[val])) {
            result.push(sec[val]);
          }
        });
      });
      return result;
    },

    filterStack() {
      const activeFilter = {};
      for (const i in this.filter) {
        if (this.filter[i].length > 0) {
          activeFilter[i] = this.filter[i];
        }
      }
      this.$emit('filterChange', activeFilter);
    },
  },
};
</script>
