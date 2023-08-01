import React, { useState } from "react";
import "../register/register.css";
import { NavLink } from "react-router-dom";
import Header from "../component/header/header";

const Forget = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)



    const handleShow = () => {
        setShow(true)
    }
    const handlehide=()=>{
        setShow(false)
    }

    const handeleClick = () => {
        fetch('http://localhost:9000/forget', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                email: email,
                password: password
            }),
        })
           .then(res => res.json())
            .then(json => {
                alert(json.mess)
                setEmail("")
                setPassword("")
            })
    }
    return (
        <>
        <Header/>
            <div className="login">
                <div className="logflex">
                    <p className="regtext">Forget</p>

                    <input type="email" placeholder="email" required className="fullname" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                    <input type={`${show == true ? "text" : "password"}`} placeholder="new password" required className="fullname" value={password} onChange={(e) => setPassword(e.target.value)} />
                   { show===false ? <button className="btn2" onClick={handleShow}>Show</button>:<button className="btn2" onClick={handlehide}>Hide</button>   } 
                    <br />

                    <button className="btn1" onClick={handeleClick}>submit</button>
                    <NavLink to={"/register"}><p className="regtext">Register </p></NavLink>

                </div>
            </div>

        </>
    )
}
export default Forget