import React, { useEffect, useState } from "react";
import AllBookCart from "./AllBookCart";

function AllBooks() {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch(`https://enigmatic-cliffs-56694.herokuapp.com/allBooks`)
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        setAllBooks(jsonData);
      });
  }, []);

  return (
    <section className=" backgroundBooks">
      <div className="mt-3 pt-3">
        <div className="text-center">
          <h2 className="text-light " style={{ fontSize: "65px" }}>
            All BookList
          </h2>
        </div>
        <div className="row justify-content-center d-flex  py-3 gy-3">
          {allBooks?.map((book) => (
            <AllBookCart key={book._id} book={book}></AllBookCart>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllBooks;
