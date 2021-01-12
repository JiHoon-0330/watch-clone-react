import React, { useContext, memo, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../../Context/Context";
import styles from "./style.module.css";

const Header = memo(() => {
  const { title, setTitle } = useContext(Context);
  const history = useHistory();
  const formRef = useRef();
  const inputRef = useRef();

  const onSubmit = event => {
    event.preventDefault();
    if (!inputRef.current.value) {
      return;
    } else {
      setTitle("");
      history.push(`/search/${inputRef.current.value}`);
    }
  };

  const onChange = () => {
    setTitle(inputRef.current.value);
  };

  return (
    <header className={styles.header}>
      <Link to="/">
        <h1 className={styles.h1}>Watcha</h1>
      </Link>
      <div className={styles.div}>
        <span>
          <i className="fas fa-search"></i>
        </span>
        <form ref={formRef} onSubmit={onSubmit}>
          <input
            ref={inputRef}
            type="text"
            placeholder="제목"
            value={title}
            onChange={onChange}
          />
        </form>
      </div>
    </header>
  );
});

export default Header;
