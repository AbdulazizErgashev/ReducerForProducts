import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
// import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className=" border-b-8 border-[#7FAD39] bg-slate-700">
        <nav className="container flex items-center justify-between py-5">
          <Link
            to="/Products"
            className="flex items-center text-[#7FAD39] text-3xl font-bold font-mono cursor-pointer"
          >
            <h1>fruit</h1>
            <span className="text-[#A9A9A9]">And</span>
            <h1>vegetables</h1>
          </Link>
          <ul className="flex items-center gap-x-5 text-2xl text-[#a9a9a9]">
            <li>
              <NavLink to="/Products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/Taymer">Taymer</NavLink>
            </li>
            <li>
              <NavLink to="/CartTable">
                <MdShoppingCart className="text-[#7FAD39]" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
