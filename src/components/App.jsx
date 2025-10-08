import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="My Blog"/>
      <About
        image="https://via.placeholder.com/150"
        about="Welcome to my blog about learning react"
      />
      <ArticleList post="{blogdata" />
    </div>
  );
}


export default App;
