import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Order from './Orders'

const Cart = () => {
  return (
    <>
      <Header />
      <Navbar />
      <h1 className="text-4xl">Cart</h1>
    </>
  );
};

export default Cart;
