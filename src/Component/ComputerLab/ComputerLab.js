import React from 'react';
import { Container, Row, Col, Carousel } from "react-bootstrap";
import computer1 from "../../images/computer1.png";
import computer2 from "../../images/computer2.png";
import computer3 from "../../images/computer3.png";
import "./ComputerLab.css"

function ComputerLab(props) {
    return (
        <section className="CseLabBackground py-3">
      <Container>
        <h1 className="py-3">COMPUTER LAB</h1>
        <Row>
          <Col xs={6}>
            <p>
            IST Computer Lab is equipped with all modern computers with latest edition of hardware and software is installed that are relevant to the CSE course curriculum such as Structured Programming, Object Oriented Programming, Data Structure, Algorithm Design, Software Engineering, Database Management System, Networking, Data Communication, and Web Engineering. 
              <br />
              <br />
              The labs consist of around 107 PC’s connected with advanced manageable switches and routers to support high speed connectivity.
            </p>
          </Col>
          <Col xs={6}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="imgCom"
                  src={computer1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="imgCom"
                  src={computer2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="imgCom"
                  src={computer3}
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

export default ComputerLab;