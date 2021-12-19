import React from "react";
import Ansi from "../../../images/Ansi.jpg";
import biomedical from "../../../images/biomedical.jpg";
import circuit from "../../../images/circuit.jpg";
import Electrical from "../../../images/Electrical.jpg";
import dataCom from "../../../images/dataCom.jpg";
import calculus from "../../../images/calculus.jpg";
import EceBookCart from "./EceBookCart";
import "../Books.css";

function EceBook(props) {
  const eceBooks = [
    {
      id: 1,
      name: "Electrical Technology",
      author: "B.L.Theraja & A.K Theraja",
      coverPic: Electrical,
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1Wd1ov_Ml3rz2G8TvamsMPJW8YAkcWXbd",
    },
    {
      id: 2,
      name: "Introductory Circuit Analysis",
      author: "Boylestad",
      coverPic: circuit,
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1hdtZN3qEzS39CjByDSw-NB48V55K2tWG",
    },
    {
      id: 3,
      name: "Data Communication and Networking",
      author: "Forouzan",
      coverPic: dataCom,
      pdfBook:
        "https://drive.google.com/uc?export=download&id=12Cc0Ru1n-gn9SQ6EtvgLMDcingzV0huk",
    },
    {
      id: 4,
      name: "Biomedical Instrumentation",
      author: "R.S. Khandpur",
      coverPic: biomedical,
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1IMefsYigxWWGGvh549RgKgs1dngvuiCk",
    },
    {
      id: 5,
      name: "Programming In ANSI C",
      author: "Balagurusamy",
      coverPic: Ansi,
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1ScV9vU-j28a9NlVuJudMnCP04CTUosaD",
    },
   
    {
      
      name: "Integral Calculus",
      author: "B.C. Das & B.N. Mukherjee",
      coverPic: calculus,
      pdfBook:
        "https://drive.google.com/uc?export=download&id=13BpNFHYoRlY_jEabfgOqUG0h-MfnZkIe",
    },
    {
      name: "Modern Physics",
      coverPic: "https://i.ibb.co/RBZZwVR/modern-Physics.png",
      author: "William Sevin",
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1hdtZN3qEzS39CjByDSw-NB48V55K2tWG",
    },
    {
      name: "Mobile Antenna System",
      coverPic: "https://i.ibb.co/ypDbz2X/mobile-Antena.png",
      author: "Kyohei FUjimoto",
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1P2jvJCxxeQQ9aoFy7Y50axpAk58yRTrD",
    },

    {
      name: "High Speed Optical Fiber",
      coverPic: "https://i.ibb.co/VqqbGNv/high-Speed.png",
      author: "Jianjun Yu • Nan Chi",
      pdfBook:
        "https://drive.google.com/file/d/1_heJy7vTeWo4Dm7sdZ8DzmxOcDPEysS7/view?usp=sharing",
    },
    {
      name: "Analog & Digital Circuit",
      coverPic: "https://i.ibb.co/RcyR46n/analog-To-Digital.jpg",
      author: "Jerry Luecke",
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1fyIfa2AXBORIERTcQW5x-mevtRIXP0sp",
    },
    {
      name: "Fundamental of Physics",
      coverPic: "https://i.ibb.co/6tvQchw/fundamental.jpg",
      author: "Jear Walker",
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1Bcm1AI85rjtt8kvsWz1CFGOdayaW6zso",
    },
    {
      name: "Analog & Digital Control System",
      coverPic: "https://i.ibb.co/kqtnwTf/control-System.jpg",
      author: "Chi-Tisong Chen",
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1PNTMCKHLSEd_57wU12vECb-TRxdNPwKE",
    },
    {
      name: "Linear Control System",
      coverPic: "https://i.ibb.co/wRdqR8J/linear-Control.png",
      author: "John J. D`Azzo",
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1h8cT3GiqCs5Iy2xPoDk0xKtrfaIrlwM9",
    },
    {
      name: "Mobile Antenna System",
      coverPic: "https://i.ibb.co/ypDbz2X/mobile-Antena.png",
      author: "Kyohei Fujimoto",
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1P2jvJCxxeQQ9aoFy7Y50axpAk58yRTrD",
    },
    {
      name: "Computer Organization & Architecture",
      coverPic: "https://i.ibb.co/wLDSZpr/architecture.jpg",
      author: "William Stallings",
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1B57Xjwe4Ud3FIiR8_sTGSu3-_l2qKLyL",
    },
    {
      name: "Communication System",
      coverPic: "https://i.ibb.co/vQFM04D/communication.jpg",
      author: "Simon Haykin",
      pdfBook:
        "https://drive.google.com/uc?export=download&id=1RMlQeHBUjsAymde9iL9SProL-OMxWYiR",
    },
    {
      name: "Electronic Device & Circuit",
      coverPic: "https://i.ibb.co/WpCD0vB/commication-Device.jpg",
      author: "R.Boylestad",
      pdfBook:
        "https://drive.google.com/file/d/1RIhThCr6DBlmLsVsNb_UmLBUMz1x-5nQ/view?usp=sharing",
    },
  ];

  return (
    <section className=" backgroundBooks">
      <div className="mt-3 pt-3">
        <div className="text-center">
          <h2 className="text-light " style={{ fontSize: "65px" }}>
            ECE BookList
          </h2>
        </div>
        <div className="row justify-content-center d-flex py-3 gy-3">
          {eceBooks?.map((book) => (
            <EceBookCart to="/eceBook" book={book}></EceBookCart>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EceBook;
