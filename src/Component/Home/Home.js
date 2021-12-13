import React from "react";
import BookCounter from "../BookCounter/BookCounter";
import HomePage from "../HomePage/HomePage";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Register from "../UserAuth/Register/Register";

function Home(props) {
  return (
    <div>
      <NavBar></NavBar>
      <HomePage></HomePage>
      <BookCounter></BookCounter>
      <Register></Register>

      <Footer></Footer>
    </div>
  );
}

export default Home;
