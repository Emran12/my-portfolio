import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Home from "../Home/Home";

const Header = () => {
  return (
    <div className="h-14">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar">
            <div className="flex-none lg:hidden">
              <label for="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 hover:text-green-500 hover:rounded-md hover:border-green-300">
              Portfolio
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                <li className="hover:text-green-500">
                  <Link to="#home">Home</Link>
                </li>
                <li className="hover:text-green-500">
                  <Link to="#aboutme">About Me</Link>
                </li>
                <li className="hover:text-green-500">
                  <Link to="#projects">Projects</Link>
                </li>
                <li className="hover:text-green-500">
                  <Link to="#contactme">Contact Me</Link>
                </li>
              </ul>
            </div>
          </div>
          <Home></Home>
        </div>
        <div className="drawer-side">
          <label for="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80">
            <li className="hover:text-green-500">
              <Link to="#home">Home</Link>
            </li>
            <li className="hover:text-green-500">
              <Link to="#aboutme">About Me</Link>
            </li>
            <li className="hover:text-green-500">
              <Link to="#projects">Projects</Link>
            </li>
            <li className="hover:text-green-500">
              <Link to="#contactme">Contact Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
