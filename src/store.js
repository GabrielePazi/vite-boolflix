import axios from 'axios'
import { reactive } from 'vue'

export const store = reactive({
  apiKey: "a0ff6243024fc680740f6a0afe993562",
  movieToSearch: "",
  foundMovies: [],
  foundSeries: []
})

export function searchMovie() {
  store.foundMovies = []
  store.foundSeries = []

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${store.apiKey}&query=${store.movieToSearch}&language=it-IT`

  axios.get(url).then((response) => {
    store.foundMovies.push(...response.data.results)
    convertEnInUs()
    console.log(store.foundMovies)
  })

  searchSeries()
}

export function searchSeries() {
  const url = `https://api.themoviedb.org/3/search/tv?api_key=${store.apiKey}&query=${store.movieToSearch}&language=it-IT`

  axios.get(url).then((response) => {
    store.foundSeries.push(...response.data.results)
    convertEnInUs()
    console.log(store.foundSeries)
  })
}

export function convertEnInUs() {
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
}

export function getImage(movie) {
  if (movie.poster_path) {
    return `https://image.tmdb.org/t/p/w300${movie.poster_path}`
  }
  return false
}

export function formatRating(avgRating) {
  return Math.ceil(avgRating / 2)
}