import React from "react";
import "../BookCounter/BookCounter.css";

function BookCounter(props) {
  return (
    <section className="bookCounter">
      <div className="container">
        <div className="row d-flex text-center py-3">
          <h3>IST Online Library Collection</h3>

          <div className=" bookCount col-md-3 py-5">
            <h5>5000+</h5>
            <h4>Printed Books</h4>
          </div>
          <div className="bookCount col-md-3 py-5">
            <h5>100+</h5>
            <h4>Printed Journal</h4>
          </div>
          <div className="bookCount col-md-3 py-5">
            <h5>1500+</h5>
            <h4>Online E-books</h4>
          </div>
          <div className="bookCount col-md-3 py-5">
            <h5>200+</h5>
            <h4>Online Journal</h4>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookCounter;
