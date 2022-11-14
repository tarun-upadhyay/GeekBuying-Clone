import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Detail from "./Detail";
import Homepage from "./Homepage";
import Register from "./Login/Signup";
import Payment from "./Payment";
import Product from "./Product";
import Admin from "../Admin/Admin";
import AddProduct from "../Admin/AddProduct";
import Manage from "../Admin/Manage";
import Login from "./Login/Login";

import {PrivatRoute, SecondPrivate} from "../Components/PrivatRoute";
import Order from "./Order";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/detail" element={<Detail />}></Route>
      <Route path="/cart" element={<SecondPrivate><Cart /></SecondPrivate>}></Route>
      <Route path="/payment" element={<Payment />}></Route>
      <Route path="/signup"  element={<Register/>}/>
      <Route path="/login"  element={<Login/>}></Route>
      <Route path="/admin" element={<PrivatRoute><Admin /></PrivatRoute>}>
        {" "}
      </Route> 
      <Route path="/admin/addproduct" element={<PrivatRoute><AddProduct/></PrivatRoute>}></Route>
     <Route path="/admin/manage" element={<PrivatRoute><Manage/></PrivatRoute>}></Route>
     <Route path="/payment" element={<SecondPrivate><Payment/></SecondPrivate>}> </Route>
   <Route path="/order" element={<SecondPrivate><Order></Order></SecondPrivate>}></Route>
    <Route path="*" element={<h1> 404 Page Not Found</h1>}></Route>
    </Routes>
  );
};

export default MainRoutes;
