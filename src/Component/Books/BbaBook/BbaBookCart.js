import React from "react";
import { CardGroup, Card } from "react-bootstrap";

function BbaBookCart({ book }) {
  return (
    <div className=" col-md-4 col-sm-2  text-center ">
      {/* <div style={{height: '450px'}} className="card shadow-sm  justify-content-center m-3 ">
        <div className="card-body bg-dark ">
          <img className="img-fluid"
            style={{ height: "300px", width: "350px" }}
            src={book.coverPic2}
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
                marginBottom:"5px"
              }}
            >
              {" "}
              Download
            </button>
          </a>
        </div>
      </div> */}
      <CardGroup>
        <Card>
          <Card.Img
            style={{ height: "250px" }}
            className="img-fluid"
            variant="top"
            src={book.coverPic2}
          />
          <Card.Body>
            <Card.Title>{book.name}</Card.Title>
            <Card.Text>{book.author}</Card.Text>
          </Card.Body>
          <Card.Footer>
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
           
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default BbaBookCart;
