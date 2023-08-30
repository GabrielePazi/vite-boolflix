<script>
import MovieCard from './MovieCard.vue'
import SerieCard from './SerieCard.vue'
import { store } from '../store.js'
export default {
  components: {
    MovieCard,
    SerieCard
  },
  data() {
    return {
      store
    }
  }
}
</script>
<template>
  <div class="d-flex gap-3 flex-column overflow-hidden">
    <h2 class="my-3 text-white fw-bold fs-1" v-if="store.foundMovies.length > 0">Film</h2>
    <div class="d-flex gap-1 mb-3 overflow-x-auto">
      <div class="card flex-grow-1 flex-shrink-0 mb-2  bg-dark" v-for="movie in store.foundMovies">
        <MovieCard :movie="movie"></MovieCard>
      </div>
    </div>

    <h3 class="my-3 text-white fw-bold fs-1" v-if="store.foundSeries.length > 0">Serie</h3>
    <div class="d-flex gap-1 mb-3 overflow-x-auto">
      <div class="card flex-grow-1 flex-shrink-0 mb-2 bg-dark" v-for="serie in store.foundSeries">
        <SerieCard :serie="serie"></SerieCard>
      </div>
    </div>
  </div>
</template>