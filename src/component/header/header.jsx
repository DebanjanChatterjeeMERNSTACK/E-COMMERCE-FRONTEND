import React, { useEffect, useState } from "react";
import "./header.css";
import { BsSearch, BsCart4, BsFillPersonFill } from 'react-icons/bs';
import { NavLink } from "react-router-dom";
import img from "../logo/shop.jpg"

const Header = () => {
    const email = localStorage.getItem("email")
    const [imge, setimge] = useState("")
    const [count, setCount] = useState([])
    const [total, setTotal] = useState("")
    const [mess, setmess] = useState("")
   
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
                setCount(json.userlen)
                setmess(json.mess)

            })
        if (mess === "please login after you save cart") {
            setTotal("My")
        } else {
            const totals = count.reduce(function (charCount, item) {
                return charCount + item.quentity
            }, 0);
            if (totals === 0 || totals === "undefined" || totals === "") {
                setTotal("My")
            } else {
                setTotal(totals)
            }
        }

    }, [imge, count, total, mess])

   
    
    

    return (
        <>
            <div className="header">
                <div className="headergrid">
                    <div className="headerimg">
                        <NavLink to={"/"} ><img src={img} className="img1" title="Home" /></NavLink>
                    </div>
                    <div className="headersear">
                        <div className="headsearch">
                            <NavLink to={"/search"} className="headsearchflex"  >   <BsSearch className="searchicon" /> <p className="serchtxt">Search your style</p></NavLink>
                        </div>
                    </div>
                    <div className="headerlog" >
                    <NavLink to={"/register"}> {email == "undefined" || email === "" || mess === "please login after you save cart" ? <BsFillPersonFill className="profilimg"   /> : <img src={imge} className="profilimg"  />}</NavLink>
                    </div>
                    <div className="headercart">
                        <NavLink to={"/cart"}>
                            <div className="headcart">
                                <BsCart4 className="searchicon" /><p className="headcarttxt">{total} items</p>
                            </div>
                        </NavLink>

                    </div>
                </div>
            </div>
           
        </>
    )
}
export default Header