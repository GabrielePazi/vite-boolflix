<script>
import { store, searchMovie } from '../store';
export default {
  data() {
    return {
      store
    }
  },
  methods: {
    searchMovie
  }
}
</script>

<template>
  <nav class="navbar navbar-expand navbar-dark bg-black" aria-label="Second navbar example">
    <div class="container-fluid">
      <h1 class="navbar-brand fs-1 fw-bold">BOOLFLIX</h1>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02"
        aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end align-items-center" id="navbarsExample02">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search a Movie" aria-label="Recipient's username"
            aria-describedby="basic-addon2" v-model="store.movieToSearch">
          <button class="input-group-text" id="basic-addon2" @click="searchMovie()"><i
              class="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar-brand {
  color: rgb(229, 9, 20);

  &:hover {
    color: rgb(229, 9, 20);
  }
}

.input-group {
  width: 250px !important;
}
</style>