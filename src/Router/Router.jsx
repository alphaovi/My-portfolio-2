import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Routes/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Projects from "../Pages/Projects/Projects";
import Profile from "../Pages/Profile/Profile";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/projects",
            element: <Projects></Projects>
        },
        {
            path: "/about",
            element: <About></About>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        },
        {
            path: "/profile",
            element: <Profile></Profile>
        }
      ]
    },
  ]);

export default router;