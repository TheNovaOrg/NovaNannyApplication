import { createBrowserRouter } from "react-router-dom";
import Password from "../components/password.js";
import Register from "../components/register";
import Username from "../components/username.js";

export const createRoutes = () => {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <Username />,
        },
        {
          path: "/password",
          element: <Password />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ]);

    return router;
}