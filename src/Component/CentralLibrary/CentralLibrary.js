import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import libSlide1 from "../../images/libSlide1.png";
import libSlide2 from "../../images/libSlide2.png";
import libSlide3 from "../../images/libSlide3.png";
import "./CentralLibrary.css";

function CentralLibrary() {
  return (
    <section className="libBackground py-3">
      <Container>
        <h1 className="py-3">Central Library</h1>
        <Row>
          <Col xs={6}>
            <p>
              Institute of Science and Technology is equipped with a
              well-maintained library housed with books related to business,
              science and technology, including the latest trends. With around
              10,000 books and journals relevant to the curriculum of the
              courses offered at Institute of Science and Technology.
              <br />
              <br />
              Institute of Science and Technology boasts of having the finest
              source of information that enables the students to keep abreast
              with the latest development in their field of study.
            </p>
          </Col>
          <Col xs={6}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="imgCarousel"
                  src={libSlide1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="imgCarousel"
                  src={libSlide2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="imgCarousel"
                  src={libSlide3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default CentralLibrary;
