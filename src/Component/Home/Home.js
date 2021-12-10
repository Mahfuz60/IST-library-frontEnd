import React from "react";
import BookCounter from "../BookCounter/BookCounter";
import HomePage from "../HomePage/HomePage";
import NavBar from "../NavBar/NavBar";

function Home(props) {
  return (
    <div>
      <NavBar></NavBar>
      <HomePage></HomePage>
      <BookCounter></BookCounter>
    </div>
  );
}

export default Home;
