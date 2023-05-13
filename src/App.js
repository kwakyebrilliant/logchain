import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './component/Homepage';
import Login from './component/Login';
import Summary from './dashboard/Pages/Summary';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<Homepage />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/summary" exact element={<Summary />} />
      </Routes>
    </Router>
  )
}

export default App