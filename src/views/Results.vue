<template>
  <div id="results">
    <table class="w-full table-fixed">
      <thead>
        <tr class="text-lg leading-normal text-gray-600 bg-gray-200">
          <th class="py-2">#</th>
          <th class="w-2/12 py-2 text-left">Team Ranking</th>
          <th class="w-2/12 py-2 text-left">Last Played</th>
          <th class="w-1/12">Score</th>
          <th class="py-2 text-green-600">
            <font-awesome-icon :icon="['fas', 'thumbs-up']" size="lg" />
          </th>
          <th class="py-2 text-yellow-500">
            <font-awesome-icon :icon="['fas', 'thumbs-down']" size="lg" />
          </th>
          <th
            class="invisible w-0 py-2 text-green-600 bg-gray-200 md:visible md:w-1/12"
          >
            <font-awesome-icon :icon="['fas', 'plus-square']" size="lg" />
          </th>
          <th
            class="invisible w-0 py-2 text-yellow-500 bg-gray-200 md:visible md:w-1/12"
          >
            <font-awesome-icon :icon="['fas', 'minus-square']" size="lg" />
          </th>
          <th class="py-2 text-blue-600">
            <font-awesome-icon :icon="['fas', 'percent']" size="lg" />
          </th>
          <th class="py-2 text-gray-600">
            <font-awesome-icon :icon="['fas', 'glass-cheers']" size="lg" />
          </th>
        </tr>
      </thead>
      <tbody v-for="result in results" :key="result.team.id">
        <tr class="border-b-2 hover:bg-gray-100">
          <td class="">{{ result.rank }}</td>
          <td class="py-2 font-bold text-left">
            <router-link :to="`/team/` + result.team.id">
              {{ result.team.name }}
            </router-link>
          </td>
          <td class="text-left">
            <router-link :to="`/team/` + result.played.id">
              {{ result.played.name }}
            </router-link>
          </td>
          <td class="" :class="result.last_game_won ? 'font-bold' : ''">
            <span
              class=""
              :class="result.last_result === 'not in' ? 'text-yellow-700' : ''"
              >{{ result.last_result }}</span
            >
          </td>
          <td class="">{{ result.won }}</td>
          <td class="">{{ result.lost }}</td>
          <td class="invisible w-0 md:visible md:w-1/12">{{ result.for }}</td>
          <td class="invisible w-0 md:visible md:w-1/12">
            {{ result.against }}
          </td>
          <td class="">{{ result.percentage }}</td>
          <td class="">{{ result.games_played }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore, mapState } from "vuex";

export default defineComponent ({
  name: "ResultList",
  computed: {
    ...mapState([
      'results',
      'loading',
    ]),
  },
  mounted() {
    const store = useStore();
    store.dispatch("getResults");
  },
});
</script>

<style>
</style>