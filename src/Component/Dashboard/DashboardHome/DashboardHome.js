import React from "react";
import "./DashboardHome.css";
import { Container } from "react-bootstrap";
import DashboardSideBar from "../DashboardSideBar/DashboardSideBar";


function DashboardHome(props) {
  return (
    <section className="dashboardBackground">
      <DashboardSideBar></DashboardSideBar>
      
      <Container className="py-2">
        <h2>Welcome To Our Library Dashboard</h2>
        
        
      </Container>
    </section>
  );
}

export default DashboardHome;
