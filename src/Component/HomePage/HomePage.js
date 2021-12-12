import React from "react";
import { Button, Form, FormControl, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import slide1 from "../../images/slide1.jpeg";
import slide2 from "../../images/slide2.jpeg";
import slide3 from "../../images/slide3.jpeg";

import "./HomePage.css";

function HomePage(props) {
  return (
    <section id="home" className="background  py-5">
      <div className="container px-5 ">
        <Form id="searchBar" className="d-flex py-2 ">
          <FormControl
            id="inputSearch"
            type="search"
            placeholder="Search Your Book"
            className="md-2 w-40 "
            aria-label="Search"
          />
          <Button
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
        </Form>
        <div className="container row  my-5">
          <div className="homeButton  text-center">
            <div className="d-flex px-5 ">
              <div>
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
        </div>
        <div>
          <Carousel variant="light">
            <Carousel.Item>
              <img
                className="d-block w-70 h-25"
                src={slide1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-70 h-25 "
                src={slide2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-70 h-35"
                src={slide3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
