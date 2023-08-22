import React, { useEffect, useState } from "react";
import "../cart/cart.css"
import { NavLink } from "react-router-dom";
import Header from "../component/header/header";
import { BsArrowRight } from 'react-icons/bs';
import img2 from "../component/logo/cart.png"

const Cart = () => {
    const [cart, setCart] = useState([])

    let total = 0

    useEffect(() => {
        fetch("http://localhost:9000/getcart", {
            headers: {
                auth: document.cookie,
                email: localStorage.getItem("email")
            }
        })
            .then(res => res.json())
            .then(json => {
                setCart(json.user)
            })


    }, [cart])





    const handledelete = (id) => {
        fetch("http://localhost:9000/deletecart", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: localStorage.getItem("email"),
                id: id
            })
        })
            .then(res => res.json())
            .then(json => {
                alert(json.mess)
            })
    }








    const handleOpenRazorpay = (data) => {

        const options = {
            key: 'rzp_test_HGHifRB7a6gMDC',
            amount: Number(data.amount),
            currency: data.currency,
            order_id: data.id,
            name: 'SHOPPING APP',//
            description: 'The shop fast',//
            handler: function (response) {
                fetch('http://localhost:9000/verify', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        response: response,
                        email: localStorage.getItem('email'),
                        currency: data.currency,
                        amount: data.amount
                    })
                }).then(res => res.json())
                    .then(json => {
                        alert(json.mess)
                    }).catch(err => {
                        console.log(err)
                    })
            },
            prefill: {
                email: localStorage.getItem("email")
            }

        }
        const rzp = new window.Razorpay(options)
        rzp.open()

    }


    const handlebuy = (total) => {

        fetch("http://localhost:9000/oders", {
            method: "POST",
            headers: {
                auth: document.cookie,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: total,
                email: localStorage.getItem("email")
            })
        }).then(res => res.json())
            .then(json => {
                alert(json.mess)
                localStorage.setItem("id", json.data.id)
                handleOpenRazorpay(json.data)
            })
            .catch(err => console.log(err))

    }

    const auths = document.cookie;
    const email = localStorage.getItem("email");
    return (
        <>
            <Header />
            <div className="cartwidh">
                <NavLink to={"/myoder"}><button className="btn6">My Order</button></NavLink>

                {
                    !auths || auths === "" || email === "undefined" || email === "" || !email || cart.length === 0 ?
                        <div >
                            <div className="imgeofcart" >
                                <img src={img2} width={300} height={300} className="imgeofcart" /><br/>
                            </div>
                           <NavLink to={"/"} className="btn9" > <button className="btn5" >GO TO HOME</button></NavLink>
                        </div>
                        :
                        cart && cart.map((e, ind) => {
                            total = (e.price * e.quentity) + total
                            return (
                                <div className="cartitem" key={ind}>
                                    <div className="cartitemflex">
                                        <div className="cartitemflexroe">
                                            <div className="gricart">
                                                <img src={e.thumbnail} className="cartimgsize" />
                                            </div>
                                            <div className="gridcart2">
                                                <p className="text">{e.title}</p>
                                                <p className="text">{e.brand}</p>
                                                <p className="text">{e.quentity} pice</p>
                                                <p className="text">${`${e.quentity * e.price}`}</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <button className="btn5" onClick={() => handledelete(e.id)}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>


                            )



                        })
                }








                <div className="cartpro" onClick={() => handlebuy(total)}>
                    <div className="cartproflex">
                        <div className="cartprotol">
                            <p className="totaltext">TOTAL: <span className="totalprice">${total}</span></p>
                        </div>
                        <div className="buypro">
                            <p className="totalprice">Buy Now</p>
                            <BsArrowRight className="totalprice" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cart