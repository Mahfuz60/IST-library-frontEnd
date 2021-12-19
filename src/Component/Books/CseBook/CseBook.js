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
    {
      name: "Web Design",
      author: "Thomas A.Powell",
      coverPic2: "https://i.ibb.co/gDFhvWT/web-Design.png",
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1iH5cl8uCO07DS914ERgU-TVTVUrLrHsS",
    },
    {
      name: "Logic Program Synthesis ",
      author: "John Gallagher",
      coverPic2: "https://i.ibb.co/4Y3863N/logic-Program.png",
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1E3NskYBqbdeAFb8nmm9-gcGl7GypAbFY",
    },
    {
      name: "Digital System",
      coverPic2: "https://i.ibb.co/qYT1JwX/digital-System.jpg",
      author: "Neal S. Widmer",
      pdfBook:
        "https://drive.google.com/file/d/1kx9a_pCnQrex5ANTl2ePNRQ7qHRF44iN/view?usp=sharing",
    },
    {
      name: "Digital Signal Processing",
      coverPic2: "https://i.ibb.co/WFnGhs4/digital-Signal.png",
      author: " Monson H. Hayes",
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1MJfVnYwCwAyiMoXJjUgwk7gpeDhArjsy",
    },

    {
      name: "Reliability of Computer System",
      coverPic2: "https://i.ibb.co/8rKYjy3/reliability.jpg",
      author: "Martin L.Shoomon",
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1SmtohfsEJZzYRg8URANOlYtD0WQxmf-R",
    },
    {
      name: "NETWORK SECURITY ESSENTIALS",
      coverPic2: "https://i.ibb.co/JnJrM6m/network.jpg",
      author: "William Stallings",
      pdfBook:
        "https://drive.google.com/uc?export=download&id=11ssOysN6GXGJPYZ7lR3Es-3fWZrT5rpC",
    },
    {
      name: "Computer Organization & Architecture",
      coverPic2: "https://i.ibb.co/wLDSZpr/architecture.jpg",
      author: "William Stallings",
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1B57Xjwe4Ud3FIiR8_sTGSu3-_l2qKLyL",
    },
    {
      name: "Communication System",
      coverPic2: "https://i.ibb.co/vQFM04D/communication.jpg",
      author: "Simon Haykin",
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1RMlQeHBUjsAymde9iL9SProL-OMxWYiR",
    },
    {
      name: "Electronic Device & Circuit",
      coverPic2: "https://i.ibb.co/WpCD0vB/commication-Device.jpg",
      author: "R.Boylestad",
      pdfBook:
        "https://drive.google.com/file/d/1RIhThCr6DBlmLsVsNb_UmLBUMz1x-5nQ/view?usp=sharing",
    },
    {
      name: "Linear Control System",
      coverPic2: "https://i.ibb.co/wRdqR8J/linear-Control.png",
      author: "John J. D`Azzo",
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1h8cT3GiqCs5Iy2xPoDk0xKtrfaIrlwM9",
    },
    {
      name: "Mobile Antenna System",
      coverPic2: "https://i.ibb.co/ypDbz2X/mobile-Antena.png",
      author: "Kyohei Fujimoto",
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1P2jvJCxxeQQ9aoFy7Y50axpAk58yRTrD",
    },
    {
      name: "Computer Organization & Architecture",
      coverPic2: "https://i.ibb.co/wLDSZpr/architecture.jpg",
      author: "William Stallings",
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1B57Xjwe4Ud3FIiR8_sTGSu3-_l2qKLyL",
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
        <div className="row justify-content-center d-flex gy-3">
          {cseBooks?.map((book) => (
            <CseBookCart book={book}></CseBookCart>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CseBook;
