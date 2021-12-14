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

  const { user, registerUser, authError } = useAuth;

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };
    newLoginData[field] = value;

    setLoginData(newLoginData);
  };

  const handleSignInSubmit = (e) => {
    if (loginData.password !== loginData.confirmPassword) {
      alert("Password didn't matched!");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, navigate);
    e.preventDefault();
  };
  return (
    <section className="cardBackGround ">
      <Container>
        <Row>
          <Col xs={5}>
            <Card className="regContainer mt-5">
              <Card.Body>
                <h2 className="text-center">SignUp</h2>
                <p className="text-center">
                  Please fill in this form to create an account!
                </p>
                <Form onSubmit={handleSignInSubmit}>
                  <Form.Group onBlur={handleOnBlur} id="name">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                      className=""
                      type="text"
                      Placeholder="Enter Your Name"
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group onBlur={handleOnBlur} id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      className=""
                      Placeholder="Enter Your Email"
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group onBlur={handleOnBlur} id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      Placeholder="Enter Your Password"
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group id="ConfirmPassword">
                    <Form.Label>ReType Password</Form.Label>
                    <Form.Control type="password"
                      className=""
                      Placeholder="  Password Confirmation"
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Button className="cardBtn " type="submit">
                    SIGNUP
                  </Button>
                  <Link to="/login">
                    <Button>Already Registered? Please SIGN IN</Button>
                  </Link>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {user?.email && (
          <Alert variant="filled" severity="success">
            Registration Successfully DOne.
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
