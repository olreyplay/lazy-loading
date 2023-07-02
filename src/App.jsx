import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./HomePage/HomePage"));
const AboutPage = lazy(() => import("./AboutPage/AboutPage"));
const ProductsPage = lazy(() => import("./ProductsPage/ProductsPage"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
  );
};

export default App;
