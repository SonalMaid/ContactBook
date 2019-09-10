import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import ContactUs from   "./ContactUs";
import UserList from "./UserList";

import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs value={location.pathname}>
                <Tab label="Home" component={Link} to="/" />
                <Tab label="About" component={Link} to="/about" />
                <Tab label="Contact" component={Link} to="/contact" />
              </Tabs>
              <Switch>
                <Route path="/" component={Home} exact></Route>
                <Route path="/about" component={About} exact></Route>
                <Route path="/contact" component={ContactUs} exact></Route>
                <Route path="/list" component={UserList} exact></Route>
              </Switch>
            </Fragment>
          )}
        />
      </div>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
