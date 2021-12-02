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
        <tr class="" v-for="team in team_list" :key="team.id">
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

<script lang="ts">
import { defineComponent } from "vue";
import { useStore, mapState } from "vuex";
import Team from "@/types/Team";
import Player from "@/types/Player";

export default defineComponent ({
  name: "TeamList",
  computed: { ...mapState(["team_list", "loading"]
  )},
  methods: {
      captain(team: Team) {
          if (team.players.data.length > 0)
          { 
              const captain: Player = team.players.data.find(t => t.captain === true);
              return captain.name;
          }
          else {
            return team.venue.owner;
          }
      },
      phone(team: Team) {
          if (team.players.data.length > 0)
          { 
              const captain: Player = team.players.data.find(t => t.captain === true);
              return captain.phone;
          }
          else {
            return team.venue.phone;
          }
      }
  },
  mounted() {
    const store = useStore();
    store.dispatch("getTeamList");
  },
});
</script>

<style>
</style>