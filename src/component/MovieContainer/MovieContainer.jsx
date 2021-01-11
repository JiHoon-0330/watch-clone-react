import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../Context/Context";
import Detail from "../Detail/Detail";
import List from "../List/List";
import styles from "./style.module.css";

const MovieContainer = ({ movieApi, popularMovie, containerIndex }) => {
  const [index, setIndex] = useState(0);
  const { container, setContainer } = useContext(Context);

  useEffect(() => {
    setContainer(0);
  }, [setContainer]);

  const onClickNext = () => {
    setIndex(index => {
      const newIndex = index + 1;
      return newIndex > 2 ? 2 : newIndex;
    });
  };
  const onClickPrev = () => {
    setIndex(index => {
      const newIndex = index - 1;
      return newIndex < 0 ? 0 : newIndex;
    });
  };
  return (
    <>
      <div className={styles.div}>
        <div className={styles.relative}>
          <ul className={`${styles.ul} index${index}`}>
            {Object.keys(popularMovie).map(item => (
              <List
                key={item}
                popularMovie={popularMovie[item]}
                containerIndex={containerIndex}
              />
            ))}
          </ul>
          <button
            className={`${styles.button} ${styles.prev} ${
              index === 0 ? styles.hidden : ""
            }`}
            onClick={onClickPrev}
          >
            <span>
              <i className="fas fa-angle-left"></i>
            </span>
          </button>
          <button
            className={`${styles.button} ${styles.next} ${
              index === 2 ? styles.hidden : ""
            }`}
            onClick={onClickNext}
          >
            <span>
              <i className="fas fa-angle-right"></i>
            </span>
          </button>
        </div>
        {container === containerIndex && <Detail movieApi={movieApi} />}
      </div>
    </>
  );
};

export default MovieContainer;
