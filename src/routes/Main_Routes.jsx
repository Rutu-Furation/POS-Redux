import React from "react";
import Login from "../Pages/Auth/Login/Login";
import Companies from "../Pages/Companies";
import Outlets from "../Pages/Outlets/Outlets";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Main_Routes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/companies" element={<Companies />} />
      <Route exact path="/outlets" element={<Outlets />} />
    </Routes>
  );
};

export default Main_Routes;
