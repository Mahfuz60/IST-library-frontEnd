import React from "react";
import BookCounter from "../BookCounter/BookCounter";
import HomePage from "../HomePage/HomePage";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import TeacherTalk from "../TeacherTalk/TeacherTalk";
import Academic from "../Academic/Academic";

function Home(props) {
  return (
    <div>
      <NavBar></NavBar>
      <HomePage></HomePage>
      <TeacherTalk></TeacherTalk>
      <Academic></Academic>
      <BookCounter></BookCounter>
      <Footer></Footer>
    </div>
  );
}

export default Home;
