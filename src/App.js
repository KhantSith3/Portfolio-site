import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";

export default function app() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/feature" element={<Features />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}
