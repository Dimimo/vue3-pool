<template>
  <div
    v-if="score1 === 0 && score2 === 0"
    class="flex items-center justify-center flex-none w-6 h-6 text-gray-400 rounded-full "
    title="Not in"
  >
    <font-awesome-icon :icon="['fas', 'question-circle']" size="lg" />
  </div>
  <div
    v-else-if="score1 !== null"
    class="flex items-center justify-center flex-none w-6 h-6 rounded-full"
    :class="score1 > 7 ? winColour : loseColour"
  >
    {{ score1 }}
  </div>
  <div
    v-else
    class="flex items-center justify-center flex-none w-6 h-6 rounded-full"
  >
    {{ score1 }}
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
  props: ["score1", "score2"],
};
</script>

<style>
</style>