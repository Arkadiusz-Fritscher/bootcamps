<template>
  <li class="bootcamp__card" @click="viewDetails">
    <ul>
      <li class="flex gap-x-2 mb-2">
        <div
          class="
            bootcamp__logo
            w-12
            h-12
            rounded-lg
            flex
            justify-center
            items-center
            overflow-hidden
          "
        >
          <img
            v-if="logo.url"
            :src="logo.url"
            :alt="logo.alternativeText"
            async
          />
        </div>
        <div>
          <div class="text-lg font-medium text-gray-900">{{ name }}</div>
          <div class="text-sm text-gray-600">{{ subtitle }}</div>
          <div class="text-xs">4 Starts</div>
        </div>
      </li>
      <li class="flex flex-wrap gap-2">
        <span
          v-for="profession in professions"
          :key="profession.id"
          class="profession"
          >{{ profession.title }}</span
        >
      </li>
      <li class="flex flex-wrap my-2 gap-2">
        <ul class="data_list">
          <li class="data_list_title">Sprachen</li>
          <li
            v-for="language in languages"
            :key="language.id"
            class="data_list_items"
          >
            {{ language.title }}
          </li>
        </ul>
        <ul class="data_list">
          <li class="data_list_title">
            Reviews: <span>{{ reviews.length }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    reviews: {
      type: Array,
      required: true,
    },
    ratings: {
      type: Array,
      required: true,
    },
    logo: {
      type: Object,
      required: true,
    },
    addresses: {
      type: Array,
      required: true,
    },
    professions: {
      type: Array,
      required: true,
    },
    languages: {
      type: Array,
      required: true,
    },
    dates: {
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
      const formattedDate = new Intl.DateTimeFormat('de-DE', {
        weekday: 'long',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(newDate);

      const [day, date, time] = formattedDate.split(', ');
      return { day, date, time };
    },

    viewDetails() {
      this.$router.push({ path: `${this.$route.name}/${this.slug}` });
    },
  },
};
</script>

<style>
.bootcamp__card:hover {
  cursor: pointer;
}
.bootcamp__logo {
  object-fit: cover;
  object-position: center center;
  object-fit: cover;
  object-position: center center;
}

.bootcamp__logo img {
  display: block;
  width: auto;
  height: 100%;
}

.profession {
  @apply text-xs leading-none py-1 px-2 rounded bg-gray-900 text-gray-50;
}

.data_list_title {
  @apply text-xs font-medium text-gray-600 mb-0.5;
}

.data_list_items {
  @apply text-base text-gray-900 leading-tight;
}
</style>
