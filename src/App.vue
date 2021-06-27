<template>
  <div id="#app">
    <router-link to="/"><h2>Home</h2> </router-link>
    <router-link to="/about"><h2>About</h2> </router-link>
    <router-view></router-view>
  </div>
</template>
<script>
// import UserProfile from "./components/UserProfile.vue";

export default {
  name: "App",
  components: {
    // UserProfile,
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>