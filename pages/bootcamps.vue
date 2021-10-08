<template>
  <div>
    <!-- <BootcampFilter @filterChange="setActiveFilter" /> -->
    <BootcampList :active-filter="activeFilter" :bootcamps="bootcamps" />
  </div>
</template>

<script>
import BootcampList from '~/components/bootcamps/BootcampList.vue';
// import BootcampFilter from '~/components/bootcamps/BootcampFilter.vue';

export default {
  components: { BootcampList },
  data() {
    return {
      activeFilter: {},
    };
  },

  computed: {
    bootcamps() {
      return this.$store.getters.getBootcamps;
    },
  },
  methods: {
    setActiveFilter(filters) {
      this.activeFilter = filters;
    },
  },
};
</script>
