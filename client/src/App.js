import { Detail, Form, Home, Landing, About, Update, Page404 } from "./views";
import { Switch, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import style from "./styles/App.module.css";

function App() {
  const location = useLocation();

  return (
    <div className={style.container}>
      {location.pathname !== "/" && <NavBar />}
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/create">
          <Form />
        </Route>

        <Route exact path="/detail/:id">
          <Detail />
        </Route>

        <Route exact path="/update/:id">
          <Update />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
