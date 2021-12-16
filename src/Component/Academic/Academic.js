import React from "react";
import "./Academic.css";
import { Container, Row, Col } from "react-bootstrap";

function Academic(props) {
  return (
    <section className="backgroundAcademic py-5">
      <Container>
        <Row>
          <h1 className="text-center py-4">ACADEMIC PROGRAMS</h1>
          <Col xs={3}>
            <h5 className="text-center py-4">Undergraduate Programs</h5>
            <ul>
              <li>
                B.Sc (Hons.) in Electronics and Communication Engineering (ECE)
              </li>
              <li>B.Sc (Hons.) in Computer Science and Engineering (CSE)</li>
              <li>Bachelor of Business Administration (BBA)</li>
            </ul>
          </Col>
          <Col xs={3}>
            <h5 className="text-center py-4">Graduate Programs</h5>
            <ul>
              <li>M.Sc in Computer Science and Engineering (MCSE)</li>
              <li>Master of Business Administration (MBA)</li>
            </ul>
          </Col>
          <Col xs={3}>
            <h5 className="text-center py-4">Diploma Programs</h5>
            <ul>
              <li>Diploma in Computer Engineering</li>
              <li>Diploma in Electrical Engineering</li>
              <li>Diploma in Civil Engineering</li>
              <li>Diploma in Architecture</li>
            </ul>
          </Col>
          <Col xs={3}>
            <h5 className="text-center py-4">
              Study Center, Bangladesh Open University
            </h5>
            <ul>
              <li>Diploma in Computer Science and Application</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Academic;
