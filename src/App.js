import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './component/Homepage';
import Tokenization from './component/Tokenization';
import Login from './component/Login';
import Summary from './dashboard/Pages/Summary';
import AdminSummary from './admin/Pages/AdminSummary';
import Manager from './admin/Pages/Manager';
import Manufacturer from './admin/Pages/Manufacturer';
import Tester from './admin/Pages/Tester';
import Transporter from './admin/Pages/Transporter';
import Pharmacy from './admin/Pages/Pharmacy';
import Dispatcher from './admin/Pages/Dispatcher';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<Homepage />} />
      <Route path="/tokenization" exact element={<Tokenization />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/summary" exact element={<Summary />} />
      <Route path="/adminsummary" exact element={<AdminSummary />} />
      <Route path="/manager" exact element={<Manager />} />
      <Route path="/manufacturer" exact element={<Manufacturer />} />
      <Route path="/tester" exact element={<Tester />} />
      <Route path="/transporter" exact element={<Transporter />} />
      <Route path="/pharmacy" exact element={<Pharmacy />} />
      <Route path="/dispatcher" exact element={<Dispatcher />} />
      </Routes>
    </Router>
  )
}

export default App