import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import AboutMe from "./pages/AboutMe/AboutMe";
import DataAnalysis from "./pages/DataAnalysis/DataAnalysis";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/data-analysis" element={<DataAnalysis />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
