import React from "react";
import { useNavigate, Link,NavLink ,Outlet} from "react-router-dom";
import Addvoter from "./Addvoter";
import Addcandidate from "./Addcandidate";
import pool from "./Pool";

function Admindashboard() {
  return (
    <div className="mt-3">
      <ul className="nav nav-pills justify-content-center">
      <li className="nav-item">
          <NavLink className="nav-link" to="pool" >
            Pool
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="addvoter" >
            Add Voter
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="addcandidate" >
            Add Candidate
          </NavLink>
        </li>


      </ul>
      <div className="mt-5">
      <Outlet/>
      </div>
    </div>
  );
}

export default Admindashboard;
