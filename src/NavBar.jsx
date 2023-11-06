import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex flex-wrap text-white w-full items-center text-lg justify-evenly p-10 font-bold">
      <p className="w-[200px]  text-[2rem] py-5 text-center">E store</p>
      <div className="gap-5 flex flex-wrap justify-evenly">
        <NavLink to={"/E-Store"}>Home</NavLink>
        {sessionStorage.getItem("id") !== null ? (
          <>
            {" "}
            <NavLink to="/E-Store/dashboard">Account</NavLink>
            <NavLink to="/E-Store/dashboard/wishlist">Wishlist</NavLink>
            <NavLink to="/E-Store/dashboard/cart">cart</NavLink>
            <NavLink to="/E-Store/dashboard/orders">orders</NavLink>
            <NavLink
              onClick={() => {
                sessionStorage.removeItem("id");
              }}
              to={"/E-Store"}
            >
              Sign Out
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/E-Store/sign+In">Sign In</NavLink>
            <NavLink to="/E-Store/sign+Up">Sign Up</NavLink>
          </>
        )}{" "}
      </div>
    </div>
  );
};

export default NavBar;
