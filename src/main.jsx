import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllList from "./components/AllList";

createRoot(document.getElementById("root")).render(
  <Router>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/AllList" element={<AllList />} />
      </Routes>
    </StrictMode>
  </Router>
);
