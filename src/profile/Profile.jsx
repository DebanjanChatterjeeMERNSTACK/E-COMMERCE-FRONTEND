import React, { useState, useEffect } from "react";
import Header from "../component/header/header";
import { BsArrowRight, BsFillPersonFill } from 'react-icons/bs';
import { NavLink } from "react-router-dom";
import "./profile.css";


const Profile = () => {
    const email = localStorage.getItem("email")
    const [imge, setimge] = useState("")
    const [mess, setmess] = useState("")
    const [emailuser, setEmail] = useState("user@gmail.com")
    const [phone, setPhone] = useState("1234567890")
    const [address, setAddress] = useState("user address")
    const [nearloca, setNearloca] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [pincode, setPincode] = useState("")
    useEffect(() => {
        fetch("http://localhost:9000/registerget", {
            headers: {
                email: localStorage.getItem("email"),
                auth: document.cookie
            }
        })
            .then(res => res.json())
            .then(json => {
                setimge(json.userimg)
                setmess(json.mess)
                setEmail(json.useremail)
                setPhone(json.userphone)
                setAddress(json.useraddress)
                setNearloca(json.uselocation)
                setCity(json.usercity)
                setState(json.userstate)
                setPincode(json.userpin)
            })
    })







    return (

        <>
            <Header />
            <div className="profile">


                <div className="headerlog" >
                    <NavLink to={"/profile"}> {email == "undefined" || email === "" || mess === "please login after you save cart" ? <BsFillPersonFill className="profilimg" /> : <img src={imge} className="profilimg" />}</NavLink>
                </div>

                <div className="userprofile">
                    <div >
                        <p className="profiletxt">{emailuser}</p>
                    </div>
                    <div>
                        <p className="profiletxt">{phone}</p>
                    </div>
                </div>

                <hr />

                <div className="userprofile2">
                    <div className="useradd">
                        <p className="profiletxt">{address},{nearloca},{city},{state},{pincode}</p>
                    </div>
                    <div>
                        <NavLink to={"/addressupdate"}><button className="btn5">Update</button></NavLink>
                    </div>
                </div>

                <hr />

                <div className="userprofile">
                    <div>
                        <p className="profiletxt">Register</p>
                    </div>
                    <div>
                        <NavLink to={"/register"}><button className="btn5"><BsArrowRight /></button></NavLink>
                    </div>
                </div>

                <hr />

                <div className="userprofile">
                    <div>
                        <p className="profiletxt">Sign In</p>
                    </div>
                    <div>
                        <NavLink to={"/login"}><button className="btn5"><BsArrowRight /></button></NavLink>
                    </div>
                </div>

                <hr />

                <div className="userprofile">
                    <div>
                        <p className="profiletxt">Myoder</p>
                    </div>
                    <div>
                        <NavLink to={"/myoder"}><button className="btn5"><BsArrowRight /></button></NavLink>
                    </div>
                </div>
                <hr />
            </div>

        </>
    )
}
export default Profile