import React, { useContext, memo } from "react";
import { Context } from "../../Context/Context";
import styles from "./style.module.css";

const List = memo(({ popularMovie, containerIndex }) => {
  const { title, original_title, poster_path } = popularMovie;
  const imgUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "https://user-images.githubusercontent.com/58219394/104280490-5da5dc80-54ef-11eb-93db-a6d065601979.jpeg";
  const { setMovie, setContainer } = useContext(Context);

  const onClick = () => {
    setMovie({ ...popularMovie });
    setContainer(containerIndex);
  };

  return (
    <>
      <li className={styles.li} onClick={onClick}>
        <span
          className={styles.img}
          style={{ backgroundImage: `url(${imgUrl})` }}
        />
        <p className={styles.p}>{title || original_title}</p>
      </li>
    </>
  );
});

export default List;
