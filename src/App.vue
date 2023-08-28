<script>
import { store } from './store.js'
import TheHeader from './components/TheHeader.vue'
export default {
  components: {
    TheHeader
  },
  data() {
    return {
      store
    }
  },
  methods: {

  }
}
</script>

<template>
  <div class="constainer-fluid">
    <div class="row justify-content-center">
      <div class="col-6">
        <TheHeader></TheHeader>

        <main>
          <div class="d-flex gap-3 flex-wrap my-5">
            <div class="card w-100" v-for="movie in store.foundMovies">
            <ul class="p-3">
              <li class="mx-3">{{ movie.title }}</li>
              <li class="mx-3">{{ movie.original_title }}</li>
              <li class="mx-3">{{ movie.original_language }}</li>
              <li class="mx-3">{{ movie.vote_average }}</li>
            </ul>
          </div>
          </div>
          
        </main>
      </div>
    </div>
  </div>
</template>

<style>
@import 'bootstrap'
</style>
