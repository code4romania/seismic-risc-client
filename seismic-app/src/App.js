import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./containers/Home";
import Blog from "./containers/Blog";
import Admin from "./containers/admin/Admin";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/admin/cms/page">
          <Admin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
