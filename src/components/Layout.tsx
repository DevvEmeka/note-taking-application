import { Outlet } from "react-router";
import { SideBar } from "./SideBar";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export const Layout = () => {
  const [hamburger, setHamburger] = useState(false);
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {hamburger ? (
        <div>
          <SideBar />
        </div>
      ) : (
        <div>
          {/* <RxHamburgerMenu /> */}
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 bg-red-100 p-6">
        <Outlet />
      </div>
    </div>
  );
};
