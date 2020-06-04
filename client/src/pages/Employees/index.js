import React from "react";

function Employees(props) {
    return (
        <div className="employee-list">
            {props.cards}
        </div>
    );
}

export default Employees;