import Vue from "vue";
import Vuex from "vuex";

import movies from "./apiResults";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: movies,
    favorites: []
  },
  mutations: {
    addFavorite(state, movie) {
      state.favorites.push(movie);
    },
    removeFavorite(state, movie) {
      state.favorites.splice(state.favorites.indexOf(movie), 1);
    }
  },
  actions: {
    addFavorite({ commit }, movie) {
      commit("addFavorite", movie);
    },
    removeFavorite({ commit }, movie) {
      commit("removeFavorite", movie);
    }
  }
});
