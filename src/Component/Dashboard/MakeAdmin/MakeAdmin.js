import React, { useState } from "react";
import { Container, Form, Alert, Row, Col, Button } from "react-bootstrap";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [successAdmin, setSuccessAdmin] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch(`https://enigmatic-cliffs-56694.herokuapp.com//users/admin`, {
      method: "PUT",
      headers: {
        // 'authorization': `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((jsonData) => {
        if (jsonData.modifiedCount) {
          setSuccessAdmin(true);
        }
      });
    e.preventDefault();
  };
  return (
    <Container className="adminRole py-5">
      <Row>
        <Col xs={7}>
          <h3>Make Admin</h3>
          <Form onSubmit={handleAdminSubmit}>
            <Form.Control
              onChange={handleOnBlur}
              className="w-100"
              type="text"
              placeholder="Enter Your Email" required
            />
            <br />
          </Form>
          <Button type="submit">MakeAdmin</Button>
          {successAdmin && (
            <Alert variant="filled" severity="success">
              Admin Role Assigned.
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MakeAdmin;
