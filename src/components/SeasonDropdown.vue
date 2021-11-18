<template>
  <div>
    <div class="relative float-right">
      <!-- Dropdown toggle button -->
      <button
        @click="show = !show"
        class="flex items-end p-2 text-indigo-100 bg-indigo-600 rounded-md"
      >
        <span class="mr-4">Season</span>
        <svg
          class="w-5 h-5 text-indigo-100 dark:text-white"
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
        class="absolute right-0 py-2 mt-2 bg-indigo-500 rounded-md shadow-xl  w-44"
      >
        <router-link
          to="/"
          class="block px-4 py-2 text-sm text-indigo-100  hover:bg-indigo-400 hover:text-indigo-100"
        >
          2021/11
        </router-link>
        <router-link
          to="/"
          class="block px-4 py-2 text-sm text-indigo-100  hover:bg-indigo-400 hover:text-indigo-100"
        >
          2021/10
        </router-link>
        <router-link
          to="/"
          class="block px-4 py-2 text-sm text-indigo-100  hover:bg-indigo-400 hover:text-indigo-100"
        >
          2021/08
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  data() {
    return {
      show: false,
    };
  },
};
</script>