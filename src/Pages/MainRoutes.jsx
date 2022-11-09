import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Detail from "./Detail";
import Homepage from "./Homepage";
import Login from "./Login";
import Payment from "./Payment";
import Product from "./Product";
import Singup from "./Singup";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/detail" element={<Detail />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/payment" element={<Payment />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/singup" element={<Singup />}></Route>
    </Routes>
  );
};

export default MainRoutes;