import React, { Component } from "react";

import EmployeeCard from "../../components/EmployeeCard";

import employeeList from "../../data/employeeList";

class Employees extends Component {
    state = {
        search: "",
        alteredList: employeeList,
    }

    handleSearchChange = event => {
        console.log("Changing! " + event.target.value);
        console.log("Employee List: ");
        console.log(employeeList);
        this.setState({
            [event.target.name]: event.target.value,
            alteredList: employeeList.filter(employee => employee.name.includes(event.target.value))
        })
        console.log("Search bar: " + this.state.search);
        console.log("New list: ");
        console.log(this.state.alteredList);
    }

    render() {
        return (
            <div>
                <input
                    className="form-control mr-sm-2"
                    name="search"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={this.state.search}
                    onChange={this.handleSearchChange}
                />
                <div className="employee-list">
                    {this.state.alteredList.map(employee =>
                        <EmployeeCard
                            key={employee.id}
                            img={employee.img}
                            name={employee.name}
                            role={employee.role}
                            salary={employee.salary}
                            description={employee.description}
                        />)
                    }
                </div>
            </div>
    
        );
    }
}

export default Employees;