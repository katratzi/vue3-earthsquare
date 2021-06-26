<template>
  <div class="user">
    <h1>@{{ user.username }}</h1>
    <div v-if="user.isAdmin">admin</div>
    <strong>Followers: {{ followers }}</strong>
  </div>
  <div>
    <TwootItem
      v-for="twoot in user.twoots"
      :key="twoot.id"
      :username="user.username"
      :twoot="twoot"
      @favourite="toggleFavourite"
    />
  </div>
</template>
<script>
import TwootItem from "./TwootItem.vue";

export default {
  name: "UserProfile",

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
        twoots: [
          { id: 1, content: "twotter is amazing" },
          { id: 2, content: "hello world" },
        ],
      },
    };
  },
  components: {
    TwootItem,
  },
  watch: {
    // when the data changes, you get what it is now and what is was
    followers(newFollowerCount, oldFollowerCount) {
      if (oldFollowerCount < newFollowerCount) {
        console.log(`${this.user.username} has gained a follower`);
      } else {
        console.log(`${this.user.username} has lost a follower`);
      }
      // else say you lost one
    },
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
    toggleFavourite(id) {
      console.log("love me " + id);
    },
  },
  mounted() {
    // when this component is mounted/started, run this
    this.followUser();
  },
};
</script>

<style>
.user {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: 1px solid #333;
  margin: 0em 2em 1em 2em;
  padding: 1em;
  border: 1px solid #333;
  width: 200px;
}
.user h1 {
  margin: 0;
}
</style>
