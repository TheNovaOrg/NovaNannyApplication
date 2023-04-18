import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../components/PageNotFound.js";
import Password from "../components/Password.js";
import Recovery from "../components/Recovery.js";
import Register from "../components/Register.js";
import Reset from "../components/Reset.js";
import Username from "../components/Username.js";
import { ProtectRoute } from "./routeGuards.js";
import Home from "../components/home/Home.js";

export const createRoutes = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      // element: <Username />,
      element: <Home />
    },
    {
      path: "/login",
      element: <Username />
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/password",
      element:
        <ProtectRoute>
          <Password />
        </ProtectRoute>,
    },
    {
      path: "/recoverpassword",
      element: <ProtectRoute>
        <Recovery />
      </ProtectRoute>,
    },
    {
      path: "/resetpassword",
      element: <ProtectRoute>
        <Reset />
      </ProtectRoute>,
    },
    {
      path: '*',
      element: <PageNotFound></PageNotFound>
    }
  ]);

  return router;
}