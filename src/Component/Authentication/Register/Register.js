import React, { useRef, useState } from "react";
import { Card, Button, Form, Container } from "react-bootstrap";
import "../Register/Register.css";

function Register(props) {
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  //   const { signup } = useAuth()
  //   const [error, setError] = useState("")
  //   const [loading, setLoading] = useState(false)
  //   const history = useHistory()
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
              <Form>
                <Form.Group id="name">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    className="mb-2 w-50"
                    type="text"
                    Placeholder="Enter Your Name"
                    ref={nameRef}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    className="mb-2 w-50"
                    Placeholder="Enter Your Email"
                    ref={emailRef}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    className="mb-2 w-50"
                    Placeholder="Enter Your Password"
                    ref={passwordRef}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group id="ConfirmPassword">
                  <Form.Label>ReType Password</Form.Label>
                  <Form.Control
                    className="mb-2 w-50"
                    Placeholder="  Password Confirmation"
                    ref={passwordConfirmRef}
                    required
                  ></Form.Control>
                </Form.Group>
                <Button className="cardBtn w-50 mt-2" type="submit">
                  SignUp
                </Button>
              </Form>
              <p className="w-50 d-flex ">
                Already have an Account?<b>LogIn</b>
              </p>
            </Card.Body>
          </div>
          {/* <div >
        Already have an Account?<b>LogIn</b>
      </div> */}
        </Card>
      </Container>
    </div>
  );
}

export default Register;
