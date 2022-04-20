import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ContactPage from "./routes/ContactPage";
import FaqPage from "./routes/FaqPage";
import PricingPage from "./routes/PricingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
