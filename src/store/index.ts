import { createStore } from "vuex";
import PoolDataService from "@/services/PoolDataService";
import ResponseData from "@/types/ResponseData";

export default createStore({
  state: () => ({
    isAdmin: false,
    loading: false,
    season: "2019/07",
    events: [],
    dates: [],
    results: [],
  }),
  actions: {
    getCalendar({ commit }) {
      return new Promise(() => {
        PoolDataService.getCalendar()
          .then((response: ResponseData) => {
            // console.log(response.data.data);
            commit("updateDates", response.data.data);
          })
          .catch((e: string) => {
            console.log(e);
          });
      });
    },

    getResults({ commit }) {
      return new Promise(() => {
        PoolDataService.getResults()
          .then((response: ResponseData) => {
            console.log(response.data.data);
            commit("updateResults", response.data.data);
          })
          .catch((e: string) => {
            console.log(e);
          });
      });
    },
  },

  mutations: {
    updateDates(state, payload) {
      state.dates = payload;
    },
    updateResults(state, payload) {
      state.results = payload;
    },
  },
  modules: {},
});
