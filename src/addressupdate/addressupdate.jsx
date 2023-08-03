import React,{useState} from "react";
import Header from "../component/header/header";


const Address=()=>{

  
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [nearloca, setNearloca] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [pincode, setPincode] = useState("")

    const handeleClick=()=>{
  
   fetch('http://localhost:9000/adderessupdate', {
    method: 'POST',
    headers:{
        'Content-Type':  "application/json"
    },
    body: JSON.stringify({
        email:email,
        phone:phone,
        address:address,
        nearlocation:nearloca,
        city:city,
        state:state,
        pincode:pincode
    })
})
    .then(res => res.json())
    .then(json => alert(json.mess))

    }


    return(
        <>
     <Header />
            <div className="register">
                <div className="regflex1">
                    <p className="regtext">Address Update</p>
                    <input type="email" placeholder="your login email" required className="fullname" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                    <input type="text" placeholder="new phone no." required className="fullname" value={phone} onChange={(e) => setPhone(e.target.value)} /><br />
                    <input type="text" placeholder="new address" required className="fullname" value={address} onChange={(e) => setAddress(e.target.value)} /><br />
                    <input type="text" placeholder="new nearest location" required className="fullname" value={nearloca} onChange={(e) => setNearloca(e.target.value)} /><br />
                    <input type="text" placeholder="new city" required className="fullname" value={city} onChange={(e) => setCity(e.target.value)} /><br />
                    <input type="text" placeholder="new state" required className="fullname" value={state} onChange={(e) => setState(e.target.value)} /><br />
                    <input type="text" placeholder="new pincode" required className="fullname" value={pincode} onChange={(e) => setPincode(e.target.value)} /><br />
                    <button className="btn1" onClick={handeleClick}>Update</button>
                  
                </div>
            </div>
        </>
    )
}

export default Address