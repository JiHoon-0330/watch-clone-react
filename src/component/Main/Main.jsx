import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import MovieContainer from "../MovieContainer/MovieContainer";
import styles from "./style.module.css";

const Main = ({ movieApi }) => {
  const [nowPlaying, setNowPlaying] = useState({});
  const [popular, setPopular] = useState({});
  const [topRated, setTopRated] = useState({});
  const [upcoming, setUpcoming] = useState({});
  useEffect(() => {
    movieApi.getNowPlayingMovie().then(data => {
      if (!data) {
        return;
      }
      setNowPlaying({ ...data.results });
    });
    movieApi.getPopularMovie().then(data => {
      if (!data) {
        return;
      }
      setPopular({ ...data.results });
    });
    movieApi.getTopRatedMovie().then(data => {
      if (!data) {
        return;
      }
      setTopRated({ ...data.results });
    });
    movieApi.getUpcomingMovie().then(data => {
      if (!data) {
        return;
      }
      setUpcoming({ ...data.results });
    });
  }, [movieApi]);

  return (
    <div>
      <Helmet>
        <title>watcha</title>
      </Helmet>
      <p className={styles.p}>상영 중인 작품</p>
      <MovieContainer
        movieApi={movieApi}
        popularMovie={nowPlaying}
        containerIndex={1}
      />
      <p className={styles.p}>인기있는 작품</p>
      <MovieContainer
        movieApi={movieApi}
        popularMovie={popular}
        containerIndex={2}
      />
      <p className={styles.p}>평점이 높은 작품</p>
      <MovieContainer
        movieApi={movieApi}
        popularMovie={topRated}
        containerIndex={3}
      />
      <p className={styles.p}>상영 예정인 작품</p>
      <MovieContainer
        movieApi={movieApi}
        popularMovie={upcoming}
        containerIndex={4}
      />
    </div>
  );
};

export default Main;
