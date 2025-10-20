import { Outlet } from "react-router";
import Navbar from "../components/atoms/navbar/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default RootLayout