import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchContainer from "../SearchContainer/SearchContainer";
import styles from "./style.module.css";

const Search = ({ movieApi }) => {
  const { title } = useParams();
  const [newArr, setNewArr] = useState(false);

  useEffect(() => {
    movieApi.getSearchMovie(title).then(data => {
      if (!data) {
        return;
      } else {
        const newPageOne = [...data.results];
        const arr = [];
        while (newPageOne.length > 0) {
          arr.push(newPageOne.splice(0, 7));
        }
        setNewArr(arr);
      }
    });
  }, [movieApi, title]);

  return (
    <div>
      <p className={styles.p}>'{title}' 검색 결과</p>
      {newArr &&
        newArr.map((item, index) => {
          return (
            <SearchContainer
              key={index}
              movieApi={movieApi}
              searchMovie={item}
              containerIndex={index + 1}
            />
          );
        })}
    </div>
  );
};

export default Search;
