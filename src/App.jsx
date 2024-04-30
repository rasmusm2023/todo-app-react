import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landingpage from "./pages/Landingpage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./pages/Info";
import Todos from "./pages/Todos";

const App = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/info" element={<Info />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
