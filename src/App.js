import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap.lux-theme.min.css";
import CartContextProvider from "./context/CartContext";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route
            exact
            path="/categories/:category"
            element={<ItemListContainer />}
          ></Route>
          <Route
            exact
            path="/item/:id"
            element={<ItemDetailContainer />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
