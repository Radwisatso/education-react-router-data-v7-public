import { Outlet } from "react-router";
import NavigationBar from "../components/Navbar";

export default function RootLayout() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}
