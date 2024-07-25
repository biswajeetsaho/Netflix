import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
function Body() {
  return (
    <Router>
    <Routes>
      
        <Route path="/" exact element={<Login />} />
        <Route path="/browse" element={<Browse />} />
    </Routes>
  </Router>
  );
}

export default Body;

