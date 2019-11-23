import React from "react";

const LoadMoreArticlesLink = (props) => (
  <div className="load-more">
    <a href="" onClick={(e) => e.preventDefault()} {...props}>ÎNCARCĂ MAI MULTE ARTICOLE</a>
  </div>
);

export default LoadMoreArticlesLink;
