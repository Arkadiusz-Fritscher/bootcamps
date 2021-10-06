<template>
  <div>
    <BootcampFilter @filterChange="setActiveFilter" />
    <BootcampList :active-filter="activeFilter" />
  </div>
</template>

<script>
import BootcampList from '~/components/bootcamps/BootcampList.vue';
import BootcampFilter from '~/components/bootcamps/BootcampFilter.vue';

export default {
  components: { BootcampList, BootcampFilter },
  data() {
    return {
      activeFilter: {},
    };
  },
  methods: {
    setActiveFilter(filters) {
      this.activeFilter = filters;
    },
  },
};
</script>
