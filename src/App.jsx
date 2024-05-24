import React, { useEffect } from "react";
// import Homework from "./components/Homework";
import Navbar from "./components/Navbar";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import CartTable from "./pages/CartTable";
import Products from "./pages/Products";
import Taymer from "./pages/Taymer";

export default function App() {
  let nav = useNavigate();
  let path = window.location.pathname;

  useEffect(() => {
    if (path === "/") {
      nav("/Products");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/Products" element={<Products />} />
        <Route path="/CartTable" element={<CartTable />} />
        <Route path="/Taymer" element={<Taymer />} />
      </Routes>
      {/* <Homework /> */}
      {/* <Routes>
        <Route path="/Products" element={<Products />} />
        <Route path="/CartTable" element={<CartTable />} />
      </Routes> */}
    </div>
  );
}
