class MovieApi {
  apiKey = process.env.REACT_APP_MOVIE_API_KEY;
  baseUrl = "https://api.themoviedb.org/3/";
  requestOptions = {
    method: "GET"
  };

  async getNowPlayingMovie() {
    const data = await this.getData(
      `movie/now_playing?api_key=${this.apiKey}&language=en-US`
    );
    return data;
  }

  async getPopularMovie() {
    const data = await this.getData(
      `movie/popular?api_key=${this.apiKey}&language=en-US`
    );
    return data;
  }

  async getTopRatedMovie() {
    const data = await this.getData(
      `movie/top_rated?api_key=${this.apiKey}&language=en-US`
    );
    return data;
  }
  async getUpcomingMovie() {
    const data = await this.getData(
      `movie/upcoming?api_key=${this.apiKey}&language=en-US`
    );
    return data;
  }

  async getDetailMovie(id) {
    const data = await this.getData(
      `movie/${id}?api_key=${this.apiKey}&language=en-US`
    );
    return data;
  }

  async getSearchMovie(title) {
    const data = await this.getData(
      `search/movie?api_key=${this.apiKey}&language=en-US&query=${title}&page=1&include_adult=true`
    );
    return data;
  }

  async getData(params) {
    const data = await fetch(`${this.baseUrl}${params}`, this.requestOptions)
      .then(response => {
        if (!response.ok) {
          console.log(`network error`);
          return;
        } else {
          return response.json();
        }
      })
      .catch(error => console.log(`error: ${error}`));
    return data;
  }
}

export default MovieApi;
