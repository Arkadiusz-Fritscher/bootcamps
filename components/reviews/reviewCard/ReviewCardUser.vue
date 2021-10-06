<template>
  <div class="flex gap-x-2">
    <div
      class="avatar w-12 h-12 overflow-hidden rounded-full"
      :style="{ backgroundImage: `url('${user.image.url}')` }"
    ></div>
    <ul>
      <li class="flex font-medium text-gray-900">
        <p class="firstname">{{ user.username }}</p>
      </li>
      <li class="text-sm text-gray-600 flex">
        <p v-if="user.job">{{ user.job }}</p>
        <p v-if="user.company" class="ml-1 underline">@{{ user.company }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
span {
  display: block;
}
</style>
