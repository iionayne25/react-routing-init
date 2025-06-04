import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import DashboardHome from "../pages/dashboard";
import DashboardSettings from "../pages/dashboard/setting";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

export default function MainLayout() {
  return (
    <>
      <nav className="flex p-4  gap-4 bg-slate-100">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "nav-active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "nav-active" : "")}
        >
          Dashboard
        </NavLink>
      </nav>
      <main className="flex w-full m-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard">
            <Route index element={<DashboardHome />} />
            <Route path="setting" element={<DashboardSettings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
