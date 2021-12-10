import React from "react";

function BbaBookCart({ book }) {
  return (
    <div className="col-md-4 col-sm-2 text-center ">
      <div className="card shadow-sm  justify-content-center m-3">
        <div className="card-body bg-dark ">
          <img
            style={{ height: "300px", width: "300px" }}
            src={book.coverPic2}
            alt=""
          />
        </div>
        <div style={{ backgroundColor: "gray" }}>
          <h4>{book.name}</h4>
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
                marginBottom:"5px"
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

export default BbaBookCart;
