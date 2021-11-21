<template>
  <div id="team">
    <div class="mt-2 mb-4 text-3xl text-purple-900">
      Team calendar of
      <span v-if="loading"> ..... </span>
      <span v-else>{{ team.name }}</span>
    </div>
    <div class="my-2 mb-4" v-if="venue">
      <div>
        <span class="font-bold">Address:</span>
        <span class="ml-2">{{ venue.address }}</span>
      </div>
      <div>
        <div>
          <span class="font-bold">Contact:</span>
          <span class="mx-2">{{ venue.owner }}</span>
          <span>
            <font-awesome-icon
              class="text-gray-800"
              :icon="['fas', 'phone-square-alt']"
              size="md"
            />
          </span>
          <span class="mx-2">{{ venue.phone }}</span>
        </div>
      </div>
    </div>
    <div v-if="players.length > 0">
      <div class="mx-auto mt-2 mb-6 border-2 border-green-700">
        <div class="my-2 mb-2 text-2xl font-bold text-green-700">Players</div>
        <div class="m-4" v-for="player in players" :key="player.id">
          <div class="mb-2">
            <span v-if="player.captain">
              <font-awesome-icon
                class="text-yellow-600"
                :icon="['fas', 'user-tie']"
                size="lg"
                title="Captain"
              />
            </span>
            <span v-else>
              <font-awesome-icon
                class="text-gray-800"
                :icon="['fas', 'user']"
                size="lg"
                title="player"
              />
            </span>
            <span class="mx-2">{{ player.name }}</span>
            <span>
              <font-awesome-icon
                class="text-gray-800"
                :icon="['fas', 'phone-square-alt']"
                size="md"
              />
            </span>
            <span class="ml-2">{{ player.phone }}</span>
          </div>
        </div>
      </div>
    </div>
    <table class="w-full table-fixed">
      <thead>
        <tr class="text-lg leading-normal text-gray-600 bg-gray-200">
          <th class="pr-6 text-center">Date</th>
          <th class="text-left">Home</th>
          <th class="text-left">Away</th>
          <th class="text-left">Score</th>
        </tr>
      </thead>
      <tbody v-for="event in calendar" :key="event.id">
        <tr class="hover:bg-gray-100">
          <td class="py-1 pr-6 text-center">{{ event.date.date }}</td>
          <td
            class="text-left"
            :class="
              event.team_1.id === team.id ? 'text-green-600 font-bold' : ''
            "
          >
            <router-link :to="`/team/` + event.team_1.id" force="true">
              {{ event.team_1.name }}
            </router-link>
          </td>
          <td
            class="text-left"
            :class="
              event.team_2.id === team.id ? 'text-green-600 font-bold' : ''
            "
          >
            <router-link :to="`/team/` + event.team_2.id" force="true">
              {{ event.team_2.name }}
            </router-link>
          </td>
          <td class="text-left">
            <span
              class="flex py-1"
              v-if="event.score1 != null && event.score2 != null"
            >
              <score :score1="event.score1" :score2="event.score2"></score>
              <span class="px-2">/</span>
              <score :score1="event.score2" :score2="event.score1"></score>
            </span>
            <span class="px-4" v-else>------</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Score from "@/snippets/Score";

export default {
  name: "Team",
  components: {
    score: Score,
  },
  computed: mapState(["venue", "team", "players", "calendar", "loading"]),
  methods: {
    // eslint-disable-next-line
    getData() {
      if (this.$route.params.id) {
        this.$store.dispatch("getTeam", this.$route.params.id);
      }
    },
  },
  watch: {
    "$route.path": "getData",
  },
  // eslint-disable-next-line
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.title-skeleton {
  --skeleton-margin-bottom: 0px;
}
</style>