<script>
import { store, searchMovie } from '../store';
export default {
  data() {
    return {
      store
    }
  },
  methods:{
    searchMovie
  }
}
</script>

<template>
  <div>
    <h1 class="my-3">BoolFlix</h1>

    <div class="d-flex gap-3">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search a Movie" v-model="store.movieToSearch">
      </div>

      <button class="btn btn-primary" @click="searchMovie">Search</button>
    </div>
  </div>
</template>