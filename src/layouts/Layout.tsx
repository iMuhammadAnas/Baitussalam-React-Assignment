import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center bg-white dark:bg-gray-900">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
