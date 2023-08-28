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
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${store.apiKey}&query=${store.movieToSearch}&language=it-IT`

  axios.get(url).then((response) => {
    store.foundMovies.push(...response.data.results)
    console.log(store.foundMovies)
  })

  searchSeries()
}

export function searchSeries() {
  store.foundSeries = []
  const url = `https://api.themoviedb.org/3/search/tv?api_key=${store.apiKey}&query=${store.movieToSearch}&language=it-IT`

  axios.get(url).then((response) => {
    store.foundSeries.push(...response.data.results)
    console.log(store.foundSeries)
  })
}