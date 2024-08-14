import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Inspiration from "./pages/Inspiration.jsx";
import Header from "./components/Header.jsx";
import StartUpProject from "./components/StartUpProject.jsx";
import Hospitality from "./components/Hospitality.jsx";
import Healthcare from "./components/Healthcare.jsx";
import WasteMgmt from "./components/WasteMgmt.jsx";

import "./css/style.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* header */}
        <Header />
        {/* /header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/start-up-project" element={<StartUpProject />} />
          <Route path="/hospitality" element={<Hospitality />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/waste" element={<WasteMgmt />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
