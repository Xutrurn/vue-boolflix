let app = new Vue({
  el: "#app",
  data: {
    apiKey: '7a3c07bb92f9c591e83f48a742e9a7e2',
    ricerca: "",
    films: [],
    tvSeries: [],


  },
  methods: {
    datiScaricati() {
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: this.apiKey,
            query: this.ricerca,
            language: "it-IT",
            include_adult: false
          }
        })
        .then(result => {
          this.films = result.data.results

          this.films.forEach(item => {
            const vote = Math.ceil(item.vote_average / 2)
            console.log(vote);
            return item.stellePiene = vote;
          });
        })



      axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            api_key: this.apiKey,
            query: this.ricerca,
            language: "it-IT",
            include_adult: false
          }
        })
        .then(result => {
          this.tvSeries = result.data.results

          this.tvSeries.forEach(item => {
            const vote = Math.ceil(item.vote_average / 2)
            console.log(vote);
            return item.stellePiene = vote;
          });
        })


    }
  }
})
