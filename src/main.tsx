import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import ScrollTo from "./scrollto";
import Layout from "./layout/layout";
import ProjectDetail from "./components/project-detail";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollTo />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
           <Route path="/project/:name" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
