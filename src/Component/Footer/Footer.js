import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <section className="footerBackground">
      <Container fluid>
        <Row fluid className="top">
          <h5>
            <b>Developed By:Md. Redoy Ahmed | Md. Mahfuz Alam </b>
          </h5>
        </Row>

        <Row id="about" className="body">
          <Col xs={3} className="col">
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

          <Col id="contact" xs={2} className="col">
            <h3>
              {" "}
              <b> Quick Links </b>{" "}
            </h3>
            <ul className="unlistedItem">
              <a className="links" href="https://ist.edu.bd/" target="blank">
                {" "}
                <li>
                  {" "}
                  <h6> IST Website </h6>{" "}
                </li>{" "}
              </a>
              <a className="links" href="https://www.nu.ac.bd/" target="blank">
                {" "}
                <li>
                  {" "}
                  <h6> National University </h6>{" "}
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
                  <h6> Result Archive </h6>{" "}
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
                  <h6> Student Form Fill Up </h6>
                </li>{" "}
              </a>
            </ul>
          </Col>

          <Col id="contact" className="contactUs" xs={3}>
            <h3>
              {" "}
              <b>Contacts Us</b>{" "}
            </h3>
            <ul>
              <li>
                <FontAwesomeIcon
                  className="contact-icon"
                  icon={faMapMarkerAlt}
                />
                House # 54, Road # 15/A (Old-26) Dhanmondi (East of Shankar Bus
                Stand) Dhaka-1209.
              </li>
              <li>
                <FontAwesomeIcon className="contact-icon" icon={faPhoneAlt} />
                +88 02-55029352
              </li>
              <li>
                <FontAwesomeIcon className="contact-icon" icon={faPhoneAlt} />
                +88 02-55029353
              </li>
              <li>
                <FontAwesomeIcon
                  className="contact-icon"
                  icon={faEnvelopeOpen}
                />
                info@ist.edu.bd
              </li>
            </ul>
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
