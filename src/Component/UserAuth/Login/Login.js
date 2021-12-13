import React, { useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
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
    <div className="cardBackGround">
      <Container>
        <Card className="w-80 regContainer">
          <div className="row d-flex aline-item-center justify-content-center mt-4 mb-2 px-5 ">
            <Card.Body className=" col-md-8">
              <h2 className="text-center w-50 ">LogIn</h2>

              <Form onSubmit={handleSignInSubmit}>
                <Form.Group onChange={handleOnChange} id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    className="mb-2 w-50"
                    Placeholder="Enter Your Email"
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group onChange={handleOnChange} id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password"
                    className="mb-2 w-50"
                    Placeholder="Enter Your Password"
                    required
                  ></Form.Control>
                </Form.Group>

                <Button className="cardBtn w-50 mt-2" type="submit">
                  LOGIN
                </Button>
              </Form>
              <p className="w-50  d-block mt-3 ">
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <Button>New User? Please REGISTER</Button>
                </Link>
              </p>
            </Card.Body>
          </div>
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
        </Card>
      </Container>
    </div>
  );
}

export default Login;
