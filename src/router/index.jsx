import { createBrowserRouter, redirect } from "react-router";
import MyHome from "../pages/Home";
import About from "../pages/About";
import User from "../pages/User";
import RootLayout from "../layouts/RootLayout";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: () => {
      if (!localStorage.access_token) { // belum login
        return redirect("/login")
      }
      return null
    },
    children: [
      {
        path: "/",
        Component: MyHome,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/users/:userId",
        element: <User />,
      },
    ],
  },
  {
    path: "/login",
    loader: () => {
      if (localStorage.access_token) { // sudah login
        return redirect("/")
      }
      return null
    },
    element: <Login />,
  },
]);
