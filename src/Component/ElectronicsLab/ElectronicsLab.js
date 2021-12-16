import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import ece1 from "../../images/ece1.jpg";
import ece2 from "../../images/ece2.jpg";

import "./Electronics.css";

function ElectronicsLab(props) {
  return (
    <section className="eceLabBackground py-3">
      <Container>
        <h1 className="py-3">ECE LAB</h1>
        <Row>
          <Col xs={6}>
            <p>
            Institute of Science & Technology (IST), the first affiliated institution with National University, mainly focuses not only on theoretical education but practical knowledge also. To facilitate this mission, we have built a well-equipped lab for both the students and faculty members. 
              <br />
              <br />
              IST has developed several labs for Electronics, Electrical, Communication, Computer Networking, Microprocessor, and Peripheral labs, etc. We offer lab facilities for the students at any time to work and practice so that they can practice and enrich their practical knowledge.
            </p>
          </Col>
          <Col xs={6}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="imgEce"
                  src={ece1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="imgEce"
                  src={ece2}
                  alt="Second slide"
                />
              </Carousel.Item>
             
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ElectronicsLab;
