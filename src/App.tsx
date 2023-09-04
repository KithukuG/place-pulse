import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Explore from "./pages/Explore";
import React from "react";
import "./index.css";
import CreateListing from "./pages/CreateListing";

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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<ForgotPassword />} />
         */}
        <Route path="/create" element={<CreateListing />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
