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
      <Employees cards={employeeList.map(employee=>
        <EmployeeCard
          key={employee.id}
          img={employee.img}
          name={employee.name}
          role={employee.role}
          salary={employee.salary}
          description={employee.description}
        />)}
      />
    </div>
  );
}

export default App;