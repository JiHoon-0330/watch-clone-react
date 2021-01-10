import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import MovieContainer from "../MovieContainer/MovieContainer";
import styles from "./style.module.css";

const Main = ({ movieApi }) => {
  const [pageOne, setPageOne] = useState({});
  const [pageTwo, setpageTwo] = useState({});
  const [pageThree, setpageThree] = useState({});
  useEffect(() => {
    movieApi.getPopularMovie(1).then(data => {
      data && setResult(data, 1, setPageOne);
    });
    movieApi.getPopularMovie(2).then(data => {
      data && setResult(data, 2, setpageTwo);
    });
    movieApi.getPopularMovie(3).then(data => {
      data && setResult(data, 3, setpageThree);
    });
  }, [movieApi]);

  const setResult = (data, page, setState) => {
    const results = data.results;
    const newResults = {};
    results.forEach((item, index) => {
      newResults[`${page}-${index}`] = item;
    });
    setState(items => {
      const newItems = { ...items, ...newResults };
      return newItems;
    });
  };

  return (
    <div>
      <Helmet>
        <title>watcha</title>
      </Helmet>
      <p className={styles.p}>새로 올라온 작품</p>
      <MovieContainer
        movieApi={movieApi}
        popularMovie={pageOne}
        containerIndex={1}
      />
      <p className={styles.p}>한번 더 볼만한 작품</p>
      <MovieContainer
        movieApi={movieApi}
        popularMovie={pageTwo}
        containerIndex={2}
      />
      <p className={styles.p}>바로 지금 사람들이 특히 많이 보는 작품</p>
      <MovieContainer
        movieApi={movieApi}
        popularMovie={pageThree}
        containerIndex={3}
      />
    </div>
  );
};

export default Main;
