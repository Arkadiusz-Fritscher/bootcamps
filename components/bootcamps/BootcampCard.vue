<template>
  <li>
    <div class="bootcamp__card">
      <img v-if="logo" :src="logo.url" :alt="logo.alt" />
      <h3>{{ title }}</h3>
      <span v-if="subtitle">{{ subtitle }}</span>
    </div>
    <ul>
      <li>Locations</li>
      <li v-for="location in address" :key="location.id">
        {{ location.city }}
      </li>
    </ul>
    <ul>
      <li>Camps:</li>
      <li v-for="course in schedule" :key="course.id">
        {{ formatDate(course.start).time }}
        {{ formatDate(course.start).day }}
        {{ formatDate(course.start).date }}
        {{ formatDate(course.end).time }}
        {{ formatDate(course.end).day }}
        {{ formatDate(course.end).date }}
        {{ course.remote }}
        {{ course.price }}
        {{ course.id }}
        {{ course.language }}
        {{ course.address.city }}
        {{ course.profession.title }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: null,
    },
    id: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    logo: {
      default: null,
    },
    address: {
      type: Array,
      required: true,
    },
    schedule: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    formatDate(value) {
      const newDate = new Date(value);
      const formatedDate = new Intl.DateTimeFormat('de-DE', {
        weekday: 'long',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(newDate);

      const [day, date, time] = formatedDate.split(', ');
      return { day, date, time };
    },
  },
  computed: {},
};
</script>

<style lang="scss">
.bootcamp__card {
  background: $red;
  @include mq(md) {
    background: blue;
  }
}
</style>
