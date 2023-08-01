import React, { useEffect, useState } from "react";
import "../myoder/myoder.css"
import Auth from "../component/auth"
import Header from "../component/header/header";

const Myoder = () => {
    const [oder, setoder] = useState([])

    useEffect(() => {
        fetch("http://localhost:9000/getmyoder", {
            headers: {
                auth: document.cookie,
                email: localStorage.getItem("email")
            }
        })
            .then(res => res.json())
            .then(json => {
                setoder(json.user)
            })

    }, [oder])
    const handlecencle=()=>{
        alert("cencel request sent....")
    }
    const auths= document.cookie;
    const email=localStorage.getItem("email");

    return (
        <>


            <Header />
            <div className="cartwidh">

                {!auths || auths==="" || email === "undefined" || email === "" || !email ? <Auth/> :
                    oder && oder.map((e, ind) => {
                        const paymentoderid=e.payment.razorpay_order_id
                        const paymentid=e.payment.razorpay_payment_id
                        return e.oderitem.map((e,ind)=>{
                         return(
                            <div className="cartitem" key={ind}>
                                <div className="cartitemflex">
                                    <div className="cartitemflexroe">
                                        <div className="gricart">
                                            <img src={e.thumbnail} className="cartimgsize" />
                                        </div>
                                        <div className="gridcart2">
                                            <p className="text">{e.title}</p>
                                            <p className="text">{e.quentity} pice</p>
                                            <p className="text">{e.price}</p>
                                            <p className="text">{paymentid}</p>
                                            <p className="text">{paymentoderid}</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <button className="btn5" onClick={() => handlecencle(e.id)}>
                                           cencel
                                        </button>
                                    </div>
                                </div>
                            </div>


                        )
                            })
                    })
                }
            </div>

        </>
    )
}
export default Myoder