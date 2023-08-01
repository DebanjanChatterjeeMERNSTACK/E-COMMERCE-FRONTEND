import React, { useState, useEffect } from "react";
import "./search.css"
import { NavLink } from "react-router-dom";
import {  BsCart4 } from 'react-icons/bs';
import img1 from "../component/logo/shop.jpg"

import Card from "../component/card/card";

import Loder from "../component/loder/loder";
const Search = () => {  
    const [name, setName] = useState("")
    const [count, setCount] = useState([])
    const [mess,setmess]=useState("")
    const [total, setTotal] = useState("")
    const [search, setSearch] = useState([])



    useEffect(() => {
        setTimeout(() => {
            fetch(`https://dummyjson.com/products/search?q=${name}`)
                .then(res => res.json())
                .then(json => {setSearch(json)
                   
                })
        }, 2000)
    }, [search])


   

    useEffect(() => {
        fetch("http://localhost:9000/registerget", {
            headers: {
                auth: document.cookie,
                email: localStorage.getItem("email")
            }
        })
            .then(res => res.json())
            .then(json => {
                setCount(json.userlen)
                setmess(json.mess)  
            })

            if ( mess ==="please login after you save cart") {
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
    }, [count,total,mess])


    return (
        <>
            <div className="search">
                <div className="searchgrid">
                    <div className="headerimg">
                        <NavLink to={"/"}><img src={img1} className="img1"title="Home" /></NavLink>
                    </div>
                    <div className="headersear">
                        <div className="headsearcher">
                            <input type="text" placeholder="search only title" className="searchtext" value={name}
                                onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>
                    <div className="headercarts">
                        <NavLink to={"/cart"}>
                            <div className="headcart">
                                <BsCart4 className="searchicon" /><p className="headcarttxt">{total} items</p>
                            </div>
                        </NavLink>

                    </div>
                </div>
            </div>
            <div className="gridcol">
                {search.length===0 ? <Loder/> :
                    search.products && search.products.slice(0,5).map((eve, ind) => {
                        return <Card data={eve} key={ind} />
                    })
                }
                </div>
            </>
            )
}
            export default Search