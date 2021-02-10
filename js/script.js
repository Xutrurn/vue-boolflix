var app = new Vue({
  el: '#app',
  data: {
    searchMovies: '',
    apiKey: '7a3c07bb92f9c591e83f48a742e9a7e2',
    allMovies: [],
  },
  methods: {
    getMovies() {
      axios.get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: this.apiKey,
            query: this.searchMovies,
          }
        })
        .then((result) => {
          this.allMovies = result.data.results;
        })
    },
  },
  mounted() {
    console.log('hello world');
  }
});
