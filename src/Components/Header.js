import React from "react";
import logo from "../images/logo.png";
function Header() {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} height="80px" className="d-inline-block align-text-top"/>
        </a>
        <h3>Online voting app</h3>
      </div>
    </nav>
  );
}
export default Header;
