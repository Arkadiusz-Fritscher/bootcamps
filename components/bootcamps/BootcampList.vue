<template>
  <div>
    <div class="flex justify-between">
      <h2 class="text-xl font-bold text-gray-900">Bootcamps</h2>
      <div v-if="bootcamps" class="text-xs font-medium text-gray-600">
        <span>Anzahl:</span><span>{{ bootcamps.length }}</span>
      </div>
    </div>
    <div id="bootcamps" class="my-6">
      <ul id="bootcamp_list" class="flex flex-wrap gap-6">
        <bootcamp-card
          v-for="{
            id,
            name,
            slug,
            subtitle,
            website,
            reviews,
            logo,
            addresses,
            professions,
            languages,
            dates,
            ratings,
          } in bootcamps"
          :id="id"
          :key="id"
          :name="name"
          :slug="slug"
          :subtitle="subtitle"
          :website="website"
          :reviews="reviews"
          :logo="logo"
          :addresses="addresses"
          :professions="professions"
          :languages="languages"
          :dates="dates"
          :ratings="ratings"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import BootcampCard from './BootcampCard.vue';
export default {
  components: {
    BootcampCard,
  },
  props: {
    activeFilter: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      bootcamps: [],
    };
  },

  async fetch() {
    const bootcamps = this.$store.getters.getBootcamps;
    if (bootcamps) {
      this.bootcamps = bootcamps;
    } else {
      this.bootcamps = await this.$store.dispatch('fetchBootcamps');
    }
  },
  fetchOnServer: true,

  // computed: {
  //   bootcamps() {
  //     const allBootcamps = this.$store.getters.bootcamps;
  //     return allBootcamps;
  //     // const filterCount = Object.keys(this.activeFilter).length;
  //     // if (filterCount === 0) return allBootcamps;
  //     // const filteredBootcamps = this.bootcampFilter(allBootcamps);
  //     // return filteredBootcamps;
  //   },
  // },

  methods: {
    bootcampFilter(bootcamps) {
      const filtered = bootcamps.filter((bootcamp) => {
        let strings = true;
        let objects = true;
        for (const i in this.activeFilter) {
          if (typeof this.activeFilter[i] === 'string') {
            if (!bootcamp[i].includes(this.activeFilter[i])) {
              strings = false;
            }
          }

          if (typeof this.activeFilter[i] === 'object') {
            for (const val of this.activeFilter[i]) {
              if (bootcamp[i].includes(val)) {
                objects = true;
                break;
              } else {
                objects = false;
              }
            }
          }
        }
        return strings === true && objects === true;
      });
      return filtered;
    },
  },
};
</script>
