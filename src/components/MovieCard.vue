<script>
import { store, getImage, formatRating } from '../store.js'
import { findFlagUrlByIso2Code } from "country-flags-svg";

export default {
  props: {
    movie: Object
  },
  data() {
    return {
      store
    }
  },
  methods: {
    findFlagUrlByIso2Code,
    getImage,
    formatRating
  }
}
</script>

<template>
  <div class="card-image">
    <img class="w-100 h-100" :src="getImage(movie)" alt="">
    <div class="d-flex justify-content-center align-items-center m-5 image-not-found" v-if="!getImage(movie)">IMAGE NOT
      FUOND</div>
  </div>

  <div class="movie-info position-absolute opacity-0">
    <ul class="p-3 list-unstyled bg-dark h-100 mb-3 overflow-auto">
      <li class="mx-3 text-white"><span class="fw-bold">Titolo: </span>{{ movie.title }}</li>
      <li class="mx-3 text-white"><span class="fw-bold">Titolo Originale: </span>{{ movie.original_title }}</li>
      <li class="mx-3 text-white"><span class="fw-bold">Lingua: </span><img
          :src="findFlagUrlByIso2Code(movie.original_language)" alt="" style="width: 1.5rem;">
      </li>
      <li class="mx-3 text-white "><span class="fw-bold">Voto: </span><i v-for="stars in formatRating(movie.vote_average)"
          class="fa-solid fa-star" style="color: #f5ed00;"></i></li>
      <li class="mx-3 text-white"><span class="fw-bold">Descrizione: </span>{{ movie.overview }}</li>

    </ul>
  </div>
</template>

<style lang="scss" scoped>
.card-image {
  width: 300px;
  max-height: 400px;
}

.movie-info {
  width: 300px;
  height: 400px;
  transition: opacity .7s;

  &:hover {
    border: 2px solid grey;
    opacity: .95 !important;
  }
}
</style>