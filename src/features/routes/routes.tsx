import MainLayout from "../../layouts/MainLayout";
import Home from "../../pages/Home";
import About from "../../pages/About";
import DashboardHome from "../../pages/dashboard";
import DashboardSettings from "../../pages/dashboard/setting";
import NotFound from "../../pages/NotFound";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "/dashboard",
        children: [
          { index: true, element: <DashboardHome /> },
          { path: "setting", element: <DashboardSettings /> },
        ],
      },
    ],
  },
  { path: "*", element: <NotFound /> },
];

export default routes

