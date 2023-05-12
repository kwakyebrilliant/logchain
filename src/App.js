import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './component/Homepage';
import Login from './component/Login';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<Homepage />} />
      <Route path="/login" exact element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App