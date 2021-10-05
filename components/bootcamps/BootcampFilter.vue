<template>
  <v-card max-width="475" class="mx-auto">
    <v-list two-line subheader>
      <v-subheader>Filter</v-subheader>
      <v-list-item>
        <v-list-item-content>
          <v-combobox
            v-model="filter.locations"
            :items="locations"
            label="Locations"
            clearable
            outlined
            multiple
            small-chips
            @change="filterStack"
          ></v-combobox>
          <v-text-field
            label="Deine Adresse"
            hint="Das der hint"
            v-model="filter.userAddress"
            placeholder="Placeholder"
            @change="filterStack"
            outlined
          ></v-text-field>
          <v-combobox
            v-model="filter.professions"
            :items="professions"
            label="Professions"
            clearable
            outlined
            multiple
            small-chips
            @change="filterStack"
          ></v-combobox>
          <v-radio-group
            v-model="filter.languages"
            column
            @change="filterStack"
          >
            <v-radio
              v-for="language in allLanguages"
              :key="language"
              :label="language"
              color="primary"
              :value="language"
            ></v-radio>
          </v-radio-group>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
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

    findValueInObjArray(arr, value) {
      let found = false;
      for (const obj of arr) {
        if (Object.values(obj).includes(value)) {
          found = true;
          break;
        }
      }
      return found;
    },
  },

  computed: {
    locations() {
      return this.getBootcampValues('address', 'city');
    },

    allLanguages() {
      return this.getBootcampValues('schedule', 'language');
    },

    professions() {
      const professions = this.getBootcampValues('schedule', 'profession');
      const result = [];
      for (const { title } of professions) {
        if (!result.includes(title)) {
          result.push(title);
        }
      }
      return result;
    },
  },
};
</script>
