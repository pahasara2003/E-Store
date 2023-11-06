import Dashboard from "./Dashboard/Dashboard";
import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Forms/SignUp";
import SignIn from "./Forms/SignIn";

const Page = () => {
  return (
    <>
      <Routes>
        <Route path="/E-Store/" element={<HomePage />} />
        <Route path="/E-Store/dashboard">
          <Route index element={<Dashboard page="account" />} />
          <Route path="wishlist" element={<Dashboard page="wishlist" />} />
          <Route path="orders" element={<Dashboard page="orders" />} />
          <Route path="cart" element={<Dashboard page="cart" />} />
        </Route>
        <Route path="/E-Store/sign+In" element={<SignIn />} />

        <Route path="/E-Store/sign+Up" element={<SignUp />} />
      </Routes>{" "}
    </>
  );
};

export default Page;
