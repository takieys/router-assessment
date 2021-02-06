import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Welcome from "./Components/Welcome/Welcome";
import Clock from "./Components/Clock/Clock";
import Contact from "./Components/Contact/Contact";
import Navigation from "./Components/navigation/Navigation";
import Jeopardy from "./Components/Jeopardy/Jeopardy";
import notFound from "./Components/notFound/notFound";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Takieya" />}
        />
        <Route path="/welcome/:name" component={person} />

        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route path="/jeopardy" component={Jeopardy} />
        <Route component={notFound} />
      </Switch>
    </div>
  );
}

const person = ({ match }) => <div>Welcome, {match.params.name} !</div>;

export default App;
