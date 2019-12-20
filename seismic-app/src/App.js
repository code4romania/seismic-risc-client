import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./containers/home"
import Blog from "./containers/blog"

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
      </Switch>
    </Router>
  )
}

export default App
