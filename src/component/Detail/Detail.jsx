import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../Context/Context";
import styles from "./style.module.css";

const Detail = ({ movieApi }) => {
  const { movie, container, setContainer } = useContext(Context);
  const [detail, setDetail] = useState({});
  const divRef = useRef();
  const {
    id,
    title,
    original_title,
    backdrop_path,
    adult,
    overview,
    vote_average,
    release_date
  } = movie;
  const { production_countries, runtime, genres } = detail;

  const imgUrl = backdrop_path
    ? `https://image.tmdb.org/t/p/original${backdrop_path}`
    : "/not.jpeg";
  const imgThumb = backdrop_path
    ? `https://image.tmdb.org/t/p/w200${backdrop_path}`
    : "/not.jpeg";

  const onClick = () => {
    setContainer(false);
  };
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [id, container]);
  useEffect(() => {
    movieApi.getDetailMovie(id).then(data => {
      if (!data) {
        return;
      } else {
        setDetail({ ...data });
      }
    });
  }, [movieApi, id]);

  return (
    <div ref={divRef} className={styles.relative}>
      <div className={styles.container}>
        <button onClick={onClick}>
          <i className="fas fa-times"></i>
        </button>
        <div className={styles.info}>
          <div className={styles.title}>{title || original_title}</div>
          <div className={styles.div}>
            <div className={styles.agerage}>
              <span>예상 별점</span>
              <span className={styles.vote}>
                {(vote_average / 2).toFixed(1)}
              </span>
            </div>
            <div className={styles.agerage}>
              <span>파트너 예상 별점</span>
              <span className={styles.vote}>
                {((vote_average + 0.3) / 2).toFixed(1)}
              </span>
            </div>
            <div className={styles.agerage}>
              <span>평균 별점</span>
              <span className={styles.vote}>
                {((vote_average + 0.5) / 2).toFixed(1)}
              </span>
            </div>
            {adult && <p className={styles.adult}>청불</p>}
          </div>
          <pre className={styles.pre}>{overview}</pre>
          <div className={styles.detail}>
            <div>
              <ul className={styles.genres}>
                {genres &&
                  genres.map((item, index) => (
                    <li key={item.id}>
                      {index < genres.length - 1 ? `${item.name},` : item.name}
                    </li>
                  ))}
              </ul>
              <p className={styles.p}>
                {production_countries &&
                  production_countries[0] &&
                  (genres
                    ? `| ${production_countries[0].name}`
                    : production_countries[0].name)}
              </p>
            </div>
            <div>
              <p className={styles.p}>{release_date || "No Release Date"}</p>
              <p className={styles.p}>
                {" "}
                | {runtime ? `${runtime}min` : "No runtime"}
              </p>
            </div>
          </div>
        </div>
        <div
          className={styles.back}
          style={{
            backgroundImage: `linear-gradient(to left, #0B0C0D00 60%, #0B0C0D 100%),url(${imgUrl}),url(${imgThumb})`
          }}
        ></div>
      </div>
    </div>
  );
};

export default Detail;
