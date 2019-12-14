import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Blog from "./containers/Blog";
import Footer from "./components/Footer";
import Terms from "./containers/Terms";
import Policy from "./containers/Policy";

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
        <Route path="/termeni-si-conditii">
          <Terms />
        </Route>
        <Route path="/politica-de-confidentialitate">
          <Policy />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
