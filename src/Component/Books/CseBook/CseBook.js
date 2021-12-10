import React from "react";
import CseBookCart from "./CseBookCart";
import ObjectPic from "../../../images/ObjectPic.jpg";
import DataStructure from "../../../images/DataStructure.jpg";
import Electrical from "../../../images/Electrical.jpg";
import circuit from "../../../images/circuit.jpg";
import Ansi from "../../../images/Ansi.jpg";
import calculus from "../../../images/calculus.jpg";
import "../Books.css";

function CseBook(props) {
  const cseBooks = [
    {
      id: 1,
      name: "Electrical Technology",
      author: "B.L.Theraja & A.K Theraja",
      coverPic2: Electrical,
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1Wd1ov_Ml3rz2G8TvamsMPJW8YAkcWXbd",
    },
    {
      id: 2,
      name: "Introductory Circuit Analysis",
      author: "Boylestad",
      coverPic2: circuit,
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1hdtZN3qEzS39CjByDSw-NB48V55K2tWG",
    },
    {
      id: 3,
      name: "Object Oriented Programming",
      author: "Balagurusamy",
      coverPic2: ObjectPic,
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1XaYuoLAFE7uTqqJvJWJu9OEeQAQxdZ2Z",
    },
    {
      id: 4,
      name: "Data Structure Algorithm",
      author: "Robers L Kruse",
      coverPic2: DataStructure,
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1RdEqAYjgi1WHIixSdYuxpVris8MULbhQ",
    },
    {
      id: 5,
      name: "Programming In ANSI C",
      author: "Balagurusamy",
      coverPic2: Ansi,
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1ScV9vU-j28a9NlVuJudMnCP04CTUosaD",
    },
    {
      id: 6,
      name: "Integral Calculus",
      author: "B.C. Das & B.N. Mukherjee",
      coverPic2: calculus,
      pdfBook:
        "https://drive.google.com/uc?export=download&id=13BpNFHYoRlY_jEabfgOqUG0h-MfnZkIe",
    },
  ];
  return (
    <section className=" backgroundBooks">
      <div className="mt-3 pt-3">
        <div className="text-center">
          <h2 className="text-light " style={{ fontSize: "65px" }}>
            CSE BookList
          </h2>
        </div>
        <div className="row justify-content-center d-flex">
          {cseBooks?.map((book) => (
            <CseBookCart book={book}></CseBookCart>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CseBook;
