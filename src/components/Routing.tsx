import { Route, Routes } from "react-router";
import { Layout } from "./Layout";
import App from "../App";
// import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";

function Routing() {
  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<App />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Home />} /> {/* Default route */}
        <Route path="home" element={<Home />} />
        {/* <Route path="settings" element={<Settings />} /> */}
      </Route>
    </Routes>
  );
}

export default Routing;
