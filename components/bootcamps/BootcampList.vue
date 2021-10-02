<template>
  <div>
    <h1>
      {{ activeFilter }}
    </h1>
    <ul>
      <bootcamp-card
        v-for="{
          id,
          slug,
          title,
          subtitle,
          schedule,
          address,
          logo,
        } in bootcamps"
        :key="id"
        :id="id"
        :slug="slug"
        :title="title"
        :subtitle="subtitle"
        :schedule="schedule"
        :address="address"
        :logo="logo"
      />
    </ul>
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
    return {};
  },

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

  computed: {
    bootcamps() {
      const allBootcamps = this.$store.getters.bootcamps;
      const filterCount = Object.keys(this.activeFilter).length;
      if (filterCount === 0) return allBootcamps;
      const filteredBootcamps = this.bootcampFilter(allBootcamps);
      return filteredBootcamps;
    },
  },
};
</script>
