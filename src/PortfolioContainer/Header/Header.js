import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <div>
      <div className="flex justify-end space-x-12 p-3 ml-12 mr-6">
        <Link to="/">Home</Link>
        <Link to="#projects">Projects</Link>
        <Link to="#aboutme">About Me</Link>
        <Link to="#contactme">Contact Me</Link>
      </div>
    </div>
  );
};

export default Header;
