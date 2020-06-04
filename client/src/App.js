import React from 'react';

import Navbar from "./components/Navbar";
import EmployeeCard from "./components/EmployeeCard";

import Employees from "./pages/Employees";

import employeeList from "./data/employeeList";

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Employees/>
    </div>
  );
}

export default App;