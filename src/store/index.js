import { createStore } from 'vuex'

export default createStore({

  state: {
    user: 'hmm'
  },

  // Mutations are functions the effect the STATE
  mutations: {
    // by convention mutations are uppercase
    SET_USER(state, user) {
      state.user = user;
    }
  },

  // Actions are functions that you call throughout your application that call Mutations
  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user);
    }
  },

  modules: {
  }
})
