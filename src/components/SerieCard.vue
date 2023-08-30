<script>
import { store, getImage, formatRating } from '../store.js'
import { findFlagUrlByIso2Code } from "country-flags-svg";


export default {
  props: {
    serie: Object
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
    <img class="w-100 h-100" :src="getImage(serie)" alt="">
    <div class="d-flex justify-content-center align-items-center m-5 image-not-found" v-if="!getImage(serie)">IMAGE NOT
      FUOND</div>
  </div>

  <div class="serie-info position-absolute opacity-0">
    <ul class="p-3 list-unstyled bg-dark h-100 mb-3">
      <li class="mx-3 text-white fs-5"><span class="fw-bold">Titolo: </span>{{ serie.title }}</li>
      <li class="mx-3 text-white fs-5"><span class="fw-bold">Titolo Originale: </span>{{ serie.original_title }}</li>
      <li class="mx-3 text-white fs-5"><span class="fw-bold">Lingua: </span><img
          :src="findFlagUrlByIso2Code(serie.original_language)" alt="" style="width: 1.5rem;">
      </li>
      <li class="mx-3 text-white fs-5 "><span class="fw-bold">Voto: </span><i
          v-for="stars in formatRating(serie.vote_average)" class="fa-solid fa-star" style="color: #f5ed00;"></i></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.card-image {
  width: 300px;
  max-height: 400px;
}

.serie-info {
  width: 300px;
  height: 400px;
  transition: opacity .7s;

  &:hover {
    border: 2px solid grey;
    opacity: .95 !important;
  }
}
</style>