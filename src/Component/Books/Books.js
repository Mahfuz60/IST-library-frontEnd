import React from "react";
import EceBook from "./EceBook/EceBook";
import "../../Component/Books/Books.css";
import CseBook from "./CseBook/CseBook";
import BbaBook from "./BbaBook/BbaBook";

function Books(props) {
  return (
    <div>
      <div className="container">
        <EceBook></EceBook>
        <CseBook></CseBook>
        <BbaBook></BbaBook>
      </div>
    </div>
  );
}

export default Books;
