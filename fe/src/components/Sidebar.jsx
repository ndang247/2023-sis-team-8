import React from "react";
import "../css/sidebar.css"; // Make sure to create a corresponding CSS file

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">Logo</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Sidebar;
