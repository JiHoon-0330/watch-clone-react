import React from "react";
import styles from "./style.module.css";

const Header = () => {
  return (
    <div className={styles.back}>
      <header className={styles.header}>
        <h1 className={styles.h1}>Watcha</h1>
        <div className={styles.div}>
          <span>
            <i className="fas fa-search"></i>
          </span>
          <input type="text" placeholder="제목" />
        </div>
      </header>
    </div>
  );
};

export default Header;
