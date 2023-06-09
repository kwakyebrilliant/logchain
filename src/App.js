import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './component/Homepage';
import IFinancing from './component/IFinancing';
import IFactoring from './component/IFactoring';
import TFinancing from './component/TFinancing';
import Tokenization from './component/Tokenization';
import Login from './component/Login';
import AdminSummary from './dashboard/Pages/AdminSummary';
import Tokenizationsingle from './dashboard/Single/Tokenizationsingle';
import Insurance from './dashboard/Pages/Insurance';
import Manufacturer from './dashboard/Pages/Manufacturer';
import Supplier from './dashboard/Pages/Supplier';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<Homepage />} />
      <Route path="/ifinancing" exact element={<IFinancing />} />
      <Route path="/ifactoring" exact element={<IFactoring />} />
      <Route path="/tfinancing" exact element={<TFinancing />} />
      <Route path="/tokenization" exact element={<Tokenization />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/adminsummary" exact element={<AdminSummary />} />
      <Route path="/tokenizationsingle" exact element={<Tokenizationsingle />} />
      <Route path="/insurance" exact element={<Insurance />} />
      <Route path="/manufacturer" exact element={<Manufacturer />} />
      <Route path="/supplier" exact element={<Supplier />} />
      </Routes>
    </Router>
  )
}

export default App