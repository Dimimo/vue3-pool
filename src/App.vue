<template>
  <div class="container mx-auto">
    <div>
      <responsive-navbar />
    </div>
    <div class="container mx-auto" id="main">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ResponsiveNavbar from "./components/ResponsiveNavbar.vue";

export default defineComponent ({
  name: "main-app",
  components: {
    ResponsiveNavbar,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
