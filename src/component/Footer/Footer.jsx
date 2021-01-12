import React, { memo } from "react";
import styles from "./style.module.css";

const Footer = memo(() => {
  return (
    <footer>
      <span className={styles.title}>Watcha</span>
      <div className={styles.container}>
        <span className={styles.menu}>개인정보</span>
        <span className={styles.name}>이지훈</span>
        <span className={styles.phone}>010-9262-5026</span>
        <span className={styles.email}>ljihoon0330@gmail.com</span>
      </div>
      <div className={styles.container}>
        <span className={styles.menu}>다른 사이트</span>
        <span className={styles.name}>
          <a
            href="https://store.whale.naver.com/detail/dbiaodjlomkfimfdajcpdgefpplhbche"
            target="_blank"
            rel="noreferrer"
          >
            네이버웨일 확장앱 아!맞다
          </a>
        </span>
        <span className={styles.name}>
          <a
            href="https://jihoon-recipe-app.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            recipe-app
          </a>
        </span>
      </div>
      <div className={styles.container}>
        <span className={styles.menu}>깃허브</span>
        <span className={styles.name}>
          <a
            href="https://github.com/JiHoon-0330/naver-alarm-extensions"
            target="_blank"
            rel="noreferrer"
          >
            네이버웨일 확장앱 아!맞다
          </a>
        </span>
        <span className={styles.name}>
          <a
            href="https://github.com/JiHoon-0330/recipe-app-recat"
            target="_blank"
            rel="noreferrer"
          >
            recipe-app
          </a>
        </span>
      </div>
    </footer>
  );
});

export default Footer;
