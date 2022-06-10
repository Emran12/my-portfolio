import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex justify-end space-x-12 p-3 ml-12 mr-6">
        <Link to="/home">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/aboutme">About Me</Link>
        <Link to="/contactme">Contact Me</Link>
      </div>
    </div>
  );
};

export default Header;
