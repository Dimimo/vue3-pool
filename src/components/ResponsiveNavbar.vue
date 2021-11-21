<template>
  <div>
    <nav
      class="px-4 py-3 bg-indigo-600 md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <div class="text-xl font-bold text-gray-100 md:text-2xl">
          Season {{ season }}
        </div>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <li class="text-gray-100 hover:text-indigo-400">
          <router-link to="/results">Results</router-link>
        </li>
        <li class="text-gray-100 hover:text-indigo-400">
          <router-link to="/calendar">Calendar</router-link>
        </li>
        <li class="text-gray-100 hover:text-indigo-400">
          <router-link to="/team_list">Teams</router-link>
        </li>
        <li>
          <div class="relative">
            <!-- Dropdown toggle button -->
            <button
              @click="show = !show"
              class="flex items-center text-indigo-100 bg-indigo-600 rounded-md focus:outline-none"
            >
              <span class="mr-4">Change Season</span>
              <svg
                class="w-5 h-5 text-indigo-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <!-- Dropdown menu -->
            <div
              v-show="show"
              class="py-2 mt-2 bg-indigo-500 rounded-md shadow-xl lg:absolute lg:right-0 w-44"
            >
              <div v-for="item in seasons" :key="item.season">
                <router-link
                  v-if="season !== item.season"
                  @click="show = !show"
                  :to="'/post_season/' + item.season"
                  class="block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-400 hover:text-indigo-100"
                >
                  {{ item.season }}
                </router-link>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { useStore, mapState } from "vuex";
//import axios from "axios";
export default {
  // eslint-disable-next-line
  data() {
    return {
      showMenu: false,
      show: false,
    };
  },
  methods: {
    // eslint-disable-next-line
    toggleNav() {
      this.showMenu = !this.showMenu;
    },
  },
  computed: {
    ...mapState(["season", "seasons"]),
  },
  // eslint-disable-next-line
  mounted() {
    this.show = false;
    if (this.seasons.length === 0) {
      const store = useStore();
      store.dispatch("getSeasons");
    }

    /* axios
      .post("http://parrot.app/api/pool/change_season", { season: "2011/10" })
      .then(function (response) {
        console.log(response.data.season);
      })
      .catch(function (error) {
        console.log(error);
      }); */
  },
};
</script>