<template>
  <div class="mt-2 mb-4 text-3xl text-purple-900">
    Games on the {{ day_events.date }}
  </div>
  <div v-for="event in day_events.events" :key="event.id">
    {{ event.team_1 }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, useStore } from "vuex";
// import { Component } from 'vue-class-component';

export default defineComponent ({
  name: "DayEvents",
  computed: {
    ...mapState(["day_events", "loading", "getDate"]),
  },
  mounted() {
    const store = useStore();
    store.dispatch("getCalendar").then(() => {
      store.getters.getDate(Number(this.$route.params.date_id));
    });
  },
});
</script>
