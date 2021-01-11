import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import styles from "./style.module.css";

const HeaderContainer = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, [scroll]);
  const onScroll = event => {
    const top = event.srcElement.scrollingElement.scrollTop;
    setScroll(top);
  };
  return (
    <>
      <div
        className={`${styles.scrollHeader} ${
          scroll < 150 ? styles.hide : styles.show
        }`}
      >
        <Header />
      </div>
      <div className={styles.back}>
        <div className={`${scroll > 150 ? styles.hide : styles.show}`}>
          <Header />
        </div>
      </div>
    </>
  );
};

export default HeaderContainer;
