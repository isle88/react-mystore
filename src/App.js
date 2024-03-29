import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { Add } from "./components/Add";
import { Cart } from "./components/Cart";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Like } from "./components/Like";
import { Product } from "./components/ProductCard";
import { Products } from "./components/Products";
import { CartContext } from "./contexts/CartContext";
import { LikeContext } from "./contexts/LikeContext";

function App() {
  const [liked, setLiked] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <LikeContext.Provider value={{ liked, setLiked }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <div className="App">
          <BrowserRouter>
            <Header />
            <div className="main">
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/products" element={<Add />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/like" element={<Like />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </div>
      </CartContext.Provider>
    </LikeContext.Provider>
  );
}

export default App;
