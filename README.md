# vue3-earthsquare

# Notes

Can use command line to serve project - vue ui

    // the same
    v-on:click="followUser"
    @click="followUser

    v-for needs a key.  can provide one manually or use the index
    <div v-for="twoot in user.twoots" :key="twoot.id">{{ twoot.content }}</div>
    <div v-for="(twoot, index) in user.twoots" :key="index">{{ twoot.content }}</div>

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
