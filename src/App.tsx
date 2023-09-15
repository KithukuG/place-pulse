import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Explore from "./pages/Explore";
import React from "react";
import "./index.css";
import CreateListing from "./pages/CreateListing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Explore />} />
        {/* <Route path="/offers" element={<Offers />} />
        <Route path="/category/:categoryName" element={<Category />} />

        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
       
        
       
         */}
        <Route path="/create" element={<CreateListing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<ForgotPassword />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
