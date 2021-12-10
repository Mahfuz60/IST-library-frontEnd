import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Footer.css";
import mapImg from "../../images/map.png";

function Footer() {
  return (
    <section className="footerBackground">
      <Container fluid>
        <Row fluid className="top">
          <h5>
            <b>Developed By:Md. Redoy Ahmed || Md. Mahfuz Alam </b>
          </h5>
        </Row>

        <Row className="body">
          <Col xs={4} className="col">
            <h3>
              {" "}
              <b> About Us </b>{" "}
            </h3>
            <p>
              Institute of Science and Technology (IST), affiliated with
              National University, Bangladesh, is celebrating its 29th
              anniversary this year. Over the last decade, IST has earned local
              and global reputation by creating.....
              <a className="details" href="https://ist.edu.bd/about-ist/">
                [Read More]
              </a>
            </p>
          </Col>

          <Col xs={4} className="col">
            <h3>
              {" "}
              <b> Our Clubs </b>{" "}
            </h3>
            <ul className="unlistedItem">
              <li>
                {" "}
                <h6>
                  Electronics Communication and Robotics Club IST (ECRC IST){" "}
                </h6>
              </li>
              <li>
                <h6>Programming Club of IST (PCIST)</h6>
              </li>
              <li>
                <h6>Business and Communication Club(BCC)</h6>
              </li>
              <li>
                <h6>Carrier Development Club (CDC)</h6>
              </li>
            </ul>
          </Col>

          <Col xs={2} className="col">
            <h3>
              {" "}
              <b> Quick Links </b>{" "}
            </h3>
            <ul className="unlistedItem">
              <a className="links" href="https://ist.edu.bd/" target="blank">
                {" "}
                <li>
                  {" "}
                  <p> IST Website </p>{" "}
                </li>{" "}
              </a>
              <a className="links" href="https://www.nu.ac.bd/" target="blank">
                {" "}
                <li>
                  {" "}
                  <p> National University </p>{" "}
                </li>{" "}
              </a>
              <a
                className="links"
                href="https://nu.ac.bd/results/"
                target="blank"
              >
                {" "}
                <li>
                  {" "}
                  <p> Result Archive </p>{" "}
                </li>{" "}
              </a>
              <a
                className="links"
                href="http://www.nubd.info/prof/student/"
                target="blank"
              >
                {" "}
                <li>
                  {" "}
                  <p> Student Form Fill Up </p>
                </li>{" "}
              </a>
            </ul>
          </Col>

          <Col className="map">
            <h3>
              {" "}
              <b>Find Us</b>{" "}
            </h3>
            <a href="https://goo.gl/maps/TfHgFdH3W2iBC5nA8" target="blank">
              <Image
                style={{ height: "300px", width: "300px" }}
                src={mapImg}
                thumbnail
              />
            </a>
          </Col>
        </Row>

        <Row className="bottom">
          <p>
            &copy; {new Date().getFullYear()} Copyright | Terms and Conditions |
            All Right Reserved |
          </p>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;
