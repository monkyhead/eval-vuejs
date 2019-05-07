<template>
  <article
    class="movie"
    :style="{
      'background-image': `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),
      url('${movie.backdrop_path}')`
    }"
  >
    <img :src="movie.poster_path" class="poster" />

    <div class="details">
      <h2>{{ movie.title }} ({{ movie.release_date | releaseYear }})</h2>
      <div>
        <span
          v-for="(genre, index) in movie.genres"
          :key="index"
          class="genre"
          >{{ genre }}</span
        >
      </div>
      <p class="overview">{{ movie.overview }}</p>
    </div>

    <div class="rating">
      <strong>Viewer Rating:</strong>
      <span class="average">{{ movie.vote_average }} / 10</span>
      <FavoriteButton :movie="movie" />
    </div>
  </article>
</template>

<script>
import FavoriteButton from "@/components/FavoriteButton.vue";

export default {
  name: "movieContainer",
  components: {
    FavoriteButton
  },
  props: {
    movie: Object,
    favorites: Array
  },
  filters: {
    releaseYear: release_date => {
      let d = new Date(release_date);
      return d.getFullYear();
    }
  }
};
</script>

<style scoped>
.movie {
  background: top left no-repeat;
  background-size: cover;
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  grid-gap: 0 2em;
}

.poster {
  grid-column: 1;
  grid-row: 1 / span 2;
}

.details {
  grid-column: 2;
  grid-row: 1 / 1;
}

.rating {
  display: grid;
  grid-template-columns: max-content max-content max-content;
  align-self: end;
  align-items: center;
  column-gap: 0.6ch;
  margin-bottom: 1ch;
}

.genre {
  background-color: #fff;
  border: 1px solid #5b5b5b;
  border-radius: 0.5ch;
  font-size: 0.8em;
  margin: 0 0.5ch;
  padding: 0 1ch;
}

.average {
  margin: 0 1ch;
}
</style>
