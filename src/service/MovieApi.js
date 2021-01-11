// const imgURL = "https://image.tmdb.org/t/p/";
// const apiKey = "api_key=0eeaa62198c78b27a1a864f00b6de917";
// const lang = "language=en-US";
// const parameter = `?${apiKey}&${lang}`;

class MovieApi {
  apiKey = process.env.REACT_APP_MOVIE_API_KEY;
  async getPopularMovie(num = 1) {
    const requestOptions = {
      method: "GET"
    };

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=${num}`,
      requestOptions
    )
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

  async getDetailMovie(id) {
    const requestOptions = {
      method: "GET"
    };

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=en-US`,
      requestOptions
    )
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

  async getSearchMovie(title) {
    const requestOptions = {
      method: "GET"
    };

    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=en-US&query=${title}&page=1&include_adult=true`,
      requestOptions
    )
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
