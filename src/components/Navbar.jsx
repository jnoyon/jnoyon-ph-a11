import React from "react";
import { Link, NavLink } from "react-router-dom";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <div className="border-b border-solid border-gray-300">
      <div className="navbar container mx-auto w-11/12">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <Menu></Menu>
            </ul>
          </div>
          <Link to="/" className="font-bold"> Stock Room </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="flex gap-5">
            <Menu></Menu>
          </div>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
}
