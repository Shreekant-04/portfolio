import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./style.css";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
