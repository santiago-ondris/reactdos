import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio"
import ProductDetailPage from './pages/ProductDetailPage';
import CategoryPage from './pages/CategoryPage';
import productsData from './json/products';

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/item/:id" element={<ProductDetailPage />} />
        <Route path="/category/:category" element={<CategoryPage products={productsData} />} />
      </Routes>
    </div>
  )
}

export default App
