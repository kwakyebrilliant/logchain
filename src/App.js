import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './component/Homepage';
import Login from './component/Login';
import AdminSummary from './admin/Pages/AdminSummary';
import Manager from './admin/Pages/Manager';
import Manufacturer from './admin/Pages/Manufacturer';
import Tester from './admin/Pages/Tester';
import Transporter from './admin/Pages/Transporter';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<Homepage />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/adminsummary" exact element={<AdminSummary />} />
      <Route path="/manager" exact element={<Manager />} />
      <Route path="/manufacturer" exact element={<Manufacturer />} />
      <Route path="/tester" exact element={<Tester />} />
      <Route path="/transporter" exact element={<Transporter />} />
      </Routes>
    </Router>
  )
}

export default App