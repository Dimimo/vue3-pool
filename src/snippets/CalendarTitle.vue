<template>
  <div
    class="mx-1 overflow-hidden"
    :class="date.regular ? isSpecial : isRegular"
  >
    <div class="p-4 text-center">
      <h2 class="h-2 mb-6 text-3xl font-bold text-white">
        {{ date.date }}
      </h2>
      <div v-if="date.title" class="px-6 mt-10 text-xl text-yellow-300">
        {{ date.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "calendar-title",
  // eslint-disable-next-line
  data() {
    return {
      isRegular: "bg-blue-900 rounded-t-3xl",
      isSpecial: "bg-green-600 rounded-t-3xl",
    };
  },
  props: ["date"],
};
</script>

<style>
</style>