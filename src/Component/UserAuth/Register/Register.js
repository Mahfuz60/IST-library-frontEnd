import React, { useState } from "react";
import { Card, Button, Form, Container, Alert } from "react-bootstrap";
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
    <div className="cardBackGround">
      <Container>
        <Card className="w-80 regContainer">
          <div className="row d-flex aline-item-center justify-content-center mt-4 mb-2 px-5 ">
            <Card.Body className=" col-md-8">
              <h2 className="text-center w-50 ">SignUp</h2>
              <p className="text-center w-50">
                Please fill in this form to create an account!
              </p>
              <Form onSubmit={handleSignInSubmit}>
                <Form.Group onBlur={handleOnBlur} id="name">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    className="mb-2 w-50"
                    type="text"
                    Placeholder="Enter Your Name"
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group onBlur={handleOnBlur} id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    className="mb-2 w-50"
                    Placeholder="Enter Your Email"
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group onBlur={handleOnBlur} id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password"
                    className="mb-2 w-50"
                    Placeholder="Enter Your Password"
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group onBlur={handleOnBlur} id="ConfirmPassword">
                  <Form.Label>ReType Password</Form.Label>
                  <Form.Control type="password"
                    className="mb-2 w-50"
                    Placeholder="  Password Confirmation"
                    required
                  ></Form.Control>
                </Form.Group>
                <Button className="cardBtn w-50 mt-2" type="submit">
                  SIGNUP
                </Button>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", display: "block",marginTop: "20px" }}
                >
                  <Button>Already Registered? Please SIGN IN</Button>
                </Link>
              </Form>
              {/* <p className="w-50 d-flex ">
                Already have an Account?<Link to="/login">Log In</Link>
              </p> */}
            </Card.Body>
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
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default Register;
