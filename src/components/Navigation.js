import React from "react";
import { Link } from "react-router-dom";

function Nacigation(props) {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
        </div>
    );
}

export default Nacigation;
