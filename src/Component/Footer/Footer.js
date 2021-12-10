import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import "./Footer.css"
import mapImg from "../../images/map.png"

function Footer() {

  return (

  <Container fluid style={{background:'#090e11'}}>

  <Row fluid className="top">
  <h5><b>Developed By: Redoy Ahmed | Mahfuz Alam </b></h5>
  </Row>

  <Row className="body">
     <Col xs = {4} className="col" >
     <h3> <b> About Us </b> </h3>
      <h5>The Institute of Science and Technology(IST), is a private institute located at Dhaka, Bangladesh and first affiliated institute with the National University.</h5>
     </Col>

     <Col xs = {4} className="col">
     <h3> <b> Our Clubs </b> </h3>
      <ul className = "unlistedItem" >
        <li> <h5>Electronics Communication and Robotics Club (ECRCc) </h5></li>
        <li><h5>Programming Club of IST (pcIST)</h5></li>
        <li><h5>Carrirer Development Club (CDC)</h5></li>
      </ul>
    </Col>

     <Col xs = {2} className="col">
      <h3> <b> Important Links </b> </h3>
      <ul className = "unlistedItem">
        <a className = "links" href = "https://ist.edu.bd/" target="blank"> <li> <h5> IST Website </h5> </li> </a>
        <a className = "links" href = "https://www.nu.ac.bd/" target="blank"> <li> <h5> National University  </h5> </li> </a>
        <a className = "links" href = "https://nu.ac.bd/results/" target="blank"> <li> <h5> Result Archive  </h5> </li> </a>
        <a className = "links" href = "http://www.nubd.info/prof/student/" target="blank"> <li> <h5> Student Form Fill Up </h5></li> </a>
      </ul>
     </Col>

     <Col className = 'map' >
     <h3> <b>Find Us</b> </h3>
       <a href= "https://goo.gl/maps/TfHgFdH3W2iBC5nA8" target="blank">
       <Image style={{height:'250px', width:"250px"}} src={mapImg} thumbnail />
       </a>

     </Col>
   </Row>

   <Row className="bottom">
   <p>
      &copy; {new Date().getFullYear()} Copyright | Terms and Conditions | All Right Reserved |
    </p>
  </Row>

  </Container>
  )
}

export default Footer