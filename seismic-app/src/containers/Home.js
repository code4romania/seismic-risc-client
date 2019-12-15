import React from "react";
import LinkButton from "../components/LinkButton";
import SocialBar from "../components/SocialBar/SocialBar";
import "../App.css";

const Home = () => (
  <div className="App">
    <LinkButton to="/blog" type="primary">
      Blog
    </LinkButton>
    <SocialBar />
  </div>
);

export default Home;
