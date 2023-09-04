import React, { useState } from "react";
import "./register.css"
import { NavLink } from "react-router-dom";
import Header from "../component/header/header";


const Register = () => {
    const [fullname, setfullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [nearloca, setNearloca] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [pincode, setPincode] = useState("")
    const [image, setImage] = useState("")

    const handeleClick = () => {
        let formdata = new FormData()
        formdata.append("name", fullname)
        formdata.append("email", email)
        formdata.append("password", password)
        formdata.append("phone", phone)
        formdata.append("address", address)
        formdata.append("nearlocation", nearloca)
        formdata.append("city", city)
        formdata.append("state", state)
        formdata.append("pincode", pincode)

        formdata.append("image", image)
        if (image) {


            fetch('http://localhost:9000/register', {
                method: 'POST',
                // headers:{
                //     'Content-Type': 'multipart/form-data'
                // },

                body: formdata,
            })
                .then(res => res.json())
                .then(json => alert(json.mess))
        } else {
            alert("please upload image")
        }
    }



    return (
        <>
            <Header />
            <div className="register">
                <div className="regflex">
                    <p className="regtext">Register</p>
                    <input type="text" placeholder="fullname" required className="fullname" value={fullname} onChange={(e) => setfullName(e.target.value)} /><br />
                    <input type="email" placeholder="email" required className="fullname" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                    <input type="password" placeholder="password" required className="fullname" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                    <input type="text" placeholder="phone no." required className="fullname" value={phone} onChange={(e) => setPhone(e.target.value)} /><br />
                    <input type="text" placeholder="address" required className="fullname" value={address} onChange={(e) => setAddress(e.target.value)} /><br />
                    <input type="text" placeholder="nearest location" required className="fullname" value={nearloca} onChange={(e) => setNearloca(e.target.value)} /><br />
                    <input type="text" placeholder="city" required className="fullname" value={city} onChange={(e) => setCity(e.target.value)} /><br />
                    <input type="text" placeholder="state" required className="fullname" value={state} onChange={(e) => setState(e.target.value)} /><br />
                    <input type="text" placeholder="pincode" required className="fullname" value={pincode} onChange={(e) => setPincode(e.target.value)} /><br />
                    <input type="file" className="fullname" accept=".png, .jpg, .jpeg" onChange={(e) => setImage(e.target.files[0])} required={true} /><br />
                    <p className="alerts">*image upload one time don't change image 2nd time *</p>
                    <button className="btn1" onClick={handeleClick}>Register</button>
                    <NavLink to={"/login"}><p className="regtext">Login Now</p></NavLink>
                </div>
            </div>


        </>
    )
}

export default Register