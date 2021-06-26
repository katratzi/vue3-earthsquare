<template>
  <div id="app">@{{ user.username }}</div>
</template>
<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {
      follower: 0,
      user: {
        id: 1,
        username: "rygel-xvi",
        firstname: "dominar",
        lastname: "rygel",
        email: "dominar@rygel.com",
        isAdmin: true,
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
