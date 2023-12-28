import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dash/Dashboard";
import Login from "../pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/entrar",
    element: <Login />,
  },
]);

export default router;
