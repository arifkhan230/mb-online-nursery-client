import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-primary-bg min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
