import React from "react";
import EceBook from "./EceBook/EceBook";
import "../../Component/Books/Books.css";
import CseBook from "./CseBook/CseBook";
import BbaBook from "./BbaBook/BbaBook";
import AllBooks from "../AllBooks/AllBooks";

function Books(props) {

  return (
    <div className="backgroundBooks ">
      <div>
        {/* <EceBook></EceBook>
        <CseBook></CseBook>
        <BbaBook></BbaBook> */}
        <AllBooks></AllBooks>

        
      </div>
    </div>
  );
}

export default Books;
