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

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError } = useAuth();

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

  return (
    <section className="cardBackGround ">
      <Container>
        <Row>
          <Col xs={5}>
            <Card className="regContainer mt-5">
              <Card.Body>
                <h2 className="text-center py-3">LOGIN</h2>

                <Form onSubmit={handleSignInSubmit}>
                  <Form.Group className="py-2">
                    <Form.Control
                      type="email"
                      placeholder="Enter Your Email"
                      onBlur={handleOnChange}
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
                      onBlur={handleOnChange}
                      name="password"
                      required
                    ></Form.Control>
                  </Form.Group>

                  <Button className="cardBtn " type="submit">
                    LOGIN
                  </Button>
                  <Link className="btnPara" to="/register">
                    <p>NEW USER? PLEASE REGISTER</p>
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
};

export default Login;
