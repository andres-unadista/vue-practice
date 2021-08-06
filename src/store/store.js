import Vue from 'vue';
import Vuex from 'vuex';

import user from './users.store';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    idComponent: 0,
   
  },
  mutations: {
    setIdComponent(state) {
      state.idComponent++;
    },
   
  },
  getters: {
   
  },
  actions: {
   
  },
  modules: {
    user
  }
});
