import Dashboard from "./Dashboard/Dashboard";
import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";
import { useAuth, useConfirm, useSign } from "./AuthProvider";
import { NavLink } from "react-router-dom";
import SignUp from "./Forms/SignUp";
import SignIn from "./Forms/SignIn";

const Page = () => {
  const Sign = useSign();

  return (
    <>
      <div className="flex flex-wrap text-white w-full items-center text-lg justify-evenly p-10 font-bold">
        <p className="w-[200px]  text-[2rem] py-5 text-center">E store</p>
        <div className="gap-5 flex flex-wrap justify-evenly">
          <NavLink to={"/"}>Home</NavLink>
          {useAuth()() == useConfirm() ? (
            <>
              {" "}
              <NavLink to="/dashboard">Account</NavLink>
              <NavLink to="/dashboard/wishlist">Wishlist</NavLink>
              <NavLink to="/dashboard/cart">cart</NavLink>
              <NavLink to="/dashboard/orders">orders</NavLink>
              <NavLink
                onClick={() => {
                  Sign("null");
                }}
                to={"/"}
              >
                Sign Out
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/sign+In"
                onClick={() => {
                  Sign("23");
                }}
              >
                Sign In
              </NavLink>
              <NavLink to="/sign+Up">Sign Up</NavLink>
            </>
          )}{" "}
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard">
          <Route index element={<Dashboard page="account" />} />
          <Route path="wishlist" element={<Dashboard page="wishlist" />} />
          <Route path="orders" element={<Dashboard page="orders" />} />
          <Route path="cart" element={<Dashboard page="cart" />} />
        </Route>
        <Route path="/sign+In" element={<SignIn />} />

        <Route path="/sign+Up" element={<SignUp />} />
      </Routes>{" "}
    </>
  );
};

export default Page;
