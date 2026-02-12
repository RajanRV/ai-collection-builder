import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Common/Header";

function Layout() {
  return (
    <>
      <div className="pt-[64px]">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
