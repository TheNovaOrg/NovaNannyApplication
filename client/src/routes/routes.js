import { createBrowserRouter } from "react-router-dom";
import AddNanny from "../components/AddNanny.js";
import EditNanny from "../components/EditNanny.js";
import Nannies from "../components/Nannies.js";
import NannyDetails from "../components/NannyDetails.js";
import PageNotFound from "../components/PageNotFound.js";
import Password from "../components/Password.js";
import Recovery from "../components/Recovery.js";
import Register from "../components/Register.js";
import Reset from "../components/Reset.js";
import Username from "../components/Username.js";
import Home from "../components/Home/Home.js";
import { ProtectRoute } from "./routeGuards.js";
import Contact from "../components/Contact.js";
import Parent from "../components/Parent.js";

export const createRoutes = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/parents",
      element: <Parent />,
    },
    {
      path: "/login",
      element: <Username />,
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
      path: "/nannies/*",
      children: [
        {
          index: true,
          element:
            <ProtectRoute>
              <Nannies />
            </ProtectRoute>
        },
        {
          path: "nanny/:name",
          element:
            <ProtectRoute>
              <NannyDetails />
            </ProtectRoute>
        },
        {
          path: "addNanny",
          element:
            <ProtectRoute>
              <AddNanny />
            </ProtectRoute>
        },
        {
          path: "updateNanny",
          element:
            <ProtectRoute>
              <EditNanny />
            </ProtectRoute>
        },
      ]
    },
    {
      path: '*',
      element: <PageNotFound></PageNotFound>
    }
  ]);

  return router;
}