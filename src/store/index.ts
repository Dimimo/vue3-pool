import { createStore } from "vuex";
import PoolDataService from "@/services/PoolDataService";
import ResponseData from "@/types/ResponseData";
import axios from "axios";
//import { resolveComponent } from "@vue/runtime-core";

export default createStore({
  state: () => ({
    isAdmin: false,
    loading: true,
    season: "2021/11",
    seasons: [],
    events: [],
    dates: [],
    results: [],
    venue: [],
    team: [],
    players: [],
    calendar: [],
    team_list: [],
  }),

  getters: {
    changeSeason(state) {
      if (localStorage.getItem("season")) {
        state.season = localStorage.getItem("season");
      } else {
        localStorage.setItem("season", state.season);
      }

      return state.season;
    },
  },

  actions: {
    startLoading({ commit }) {
      commit("updateLoading", true);
    },

    getSeasons({ commit }) {
      // eslint-disable-next-line
      return new Promise((resolve: any) => {
        PoolDataService.getSeasons()
          .then((response: ResponseData) => {
            commit("updateSeasons", response.data.data);
            resolve();
          })
          .catch((e: string) => {
            console.log(e);
          });
      });
    },

    updateSeason({ commit }, season) {
      commit("updateSeason", season);
    },

    postSeason({ commit }, payload) {
      // eslint-disable-next-line
      return new Promise((resolve: any) => {
        commit("updateLoading", true);
        commit("updateSeason", payload);
        commit("updateResults", []);
        axios
          .post("http://www.puertoparrot.com/api/pool/change_season", {
            season: payload,
          })
          .then(function (response) {
            commit("updateSeason", response.data.season);
            resolve();
          })
          .catch(function (e: string) {
            console.log(e);
          });
      });
    },

    getCalendar({ commit }) {
      commit("updateLoading", true);
      // eslint-disable-next-line
      return new Promise((resolve: any) => {
        PoolDataService.getCalendar()
          .then((response: ResponseData) => {
            commit("updateDates", response.data.data);
            commit("updateLoading", false);
            resolve();
          })
          .catch((e: string) => {
            console.log(e);
          });
      });
    },

    getResults({ commit }) {
      commit("updateLoading", true);
      // eslint-disable-next-line
      return new Promise((resolve: any) => {
        PoolDataService.getResults()
          .then((response: ResponseData) => {
            commit("updateResults", response.data.data);
            commit("updateLoading", false);
            resolve();
          })
          .catch((e: string) => {
            console.log(e);
          });
      });
    },

    getTeam({ commit }, id = null) {
      commit("updateLoading", true);
      commit("updateVenue", []);
      commit("updateTeam", []);
      commit("updatePlayers", []);
      commit("updateCalendar", []);
      // eslint-disable-next-line
      return new Promise((resolve: any) => {
        PoolDataService.getTeam(id).then((response: ResponseData) => {
          commit("updateVenue", response.data.data.team.venue);
          commit("updateTeam", response.data.data.team);
          commit("updatePlayers", response.data.data.team.players.data);
          commit("updateCalendar", response.data.data.calendar.data);
          commit("updateLoading", false);
          resolve();
        });
      });
    },

    getTeamList({ commit }) {
      commit("updateLoading", true);
      commit("updateTeamList", []);
      // eslint-disable-next-line
      return new Promise((resolve: any) => {
        PoolDataService.getTeamList().then((response: ResponseData) => {
          commit("updateTeamList", response.data.data);
          commit("updateLoading", false);
          resolve();
        });
      });
    },
  },

  mutations: {
    updateLoading(state, payload) {
      state.loading = payload;
    },
    updateSeasons(state, payload) {
      state.seasons = payload;
    },
    updateSeason(state, payload) {
      state.season = payload;
      localStorage.setItem("season", payload);
    },
    updateDates(state, payload) {
      state.dates = payload;
    },
    updateCalendar(state, payload) {
      state.calendar = payload;
    },
    updateVenue(state, payload) {
      state.venue = payload;
    },
    updateTeam(state, payload) {
      state.team = payload;
    },
    updateTeamList(state, payload) {
      state.team_list = payload;
    },
    updatePlayers(state, payload) {
      state.players = payload;
    },
    updateResults(state, payload) {
      state.results = payload;
    },
  },
  modules: {},
});
