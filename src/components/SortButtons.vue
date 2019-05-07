<template>
  <section class="sort-buttons">
    <span>Sort by:</span>
    <button
      class="sort"
      :class="{ active: isActive === 'release_date' }"
      @click="sortList('release_date')"
    >
      Release Date
    </button>
    <button
      class="sort"
      :class="{ active: isActive === 'vote_average' }"
      @click="sortList('vote_average')"
    >
      Rating
    </button>
    <button
      class="sort"
      :class="{ active: isActive === 'title' }"
      @click="sortList('title')"
    >
      Title
    </button>
  </section>
</template>

<script>
export default {
  name: "SortButtons",
  props: {
    movies: Object
  },
  data() {
    return {
      isActive: "",
      ascending: false,
      articles: ["a", "an", "the"]
    };
  },
  methods: {
    removeArticles(title) {
      let words = title.split(" ");
      if (words.length > 1 && this.articles.includes(words[0].toLowerCase())) {
        return words.splice(1).join(" ");
      } else {
        return title;
      }
    },
    sortList(sortby) {
      this.movies.results.sort((a, b) => {
        let aCompare = a[sortby];
        let bCompare = b[sortby];
        if (sortby === "title") {
          aCompare = this.removeArticles(aCompare);
          bCompare = this.removeArticles(bCompare);
        }
        return (aCompare > bCompare ? 1 : -1) * (this.ascending ? 1 : -1);
      });

      this.ascending = !this.ascending;
      this.isActive = sortby;
    }
  }
};
</script>

<style scoped>
.sort-buttons {
  text-align: right;
}

.sort {
  background-color: #fff;
  border: 1px solid #c5c5c5;
  border-radius: 0.5ch;
  font-size: 0.8em;
}

.active {
  font-weight: bold;
}
</style>
