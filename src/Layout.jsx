import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./style.css";
import { useEffect, useState } from "react";
import Loader from "./components/Common/Loader";

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timeoutId = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {isLoading && <Loader position={"fixed"} />}
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
