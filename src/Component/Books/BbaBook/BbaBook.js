import React from "react";
import computer from "../../../images/computer.png";
import BbaBookCart from "./BbaBookCart";
import "../Books.css";

function BbaBook(props) {
  const bbaBooks = [
    {
      id: 1,
      name: "Introduction to Computer",
      author: "Peter Norton",
      coverPic2: computer,
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1qFdmTu4EhEXmNxNhqRGSSXFCHwK5qZx3",
    },
    {
      id: 2,
      name: "",
      author: "",
      coverPic2: "",
    },
    {
      id: 3,
      name: "",
      author: "",
      coverPic2: "",
    },
    {
      id: 4,
      name: "",
      author: "",
      coverPic2: "",
    },
    {
      id: 5,
      name: "",
      author: "",
      coverPic2: "",
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1ScV9vU-j28a9NlVuJudMnCP04CTUosaD",
    },
    {
      id: 6,
      name: "",
      author: "",
      coverPic2: "",
      pdfBook:
        "https://drive.google.com/uc?export=download&id=13BpNFHYoRlY_jEabfgOqUG0h-MfnZkIe",
    },
  ];
  return (
    <section className=" backgroundBooks">
      <div className="mt-3 pt-3">
        <div className="text-center">
          <h2 className="text-light " style={{ fontSize: "65px" }}>
            BBA BookList
          </h2>
        </div>
        <div className="row justify-content-center d-flex">
          {bbaBooks?.map((book) => (
            <BbaBookCart book={book}></BbaBookCart>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BbaBook;
