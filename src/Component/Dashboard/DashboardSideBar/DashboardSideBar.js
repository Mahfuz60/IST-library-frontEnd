import React from "react";
import { Link } from "react-router-dom";
import "./DashboardSideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faGripHorizontal,
  faUsers,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import AddBook from "../AddBook/AddBook";

const DashboardSideBar = () => {
  return (
    <section
      className="sidebar justify-content-between col-md-2 py-2 "
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/dashboard" className="text-white text-decoration-none">
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/home" className="text-white text-decoration-none">
            <FontAwesomeIcon icon={faCalendar} /> <span>Homepage</span>
          </Link>
        </li>
        <li>
          <Link to="/addBooks"  className="text-white text-decoration-none">
            <FontAwesomeIcon icon={faPlus} /> <span>Add Books</span>
          </Link>
        </li>
        <li>
          <Link to="/manageBook" className="text-white text-decoration-none">
            <FontAwesomeIcon icon={faPlus} /> <span>Manage Book</span>
          </Link>
        </li>
        <li>
          <Link to="/addAdmin" className="text-white text-decoration-none">
            <FontAwesomeIcon icon={faUsers} /> <span>Add Admin</span>
          </Link>
        </li>
        <li className="">
          <Link to="" className="text-white text-decoration-none">
            <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
          </Link>
        </li>
        <Link to="/" className="text-white text-decoration-none">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </ul>
    </section>
  );
};

export default DashboardSideBar;
