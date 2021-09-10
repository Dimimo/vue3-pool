<template>
  <div id="calendar">
    <div class="grid m-2 mb-10 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
      <div v-for="date in dates" :key="date.id" class="mb-8">
        <calendar-title :date="date"></calendar-title>
        <div class="mx-1 border-2 border-blue-900">
          <div class="grid grid-cols-2 m-1 mb-2">
            <div class="pb-2 mr-1 text-2xl text-red-600 bg-gray-100">Home</div>
            <div class="pb-2 ml-1 text-2xl text-blue-600 bg-gray-100">
              Visitors
            </div>
          </div>
          <div
            v-for="event in date.events"
            :key="event.id"
            class="grid grid-cols-2"
          >
            <div
              class="px-1 py-3 text-left border-b border-r-2 border-gray-300 border-solid "
            >
              <div class="flex h7">
                <div
                  class="flex-grow truncate"
                  :class="event.score1 > 7 ? isBold : ''"
                >
                  <router-link :to="`/team/` + event.team_1.id">
                    {{ event.team_1.name }}
                  </router-link>
                </div>
                <score :score="event.score1" :score2="event.score2"></score>
              </div>
            </div>
            <div
              class="px-1 py-3 text-right border-b border-gray-300 border-solid"
            >
              <div class="flex h7">
                <score :score="event.score2" :score2="event.score1"></score>
                <div
                  class="flex-grow truncate"
                  :class="event.score2 > 7 ? isBold : ''"
                >
                  <router-link :to="`/team/` + event.team_2.id">
                    {{ event.team_2.name }}
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarTitle from "@/snippets/CalendarTitle";
import Score from "@/snippets/Score";
import { useStore, mapState } from "vuex";

export default {
  name: "calendar-overview",
  // eslint-disable-next-line
  data() {
    return {
      isBold: "font-semibold",
    };
  },
  components: {
    "calendar-title": CalendarTitle,
    score: Score,
  },
  computed: mapState({
    dates: (state) => state.dates,
    loading: (state) => state.loading,
  }),
  // eslint-disable-next-line
  mounted() {
    const store = useStore();
    store.dispatch("getCalendar");
  },
};
</script>

<style>
</style>