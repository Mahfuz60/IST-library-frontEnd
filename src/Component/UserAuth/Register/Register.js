import React, { useState } from "react";
import {
  Card,
  Button,
  Form,
  Container,
  Alert,
  Row,
  Col,
} from "react-bootstrap";
import "../Register/Register.css";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Register() {
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();

  const { user, registerUser, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };
    newLoginData[field] = value;

    setLoginData(newLoginData);
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    if (loginData.password !== loginData.confirmPassword) {
      alert("Password didn't matched!");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, navigate);
  };
  return (
    <section className="cardBackGround ">
      <Container>
        <Row>
          <Col xs={8}>
            <Card className="regContainer mt-5">
              <Card.Body>
                <h2 className="text-center">SIGNUP</h2>
                <h6 className="text-center">
                  Please fill in this form to create an account!
                </h6>

                <Form onSubmit={handleSignInSubmit}>
                  <Form.Group className="py-2">
                    <Form.Control
                      type="text"
                      onBlur={handleOnBlur}
                      id="user-name"
                      placeholder="Enter Your Name"
                      name="name"
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="py-2">
                    <Form.Control
                      type="email"
                      placeholder="Enter Your Email"
                      onBlur={handleOnBlur}
                      name="email"
                      id="user-register-email"
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="py-2">
                    <Form.Control
                      type="password"
                      id="user-register-password"
                      placeholder="Enter Your Password"
                      onBlur={handleOnBlur}
                      name="password"
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="password"
                      id="user-password-confirm"
                      name="confirmPassword"
                      placeholder="ReType Password"
                      onBlur={handleOnBlur}
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Button className="cardBtn " type="submit">
                    SIGNUP
                  </Button>
                  <Link className="btnPara" to="/login">
                    <p>ALREADY REGISTER? PLEASE LOGIN</p>
                  </Link>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {user?.email && (
          <Alert variant="filled" severity="success">
            Registration Successfully Done.
          </Alert>
        )}
        {authError && (
          <Alert variant="filled" severity="error">
            {authError}
          </Alert>
        )}
      </Container>
    </section>
  );
}

export default Register;
