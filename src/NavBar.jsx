import React from "react";
import { NavLink } from "react-router-dom";
import { BiSolidShoppingBag, BiSolidHome } from "react-icons/bi";
import { BsFillPersonLinesFill, BsFillPersonDashFill } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";

const NavBar = () => {
  const list = [
    { path: "/E-Store/", name: "Home", icon: <BiSolidHome /> },

    {
      path: "/E-Store/account",
      name: "Account",
      icon: <BsFillPersonLinesFill />,
    },
    {
      path: "/E-Store/wishlist/",
      name: "Wishlist",
      icon: <IoDiamondOutline />,
    },
    { path: "/E-Store/cart", name: "cart", icon: <BiSolidShoppingBag /> },
  ];
  return (
    <div className="flex flex-wrap text-white w-full items-center text-lg justify-evenly p-10 font-bold">
      <p className="w-[200px]  text-[2rem] py-5 text-center">E store</p>
      <div className="gap-5 flex flex-wrap justify-evenly">
        {sessionStorage.getItem("id") !== null ? (
          <>
            {list.map((a, i) => {
              return (
                <NavLink
                  className="p-3 px-7 text-center rounded-lg"
                  to={a.path}
                  style={({ isActive }) => ({
                    color: isActive ? "#F87171" : "white",

                    background: isActive ? "white" : "transparent",
                  })}
                >
                  {a.name} {a.icon}
                  {}
                </NavLink>
              );
            })}
            <NavLink
              className="p-3 px-7 text-center rounded-lg"
              onClick={() => {
                sessionStorage.removeItem("id");
              }}
              to={"/E-Store"}
            >
              Sign Out
              <BsFillPersonDashFill />
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
