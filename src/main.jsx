import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllList from "./components/AllList";
import ScrollToTop from "./components/ScrollTop";
import House from "./components/House";
import OwnerDetails from "./components/OwnerDetails";
import Layout from "./components/Layout";

createRoot(document.getElementById("root")).render(
  <Router>
    <StrictMode>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/AllList" element={<AllList />} />
          <Route path="/House/:id" element={<House />} />
          <Route path="/owner/:id" element={<OwnerDetails />} />
        </Routes>
      </Layout>
    </StrictMode>
  </Router>
);
