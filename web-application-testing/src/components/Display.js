import React from "react";
import Dashboard from "./Dashboard";

const Display = (props) => {
    return (
        <div>
            <Dashboard strikes={props.strikes} balls={props.balls}/>
        </div>
    )
}

export default Display;