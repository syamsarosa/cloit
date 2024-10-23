import Sidebar from "../components/sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="grid min-h-screen grid-cols-[auto,1fr]">
      <Sidebar></Sidebar>
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
