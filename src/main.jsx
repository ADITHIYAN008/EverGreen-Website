import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllList from "./components/AllList";
import ScrollToTop from "./components/ScrollTop";
import House from "./components/House";

createRoot(document.getElementById("root")).render(
  <Router>
    <StrictMode>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/AllList" element={<AllList />} />
        <Route path="/House" element={<House />} />
      </Routes>
    </StrictMode>
  </Router>
);
