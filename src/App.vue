<script>
import { store } from './store.js'
import TheHeader from './components/TheHeader.vue'
import { findFlagUrlByIso2Code } from "country-flags-svg";

export default {
  components: {
    TheHeader
  },
  data() {
    return {
      store,
      ratings: []
    }
  },
  computed: {
    convertEnInUs() {
      for (let i = 0; i < store.foundMovies.length; i++) {
        if (store.foundMovies[i].original_language == "en") {
          store.foundMovies[i].original_language = "us"
        }
        if (store.foundMovies[i].original_language == "ja") {
          store.foundMovies[i].original_language = "jp"
        }
      }

      for (let i = 0; i < store.foundSeries.length; i++) {
        if (store.foundSeries[i].original_language == "en") {
          store.foundSeries[i].original_language = "us"
        }

        if (store.foundSeries[i].original_language == "ja") {
          store.foundSeries[i].original_language = "jp"
        }
      }
      return
    },
    formatRating() {
      for (let i = 0; i < store.foundMovies.length; i++) {
        this.ratings.push(Math.ceil(store.foundMovies[i].vote_average / 2))
      }

      for (let i = 0; i < store.foundSeries.length; i++) {
        this.ratings.push(Math.ceil(store.foundSeries[i].vote_average / 2))
      }
      return
    }
  },
  methods: {
    findFlagUrlByIso2Code
  }
}
</script>

<template>
  <div class="constainer-fluid">
    <div class="row justify-content-center">
      <div class="col-8">
        <TheHeader></TheHeader>

        <main>
          <div class="d-flex gap-3">
            <div class="d-flex gap-3 flex-wrap my-5 w-50">
              <h3>Film</h3>
              <div class="card w-100" v-for="(movie, i) in store.foundMovies">
                <ul class="p-3">
                  <li class="mx-3">{{ movie.title }}</li>
                  <li class="mx-3">{{ movie.original_title }}</li>
                  <li class="mx-3">{{ convertEnInUs }}<img :src="findFlagUrlByIso2Code(movie.original_language)" alt=""
                      style="width: 1.5rem;">
                  </li>
                  <li class="mx-3 ">{{ formatRating }}<i v-for="stars in ratings[i]" class="fa-solid fa-star"
                      style="color: #f5ed00;"></i></li>
                  <li class="mx-3"><img :src="store.moviesPosters[i]" alt=""></li>
                </ul>
              </div>
            </div>

            <div class="d-flex gap-3 flex-wrap my-5 w-50">
              <h3>Serie</h3>
              <div class="card w-100" v-for="(serie, i) in store.foundSeries">
                <ul class="p-3">
                  <li class="mx-3">{{ serie.name }}</li>
                  <li class="mx-3">{{ serie.original_name }}</li>
                  <li class="mx-3"><img :src="findFlagUrlByIso2Code(serie.original_language)" alt=""
                      style="width: 1.5rem;">
                  </li>
                  <li class="mx-3 ">{{ formatRating }}<i v-for="stars in ratings[i]" class="fa-solid fa-star"
                      style="color: #f5ed00;"></i></li>
                  <li class="mx-3"><img :src="store.seriesPosters[i]" alt=""> </li>
                </ul>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  </div>
</template>

<style></style>
