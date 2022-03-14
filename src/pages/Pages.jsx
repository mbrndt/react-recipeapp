import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/cuisine" element={<Cuisine />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
