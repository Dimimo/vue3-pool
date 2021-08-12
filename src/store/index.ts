import { createStore } from 'vuex'
import PoolDataService from '@/services/PoolDataService'

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
      PoolDataService("getCalendar")
        .then((response: any) => {
          console.log(response.data.data);
          commit("updateDates", response.data.data);
        })
        .catch((e) => {
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
