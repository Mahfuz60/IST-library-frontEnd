import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./HomePage.css";

function HomePage(props) {
  return (
    <section id="home" className="background  py-5">
      <div className="container px-5 ">
        {/* <Form id="searchBar" className="d-flex py-2 ">
          <FormControl
            id="inputSearch"
            type="search"
            placeholder="Search Your Book"
            className="md-2 w-40 "
            aria-label="Search"
          />
          <Button onClick="searchBook()"
            style={{
              marginLeft: "8px",
              padding: "10px",
              fontSize: "25px",
              width: "150px",
              fontWeight: "bold",
            }}
            variant="outline-warning "
          >
            Search
          </Button>
        </Form> */}
        <div className=" row   my-5">
          <div className="homeButton   text-center">
            <Link to="books/eceBooks">
              <button>ECE</button>
            </Link>

            <Link to="books/cseBooks">
              <button>CSE</button>
            </Link>

            <Link to="books/bbaBooks">
              <button>BBA</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
