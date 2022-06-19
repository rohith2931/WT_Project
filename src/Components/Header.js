import React from "react";
import logo from "../images/logo.png";
function Header() {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} height="80px" className="d-inline-block align-text-top"/>
        </a>
        <h3 className="text-warning">Online voting app</h3>
      </div>
    </nav>
  );
}
export default Header;
