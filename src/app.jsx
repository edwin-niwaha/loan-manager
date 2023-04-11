import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
// import pages
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Error from "./pages/error";
import Customer from "./pages/customer";
import Upload from "./pages/uploadimg";
import Uploadpdf from "./pages/uploadpdf";

import Menu from "./components/menu";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/uploadpdf" element={<Uploadpdf />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
