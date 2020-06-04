import React from "react";

import "./style.css";

function EmployeeCard(props) {
    return (
        <div className="card bg-dark">
            <div className="row no-gutters">
                <div className="col-flex">
                    <img id="employee-img" src="/images/kevin_profile.png" className="card-img-top" alt="..."/>
                </div>
                <div className="col">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.role}</p>
                        <p className="card-text">$ {props.salary}</p>
                        <p className="card-text">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeCard;