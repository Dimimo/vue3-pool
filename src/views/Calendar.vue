<template>
  <div id="calendar"></div>
  <div v-for="date in dates" :key="date.id">
      {{ date.id }} - {{ date.date }}<br>
  </div>
</template>

<script>
import { useStore, mapState } from "vuex";

export default {
  computed: mapState({
    dates: (state) => state.dates,
    loading: (state) => state.loading,
  }),
  mounted() {
    const store = useStore();

    store.dispatch("getCalendar").then(() => {
      console.log(store.state.dates);
    });
  },
};
</script>

<style>
</style>