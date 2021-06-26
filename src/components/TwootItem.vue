<template>
  <div class="item" @click="favTwoot(twoot.id)">
    {{ this.username }} {{ this.twoot.content }}
  </div>
</template>
<script>
export default {
  name: "TwootItem",
  props: {
    username: { type: String, required: true },
    twoot: { type: Object, required: true },
  },
  methods: {
    favTwoot(id) {
      this.$emit("favourite", id);
    },
  },
};
</script>

<style>
.item {
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

.item:hover {
  cursor: pointer;
  background-color: lightblue;
}
</style>
