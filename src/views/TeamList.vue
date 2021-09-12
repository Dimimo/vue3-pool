<template>
  <div class="mt-2 mb-4 text-3xl text-purple-900">Teamlist</div>
  <div v-if="loading">
    <div class="font-bold">.... loading ....</div>
  </div>
  <div v-else>
    <table class="w-full table-fixed">
      <thead>
        <tr class="text-lg leading-normal text-gray-600 bg-gray-200">
          <th class="p-2 text-left">Teams</th>
          <th class="p-2 text-left">Venue</th>
          <th class="p-2 text-left">Captain</th>
          <th class="p-2 text-left">Contact</th>
        </tr>
      </thead>
      <tbody>
        <tr class="" v-for="team in teams" :key="team.id">
          <td class="py-2 text-left">
            <router-link :to="`/team/` + team.id">
              {{ team.name }}
            </router-link>
          </td>
          <td class="py-2 text-left">{{ team.venue.name }}</td>
          <td class="py-2 text-left">{{ this.captain(team) }}</td>
          <td class="py-2 text-left">{{ this.phone(team) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useStore, mapState } from "vuex";
export default {
  name: "TeamList",
  computed: mapState({
    teams: (state) => state.team_list,
    loading: (state) => state.loading,
  }),
  // eslint-disable-next-line
  methods: {
      // eslint-disable-next-line
      captain(team) {
          if (team.players.data.length > 0)
          { 
              const captain = team.players.data.find(t => t.captain === true);
              return captain.name;
          }
          else {
            return team.venue.owner;
          }
      },
      // eslint-disable-next-line
      phone(team) {
          if (team.players.data.length > 0)
          { 
              const captain = team.players.data.find(t => t.captain === true);
              return captain.phone;
          }
          else {
            return team.venue.phone;
          }
      }
  },
  // eslint-disable-next-line
  mounted() {
    const store = useStore();
    store.dispatch("getTeamList");
  },
};
</script>

<style>
</style>