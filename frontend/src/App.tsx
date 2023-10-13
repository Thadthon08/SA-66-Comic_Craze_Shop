import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import {
  About,
  Home,
  Cart,
  Error,
  Landing,
  Login,
  Register,
  Orders,
  Products,
  Payment,
  SingleProduct,
  Payment_Show,
  Payment_UD,
} from "./pages";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Products/:id" element={<SingleProduct />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Cart/Payment" element={<Payment />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Payment/Status" element={<Payment_Show />} />
        <Route path="/About" element={<About />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Status/admin" element={<Payment_UD />} />
      </Routes>
    </Router>
  );
};
export default App;