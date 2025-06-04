import { Route, Routes } from "react-router-dom";
import routes from "./features/routes/routes";
import Home from "./pages/Home";
import About from "./pages/About";
import DashboardHome from "./pages/dashboard";
import DashboardSettings from "./pages/dashboard/setting";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";

function App() {
  return <>
  <MainLayout/> 
  </>
  
  
}

export default App;
