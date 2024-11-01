import React from "react";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="w-full md:w-[80%] max-w-screen-2xl mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
