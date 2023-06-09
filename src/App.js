import React from "react";
import "./App.scss";
import Home from "./home/Home";
import About from "./about/About";
import Dashboard from "./dashboard/Dashboard";
import Page from "./page/Page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Page />} />
        </Routes>
      </BrowserRouter>
      <BrowserRouter />
    </div>
  );
}
