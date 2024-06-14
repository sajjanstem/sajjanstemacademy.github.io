
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Dropdown from "./Dropdown";


const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const navItems = [
    {
      id: 1,
      title: "Home",
      path: "./",
      cName: "nav-item",
    },
    {
      id: 2,
      title: "Exams",
      path: "",
      cName: "nav-item",
    },
    {
      id: 3,
      title: "About Us",
      path: "./aboutus",
      cName: "nav-item",
    },
    {
      id: 4,
      title: "Contact Us",
      path: "./contactus",
      cName: "nav-item",
    },
  ]

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={process.env.PUBLIC_URL + '/assets/icons/logo.png'} alt="g" height="100px" width="100px"/>
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Exams") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}
                  <KeyboardArrowDownIcon/>
                  </Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Header;

