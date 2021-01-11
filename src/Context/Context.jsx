import React, { useState } from "react";

export const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [movie, setMovie] = useState(null);
  const [container, setContainer] = useState(0);
  const [title, setTitle] = useState("");

  return (
    <Context.Provider
      value={{
        movie,
        setMovie,
        container,
        setContainer,
        title,
        setTitle
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
