<template>
  <div class="user">
    <h1>@{{ user.username }}</h1>
    <div v-if="user.isAdmin">admin</div>
    <strong>Followers: {{ followers }}</strong>
  </div>
  <div>
    <form
      @submit.prevent="createNewTwoot"
      :class="{ 'too-long': charCount > 40 }"
    >
      <p>
        <label for="newTwoot"><strong>New Twoot</strong></label>
        {{ charCount }} / 40
      </p>
      <textarea rows="4" id="newTwoot" v-model="newTwootContent" />
      {{ newTwootContent }} {{ selectedTwootType }}
      <div class="twootType">
        <label for="newTwootType"><strong>Twoot type: </strong></label>
        <select id="newTwootType" v-model="selectedTwootType">
          <option
            :value="option.value"
            v-for="(option, index) in twootTypes"
            :key="index"
          >
            {{ option.name }}
          </option>
        </select>
      </div>
      <button>Twoot!</button>
    </form>
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
  computed: {
    charCount() {
      return this.newTwootContent.length;
    },
    fullname() {
      return `${this.user.firstname} ${this.user.lastname}`;
    },
  },
  data() {
    return {
      newTwootContent: "",
      selectedTwootType: "instant",
      followers: 0,
      twootTypes: [
        { value: "draft", name: "Draft" },
        { value: "instant", name: "Instant Twoot" },
      ],
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
  methods: {
    followUser() {
      this.followers++;
    },
    toggleFavourite(id) {
      console.log("love me " + id);
    },
    createNewTwoot() {
      console.log("hello world");
      if (this.newTwootContent && this.selectedTwootType !== "draft") {
        // unshift adds to start
        this.user.twoots.unshift({
          id: this.user.twoots.length + 1,
          content: this.newTwootContent,
        });
        // clear old
        this.newTwootContent = "";
      }
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

.too-long {
  background-color: red;
}
</style>
