import { Route, Routes } from "react-router";
import { Layout } from "./Layout";
import App from "../App";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
      </Route>
    </Routes>
  );
}

export default Routing;
