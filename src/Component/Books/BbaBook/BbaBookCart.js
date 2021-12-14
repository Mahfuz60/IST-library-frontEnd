import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import "../Books.css";

function BbaBookCart({ book }) {
  return (
    <div className=" col-md-4 col-sm-2  text-center ">
      <CardGroup>
        <Card className="justify-content-center card-group">
          <Card.Img
            className="img-fluid  cardPic"
            variant="top"
            src={book.coverPic2}
          />
          <Card.Body className="cardHeader">
            <h6>{book.name}</h6>
            <h6>{book.author}</h6>
          </Card.Body>
          <Card.Footer>
            <a download href={book.pdfBook}>
              <button className="downloadButton ">Download</button>
            </a>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default BbaBookCart;
