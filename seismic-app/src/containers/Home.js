import React from "react";
import logo from "../logo.svg";
import LinkButton from "../components/LinkButton";
import '../App.css';

const Home = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <LinkButton to="/blog" type="primary">Blog</LinkButton>
      <LinkButton to="/admin/cms/page" type="primary">Admin</LinkButton>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default Home;
