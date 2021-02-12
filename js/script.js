var app = new Vue({
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
            language: "it-IT"
          }
        })
        .then(result => {
          this.films = result.data.results

          // stelline films
          this.films.forEach(element => {
            const voto = Math.ceil(element.vote_average / 2)
            return element.stellePiene = voto;
          });

          // ricerca copertine films
          this.films.forEach(element => {
            const base = "https://image.tmdb.org/t/p/w342";
            const linkCopertina = element.poster_path;
            if (element.poster_path) {
              return element.poster = base + linkCopertina;
            } else {
              return element.poster = linkCopertina;
            }
          })
        })

        axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            api_key: this.apiKey,
            query: this.ricerca,
            language: "it-IT"
          }
        })
        .then(result => {
          this.tvSeries = result.data.results

          // stelline serie tv
          this.tvSeries.forEach(element => {
            const voto = Math.ceil(element.vote_average / 2)
            return element.stellePiene = voto;
          })

          // ricerca copertine serie tv
          this.tvSeries.forEach(item => {
            const base = "https://image.tmdb.org/t/p/w342";
            const linkCopertina = item.poster_path;
            if (item.poster_path) {
              return item.poster = base + linkCopertina
            } else {
              return item.poster = linkCopertina
            }
          })

        })


      }
      // fine funzione datiScaricati
    }
  })
