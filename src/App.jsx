import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer/Footer";
import HeaderContainer from "./component/HeaderContainer/HeaderContainer";
import Main from "./component/Main/Main";
import Search from "./component/Search/Search";

function App({ movieApi }) {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderContainer />
        <Switch>
          <Route path="/" exact>
            <Main movieApi={movieApi} />
          </Route>
          <Route path="/search/:title">
            <Search movieApi={movieApi} />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
