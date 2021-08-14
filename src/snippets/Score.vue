<template>
  <div
    v-if="score === 0 && score2 === 0"
    class="flex items-center justify-center flex-none w-6 h-6 text-blue-500 rounded-full "
    alt="Not in"
  >
    <font-awesome-icon :icon="['fas', 'question-circle']" size="lg" />
  </div>
  <div
    v-else-if="score !== null"
    class="flex items-center justify-center flex-none w-6 h-6 rounded-full"
    :class="score > 7 ? winColour : loseColour"
  >
    {{ score }}
  </div>
  <div
    v-else
    class="flex items-center justify-center flex-none w-6 h-6 rounded-full"
  >
    {{ score }}
  </div>
</template>

<script>
export default {
  name: "score-snippet",
  // eslint-disable-next-line
  data() {
    return {
      winColour: "bg-green-100",
      loseColour: "bg-red-100",
    };
  },
  props: ["score", "score2"],
};
</script>

<style>
</style>