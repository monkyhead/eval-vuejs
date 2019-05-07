<template>
  <button
    v-if="!isFavorite(movie)"
    class="favorite"
    @click="addToFavorites(movie)"
  >
    Add to Favorites
  </button>
  <span v-else
    ><strong>Favorite!</strong>
    <a @click="removeFromFavorites(movie)" class="remove_favorite"
      >(UnFavorite)</a
    ></span
  >
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "FavoriteButton",
  props: {
    movie: Object
  },
  computed: mapState({
    favorites: state => state.favorites
  }),
  methods: {
    ...mapActions(["addFavorite", "removeFavorite"]),
    addToFavorites: function(movie) {
      this.addFavorite(movie);
    },
    removeFromFavorites: function(movie) {
      this.removeFavorite(movie);
    },
    isFavorite: function(movie) {
      return this.favorites.filter(fave => fave.id == movie.id).length > 0;
    }
  }
};
</script>

<style scoped>
.favorite {
  background: #598aea;
  border-width: 1px;
  border-style: solid;
  border-color: #d2d2d2 #cbcacb #b1b1b1;
  color: #fff;
  font-size: 1.2em;
}
.remove_favorite {
  font-size: 0.8em;
  margin-left: 1em;
}
</style>
