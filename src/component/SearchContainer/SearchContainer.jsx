import React, { useContext, useEffect } from "react";
import { Context } from "../../Context/Context";
import Detail from "../Detail/Detail";
import List from "../List/List";
import styles from "./style.module.css";

const SearchContainer = ({ movieApi, searchMovie, containerIndex }) => {
  const { container, setContainer } = useContext(Context);
  useEffect(() => {
    setContainer(0);
    window.scrollTo(0, 0);
  }, [searchMovie, setContainer]);

  return (
    <div className={styles.div}>
      <ul className={styles.ul}>
        {searchMovie.map(item => (
          <List
            key={item.id}
            popularMovie={item}
            containerIndex={containerIndex}
          />
        ))}
      </ul>
      {container === containerIndex && <Detail movieApi={movieApi} />}
    </div>
  );
};

export default SearchContainer;
