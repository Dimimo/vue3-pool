<template>
  <div id="calendar">
    <div v-if="loading">... loading ...</div>
    <div v-else>
      <div class="grid m-2 mb-10 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
        <div v-for="date in dates" :key="date.id" class="mb-8">
          <calendar-title :date="date"></calendar-title>
          <div class="mx-1 border-2 border-blue-900">
            <div class="grid grid-cols-2 m-1 mb-2">
              <div class="pb-2 mr-1 text-2xl text-red-600 bg-gray-100">
                Home
              </div>
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
                  <score :score1="event.score1" :score2="event.score2"></score>
                </div>
              </div>
              <div
                class="px-1 py-3 text-right border-b border-gray-300 border-solid "
              >
                <div class="flex h7">
                  <score :score1="event.score2" :score2="event.score1"></score>
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore, mapState } from "vuex";
import Score from "@/snippets/Score.vue";
import CalendarTitle from "@/snippets/CalendarTitle.vue";

export default defineComponent ({
  name: "calendar-overview",
  data() {
    return {
      isBold: "font-semibold",
    };
  },
  components: {
    "calendar-title": CalendarTitle,
    score: Score,
  },
  computed: {
    ...mapState(["dates", "loading"])
  },
  mounted() {
    const store = useStore();
    store.dispatch("getCalendar");
  },
});
</script>
