import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Chainsawman from "../img/chainsaw_man.jpg";
import { Link } from "react-router-dom";

const book = {
  name: "One Pice",
  image: Chainsawman,
  price: "100",
  id: "1",
};


const Products = () => {
   const [count, setCount] = useState(0);
  return (
    <>
      <Header />
      <Navbar />
      {/* <h1 className="text-4xl">Products { book.name }</h1>
      <img src= { book.image } alt="" />
      <p> { book.price } </p> */}
      <div>
        <h3 className="text-3xl">{count}</h3>
        <button
          type="button"
          className="btn"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button className="btn" onClick={() => setCount(count - 1)}>
          -
        </button>
        <button className="btn" onClick={() => setCount(0)}>
          Clear
        </button>
      </div>
    </>
  );
};

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h3>{count}</h3>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => setCount(count - 1)}>-</button>
//       <button onClick={() => setCount(0)}>Clear</button>
//     </div>
//   );
// };
export default Products;
