import React from "react";
import Logo from "../img/githubLogo.png";
import { FiLogIn } from "react-icons/fi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="container">
      <img src={Logo} alt="gitHubLogo" />
      <h3>GITHUB KONTOS</h3>
      <div className="buttons">
        <button className="btn btn-outline-success" type="submit">
          <BsFillPersonLinesFill style={{ marginRight: "5px" }} />
          Register
        </button>
        <button className="btn btn-outline-success" type="submit">
          <FiLogIn style={{ marginRight: "5px" }} />
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
