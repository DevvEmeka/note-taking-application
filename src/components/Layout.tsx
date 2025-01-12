import { Outlet } from "react-router";
import { SideBar } from "./SideBar";

export const Layout = () => {
  return (
    <div className="w-full">
      <div className=" flex w-full">
        <SideBar />
        <div className="ml-32">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
