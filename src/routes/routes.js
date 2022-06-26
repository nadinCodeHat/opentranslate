import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);

export default routes;
