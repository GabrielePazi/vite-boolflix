import axios from 'axios'
import { reactive } from 'vue'

export const store = reactive({
  apiKey: "a0ff6243024fc680740f6a0afe993562",
  movieToSearch: "",
  foundMovies: [],
  moviesPosters: [],
  foundSeries: [],
  seriesPosters: []
})

export function searchMovie() {
  store.foundMovies = []
  store.moviesPosters = []
  store.foundSeries = []
  store.seriesPosters = []

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${store.apiKey}&query=${store.movieToSearch}&language=it-IT`

  axios.get(url).then((response) => {
    store.foundMovies.push(...response.data.results)
    console.log(store.foundMovies)
    searchMoviesPosters()
  })

  searchSeries()
}

export function searchSeries() {
  const url = `https://api.themoviedb.org/3/search/tv?api_key=${store.apiKey}&query=${store.movieToSearch}&language=it-IT`

  axios.get(url).then((response) => {
    store.foundSeries.push(...response.data.results)
    console.log(store.foundSeries)
    searchSeriesPosters()
  })
}

export function searchMoviesPosters() {
  
  for (let i = 0; i < store.foundMovies.length; i++) {
    let imgUrl = `https://image.tmdb.org/t/p/w154${store.foundMovies[i].poster_path}`

    axios.get(imgUrl).then((response) => {
      store.moviesPosters.push(response.config.url)
    })
  }
}

export function searchSeriesPosters() {
  
  for (let i = 0; i < store.foundMovies.length; i++) {
    let imgUrl = `https://image.tmdb.org/t/p/w154${store.foundSeries[i].poster_path}`

    axios.get(imgUrl).then((response) => {
      store.seriesPosters.push(response.config.url)
    })
  }
}