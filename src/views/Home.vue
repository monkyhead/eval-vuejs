<template>
  <div class="home">
    <h1>Movie List!</h1>
    <p>These were the top-rated films of the 20th Century.</p>

    <SortButtons :movies="movieList()" />
    <div>
      <button @click="filterFavorites">Faves</button>
    </div>

    <ul class="movie-list">
      <li v-for="movie in movieList()" :key="movie.id">
        <MovieContainer :movie="movie" :favorites="favorites" />
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieContainer from "@/components/MovieContainer.vue";
import SortButtons from "@/components/SortButtons.vue";
import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    MovieContainer,
    SortButtons
  },
  data: () => {
    return {
      filtered: false
    }
  },
  computed: mapState({
    movies: state => state.movies.results,
    favorites: state => state.favorites
  }),
  methods: {
    movieList() {
      if (this.filtered) {
        return this.favorites;
      } else {
        return this.movies;
      }
    },
    filterFavorites() {
      this.filtered = !this.filtered
    }
  }
};
</script>

<style scoped>
.movie-list {
  display: grid;
  grid-auto-rows: auto;
  row-gap: 1em;
  list-style-type: none;
}
</style>
