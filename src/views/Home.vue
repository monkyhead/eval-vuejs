<template>
  <div class="home">
    <h1>Movie List!</h1>
    <p>These were the top-rated films of the 20th Century.</p>

    <SortButtons :movies="movies" />

    <ul class="movie-list">
      <li v-for="movie in movies.results" :key="movie.id">
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
  computed: mapState({
    movies: state => state.movies,
    favorites: state => state.favorites
  })
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
