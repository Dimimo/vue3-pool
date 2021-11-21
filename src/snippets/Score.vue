<template>
  <div
    v-if="score1 === 0 && score2 === 0"
    class="flex items-center justify-center w-6 h-6 text-gray-400 rounded-full "
    title="Not in"
  >
    <font-awesome-icon :icon="['fas', 'question-circle']" size="lg" />
  </div>
  <div
    v-else-if="score1 !== null"
  >
    <va-button :color="winCl" size="medium">{{ score1 }}</va-button>
  </div>
  <div
    v-else
    class="flex items-center justify-center w-6 h-6 bg-green-100 rounded-full"
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
      winCl: "#358945"
    };
  },
  props: ["score1", "score2"],
};
</script>

<style>
</style>