import React from "react";
import "./navbar.css";
import logo from "../../assets/phi-logo.png";
import profile from "../../assets/profile.png";
import { Link, Route } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img
        src={logo}
        alt="logo"
        id="left_logo"
        className="logo"
        style={{ maxWidth: "100%", maxHeight: "100px", marginLeft: "-4%" }}
      />
      <div className="desktopMenu">
        <Link
          className="desktopMenuListItem"
          to="/"
          style={{ textDecoration: "none" }}
        >
          Home
        </Link>
        <Link
          className="desktopMenuListItem"
          to="/ExamplePage"
          style={{ textDecoration: "none" }}
        >
          Examples
        </Link>
        <Link
          className="desktopMenuListItem"
          to="/AboutUs"
          style={{ textDecoration: "none" }}
        >
          About Us
        </Link>
      </div>
      <div
        className="loginButtons"
        style={{ display: "flex", alignItems: "center", width: "9%" }}
      >
        <Link
          to="/signup"
          className="desktopMenuListItem"
          style={{
            textDecoration: "none",
            marginLeft: "-10%",
            paddingRight: "0%",
          }}
        >
          Sign In
        </Link>
        <img
          src={profile}
          className="profile"
          style={{ marginLeft: "2%", paddingRight: "40%" }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
