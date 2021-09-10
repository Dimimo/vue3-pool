import { createStore } from "vuex";
import PoolDataService from "@/services/PoolDataService";
import ResponseData from "@/types/ResponseData";
//import { resolveComponent } from "@vue/runtime-core";

export default createStore({
  state: () => ({
    isAdmin: false,
    loading: false,
    season: "2019/07",
    events: [],
    dates: [],
    results: [],
    team: [],
    calendar: [],
  }),
  actions: {
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

    getTeam({ commit, state }, id = null) {
      commit("updateLoading", true);
      state.team = [];
      state.calendar = [];
      // eslint-disable-next-line
      return new Promise((resolve: any) => {
        PoolDataService.getTeam(id).then((response: ResponseData) => {
          commit("updateTeam", response.data.data.team);
          commit("updateCalendar", response.data.data.calendar.data);
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
    updateDates(state, payload) {
      state.dates = payload;
    },
    updateCalendar(state, payload) {
      state.calendar = payload;
    },
    updateTeam(state, payload) {
      state.team = payload;
    },
    updateResults(state, payload) {
      state.results = payload;
    },
  },
  modules: {},
});
