import React, { useState } from "react";

export const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [movie, setMovie] = useState(null);
  const [container, setContainer] = useState(null);

  return (
    <Context.Provider value={{ movie, setMovie, container, setContainer }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
