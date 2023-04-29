import React from "react";
import logo from "../Fill213.png";
import "../style.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="2323" />
      <h4>my travel journal</h4>
    </div>
  );
}
