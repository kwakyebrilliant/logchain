import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './component/Homepage';
import Login from './component/Login';
import AdminSummary from './admin/Pages/AdminSummary';
import Manager from './admin/Pages/Manager';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<Homepage />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/adminsummary" exact element={<AdminSummary />} />
      <Route path="/manager" exact element={<Manager />} />
      </Routes>
    </Router>
  )
}

export default App