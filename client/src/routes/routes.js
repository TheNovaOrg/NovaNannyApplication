import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import Nannies from "../components/Nannies.js";
import NannyDetails from "../components/NannyDetails.js";
import PageNotFound from "../components/PageNotFound.js";
import Password from "../components/Password.js";
import Recovery from "../components/Recovery.js";
import Register from "../components/Register.js";
import Reset from "../components/Reset.js";
import Username from "../components/Username.js";
import { ProtectRoute } from "./routeGuards.js";

export const createRoutes = () => {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Username />,
  //     children: [
  //       {
  //         path: "register",
  //         element: <Register />,
  //       },
  //       {
  //         path: "password",
  //         element:
  //           <ProtectRoute>
  //             <Password />
  //           </ProtectRoute>,
  //       },
  //       {
  //         path: "recoverpassword",
  //         element: <ProtectRoute>
  //           <Recovery />
  //         </ProtectRoute>,
  //       },
  //       {
  //         path: "resetpassword",
  //         element: <ProtectRoute>
  //           <Reset />
  //         </ProtectRoute>,
  //       },
  //       {
  //         path: "/nannies",
  //         children: [
  //           { index: true, element: <Nannies /> },
  //           { path: "nanny/:id", element: <NannyDetails /> }
  //         ]
  //       },
  //     ]
  //   },

  //   // {
  //   //   path: "/nannies",
  //   //   children: [
  //   //     { index: true, element: <Nannies /> },
  //   //     { path: ":id", element: <NannyDetails /> }
  //   //   ]
  //   // },
  //   // {
  //   //   path: "/nannies",
  //   //   element:
  //   //     // <ProtectRoute>
  //   //     <Nannies />,
  //   //   // </ProtectRoute>,
  //   //   children: [
  //   //     {
  //   //       path: "nanny/:id",
  //   //       element:
  //   //         // < ProtectRoute >
  //   //         <NannyDetails />
  //   //       // </ProtectRoute >
  //   //     }
  //   //   ]
  //   // },
  //   {
  //     path: '*',
  //     element: <PageNotFound></PageNotFound>
  //   }
  // ]);


  const router = createBrowserRouter([
    {
      path: "/",
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
        { index: true, element: <Nannies /> },
        { path: "nanny/:name", element: <NannyDetails /> }
      ]
    },
    {
      path: '*',
      element: <PageNotFound></PageNotFound>
    }
  ]);

  return router;
}