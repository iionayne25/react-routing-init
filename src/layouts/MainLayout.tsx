import { NavLink, Outlet } from "react-router-dom";

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
      <main className="flex w-full">
        <Outlet />
      </main>
    </>
  );
}
