import React from "react";
import BookCounter from "../BookCounter/BookCounter";
import HomePage from "../HomePage/HomePage";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import TeacherTalk from "../TeacherTalk/TeacherTalk";
import Academic from "../Academic/Academic";
import CentralLibrary from "../CentralLibrary/CentralLibrary";
import ElectronicsLab from "../ElectronicsLab/ElectronicsLab";
import ComputerLab from "../ComputerLab/ComputerLab";
import MakeAdmin from "../Dashboard/MakeAdmin/MakeAdmin";

function Home(props) {
  return (
    <div>
      <NavBar></NavBar>
      <HomePage></HomePage>
      <TeacherTalk></TeacherTalk>
      <Academic></Academic>
      <CentralLibrary></CentralLibrary>
      <ElectronicsLab></ElectronicsLab>
      <ComputerLab></ComputerLab>
      <BookCounter></BookCounter>
      <MakeAdmin></MakeAdmin>
      <Footer></Footer>
    </div>
  );
}

export default Home;
