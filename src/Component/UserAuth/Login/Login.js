import React, { useState } from "react";
import {
  Form,
  Button,
  Card,
  Alert,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Login(props) {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError } = useAuth;

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleSignInSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };

  // const handleGoogleSignIn = () => {
  //   signInWithGoogle(location, navigate);
  // };

  return (
    <section className="cardBackGround ">
      <Container>
        <Row>
          <Col xs={5}>
            <Card className="regContainer mt-5">
              <Card.Body>
                <h2 className="text-center">LogIn</h2>

                <Form onSubmit={handleSignInSubmit}>
                  <Form.Group onBlur={handleOnChange} id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      className=""
                      Placeholder="Enter Your Email"
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group onBlur={handleOnChange} id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      className=""
                      Placeholder="Enter Your Password"
                      required
                    ></Form.Control>
                  </Form.Group>

                  <Button className="cardBtn " type="submit">
                    LOGIN
                  </Button>
                  <Link to="/register">
                    <Button>New User? Please REGISTER</Button>
                  </Link>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {user?.email && (
          <Alert variant="filled" severity="success">
            You're Signed In.
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

export default Login;
