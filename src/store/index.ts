import { createStore } from 'vuex'
import PoolDataService from "@/services/PoolDataService";
import ResponseData from "@/types/ResponseData";

export default createStore({
  state: () => ({
    isAdmin: false,
    loading: false,
    season: '2019/07',
    events: [],
    dates: []
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
    }
  },
  mutations: {
      updateDates(state, payload) {
        state.dates = payload;
      }
  },
  modules: {
  }
})
