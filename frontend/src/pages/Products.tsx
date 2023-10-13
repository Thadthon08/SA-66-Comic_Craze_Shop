import React, { useState, ReactNode } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Chainsawman from "../img/chainsaw_man.jpg";
import { Link } from "react-router-dom";
import book1 from "../img/chainsaw_man.jpg";
import book2 from "../img/dragonball.jpg";
import { Image } from "antd";

function Products() {
  return (
    <>
      <Header />
      <Navbar />
      <section>
        {/* PRODUCT */}
        <h1 className="my-10 flex justify-center items-center capitalize text-3xl font-bold">
          Header
        </h1>
        <div className="mt-6 flex justify-center items-center gap-y-8  lg:gap-x-16 h-50">
          {/* IMAGE */}
          <Image
            preview={false}
            src={book1}
            width={450}
            className="object-cover rounded-lg lg:w-full"
          />
          {/* PRODUCT */}
          <div>
            <h4 className="text-xl  font-bold mt-2">
              Test
            </h4>
            <p className="mt-3 text-xl">$20</p>
            <p className="mt-6 leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            </p>
            {/* COLORS */}
            <div className="mt-6">
              <h4 className="text-md font-medium tracking-wider capitalize">
                colors
              </h4>
            </div>
            {/* AMOUNT */}
            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor="amount">
                <h4 className="text-md font-medium -tracking-wider capitalize">
                  Price
                </h4>
              </label>
            </div>
            {/* CART BTN */}
            <div className="mt-10">
              <button className="btn btn-secondary btn-md">Add to bag</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
