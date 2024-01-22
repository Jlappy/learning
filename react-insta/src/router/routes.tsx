import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login";
import Register from "../pages/register";

const routes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];
export default routes;
