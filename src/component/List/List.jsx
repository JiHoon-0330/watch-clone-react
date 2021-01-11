import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import styles from "./style.module.css";

const List = ({ popularMovie, containerIndex }) => {
  const { title, original_title, poster_path } = popularMovie;
  const imgUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "/not.jpeg";
  const { setMovie, setContainer } = useContext(Context);

  const onClick = () => {
    console.log({ ...popularMovie });
    console.log(containerIndex);
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
};

export default List;
