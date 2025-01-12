import { Route, Routes } from "react-router";
import { Layout } from "./Layout";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
}

export default Routing;
