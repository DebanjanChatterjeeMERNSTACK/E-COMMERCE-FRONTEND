import React, { useState } from "react";
import "../register/register.css"
import { NavLink, useNavigate } from "react-router-dom";
import Header from "../component/header/header";
import "./login.css"

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    const handeleClick = () => {
        fetch('http://localhost:9000/login', {
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
                document.cookie = `${json.token}; max-age=${json.ex};path=/`;
                localStorage.setItem("email", json.useremail)
                setEmail("")
                setPassword("")
                setTimeout(() => {
                    if (json.mess==="login complete") {
                        navigate("/cart");
                    }else if(json.mess=== "please register now"){
                        navigate("/register");
                    }

                },1000)

            })


    }
    return (
        <>
            <Header />
            <div className="login">
                <div className="logflex">
                    <p className="regtext">Login</p>

                    <input type="email" placeholder="email" required className="fullname" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                    <input type="password" placeholder="password" required className="fullname" value={password} onChange={(e) => setPassword(e.target.value)} /><br />

                    <button className="btn1" onClick={handeleClick}>Login</button>
                    <NavLink to={"/register"}><p className="regtext">Register </p></NavLink>
                    <NavLink to={"/forget"}><p className="regtext">Forget Password </p></NavLink>
                </div>
            </div>

        </>
    )
}

export default Login