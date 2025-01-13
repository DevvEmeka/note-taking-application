import { Route, Routes } from "react-router";
import { Layout } from "./Layout";
import Home from "../pages/Home";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Nested Route */}
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default Routing;
