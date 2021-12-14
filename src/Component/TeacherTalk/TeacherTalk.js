import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import founder from "../../images/founder.jpg";
import "./TeacherTalk.css";

function TeacherTalk(props) {
  return (
    <section className="teacherBackground py-5">
      <Container>
        <h1 className="py-5">Message From The Founder</h1>
        <Row>
          <Col xs={6}>
            <h2>Professor Dr. Shahida Rafique</h2>
            <h4>Chairman & Founder</h4>

            <p>
              Emeritus Professor Dr. Shahida Rafique is the founder and the
              current Chairman of Institute of Science and Technology. <br /><br />
              Previously, she was the Dean of the Faculty of Engineering at the
              University of Dhaka. She completed her Ph.D in 1979 from the
              University of London, and Post Doc in 1985 from the Kyoto
              University of Japan. She founded IST in the presence of Nobel
              Laureate Professor Dr. Abdus Salam.
              <br /><br />
              Research areas she is working on are Communication Engineering,
              High-Speed LAN/WAN, Image Processing, Artificial Intelligence,
              Neural Network, Solar Materials & Renewable Energy Technology,
              etc.
            </p>
          </Col>
          <Col xs={6} md={4}>
            <img className="teacherImg" src={founder} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TeacherTalk;
