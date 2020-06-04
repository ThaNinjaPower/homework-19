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
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sort By
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="">Action</a>
                            <a className="dropdown-item" href="">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="">Something else here</a>
                        </div>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input
                        className="form-control mr-sm-2"
                        name="search"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={this.state.search}
                        onChange={this.handleSearchChange}
                    />
                </form>
                </div>
            </nav>
        );
    }
}

export default Navbar;