import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import styles from "./style.module.css";

const HeaderContainer = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, [scroll]);
  const onScroll = event => {
    setScroll(event.srcElement.scrollingElement.scrollTop);
  };
  return (
    <>
      <div
        className={`${styles.scrollHeader} ${
          scroll < 200 ? styles.hide : styles.show
        }`}
      >
        <Header />
      </div>
      <div className={styles.back}>
        <Header />
      </div>
    </>
  );
};

export default HeaderContainer;
