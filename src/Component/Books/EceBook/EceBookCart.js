import { height } from "@mui/system";
import React from "react";

function EceBookCart({ book }) {
  return (
    <div id="eceBooks" className=" col-md-4 col-sm-2 text-center ">
      <div className="card shadow-sm  justify-content-center  m-3">
        <div  className="card-body bg-dark  ">
          <img
            style={{ height: "250px", width: "250px" }}
            src={book.coverPic}
            alt=""
          />
        </div>
        <div style={{ backgroundColor: "gray" }}>
          <h5>{book.name}</h5>
          <h3>{book.author}</h3>
          <a download href={book.pdfBook}>
            <button
              style={{
                backgroundColor: "#FFC207",
                color: "black",
                border: "none",
                padding: "10px",
                width: "200px",
                fontSize: "20px",
                textDecoration: "none",
                marginBottom: "5px",
              }}
            >
              {" "}
              Download
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default EceBookCart;
