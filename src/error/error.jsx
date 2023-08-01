import React from "react";
import "../error/error.css"
import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <>
            <div className="err">
                <div>
                    <p className="errortxt">404</p>

                    <NavLink to="/"> <p className="btn">Back To Home</p></NavLink>
                </div>
            </div>
        </>
    )
}
export default Error