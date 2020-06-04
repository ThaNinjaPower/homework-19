import React, { Component } from "react";
import employeeList from "../../data/employeeList";

class Navbar extends Component {
    state = {
        search: "",
        sortBy: "",
        alteredList: employeeList,
        sorted: false
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

    handlePageChange = event => {

    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Employee Tracker</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;