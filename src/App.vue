<template>
  <div id="app">
    @{{ user.username }} - {{ fullname }}
    <strong>Followers: {{ followers }}</strong>
    <button v-on:click="followUser">Follow</button>
  </div>
</template>
<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {
      followers: 0,
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
  computed: {
    fullname() {
      return `${this.user.firstname} ${this.user.lastname}`;
    },
  },
  methods: {
    followUser() {
      this.followers++;
    },
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
  display: flex;
  margin-top: 60px;
  flex-direction: column;
  text-align: center;
}
</style>
