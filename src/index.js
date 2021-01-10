import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MovieApi from "./service/MovieApi";
import "@fortawesome/fontawesome-free/js/all.js";
import ContextProvider from "./Context/Context";

const movieApi = new MovieApi();

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App movieApi={movieApi} />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
