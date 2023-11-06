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
        <Route path="/E-Store/account" element={<Dashboard page={0} />} />
        <Route path="/E-Store/wishlist" element={<Dashboard page={2} />} />
        <Route path="/E-Store/cart" element={<Dashboard page={1} />} />
        <Route path="/E-Store/sign+In" element={<SignIn />} />

        <Route path="/E-Store/sign+Up" element={<SignUp />} />
      </Routes>{" "}
    </>
  );
};

export default Page;
