import React from "react";
import HomePage from "../HomePage/HomePage";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer"

function Home(props) {
  return (
    <div>
      <NavBar></NavBar>
      <HomePage></HomePage>
      <Footer></Footer>
    </div>
  );
}

export default Home;
