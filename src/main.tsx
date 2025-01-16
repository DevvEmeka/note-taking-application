import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import App from "./App";
import Routing from "./components/Routing";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
       <Routing /> {/* Render Routing */}
    </BrowserRouter>
  </StrictMode>
);
