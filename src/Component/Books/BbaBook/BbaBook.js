import React from "react";
import computer from "../../../images/computer.png";
import fundamental from "../../../images/fundamental.png";
import marketing from "../../../images/marketing.png";
import economics from "../../../images/economics.jpg";
import financial from "../../../images/financial.jpg";
import statistics from "../../../images/statistics.jpg";
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
      name: "Fundamentals of Corporate Finance",
      author: "Richard A. Brealey",
      coverPic2: fundamental,
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1xISPTT5MoBl03iY3FUsYJPc8myihMIhY",
    },
    {
      id: 3,
      name: "Marketing Management",
      author: "Philip Kotler",
      coverPic2: marketing,
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1XFn_M-x6EFMVPmYK4ch2bPi9EGrmedrF",
    },
    {
      id: 4,
      name: "Economics Micro & Macro",
      author: "Ron PirayOff",
      coverPic2: economics,
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1JyINDOflGu7L4PuRVNwy6smd-zyGSZT9",
    },
    {
      id: 5,
      name: "Financial Management and Real Options",
      author: "Jack Broyles",
      coverPic2: financial,
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1W-J0PtqnCnpkfyU8QBwjh7DBJ8qH_Mck",
    },
    {
      id: 6,
      name: " Environmental Science and Management",
      author: "Bryan F.J. Manly",
      coverPic2: statistics,
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1HHuAaki957pp1gNiuvZQsyPvF4-xeppc",
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
        <div className="row justify-content-center d-flex  py-3 gy-3">
          {bbaBooks?.map((book) => (
            <BbaBookCart book={book}></BbaBookCart>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BbaBook;
