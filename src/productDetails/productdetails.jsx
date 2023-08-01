import React, { useEffect, useState } from "react";
import "./Productdetails.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Header from "../component/header/header";


const Productdetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [slider, setSliders] = useState([])
    const [count, setCount] = useState(1)
    const [img, setimge] = useState()
    const [imageinst, setimageint] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            fetch(`https://dummyjson.com/products/${id}`)
                .then(res => res.json())
                .then(json => {
                    setSliders(json)
                    setimge(slider.images?.[0])
                    setimageint(false)

                })

        }, 3500)

    }, [slider])
    



    const handleClick = () => {
        const user = {
            email: localStorage.getItem("email"),
            id: slider.id,
            brand: slider.brand,
            category: slider.category,
            title: slider.title,
            description: slider.description,
            discountPercentage: slider.discountPercentage,
            price: slider.price,
            rating: slider.rating,
            quentity: count,
            thumbnail: slider.thumbnail,
        }
        fetch("http://localhost:9000/cart", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(json => {
                if (json.mess === "Add to cart") {
                    navigate("/cart");
                } else if (json.mess === "please login after you save cart") {
                    alert("login now")
                }

            }).catch(err => console.log(err))
    }


    const handlePosa = () => {
        if (count >= 15) {
            setCount(15)
        } else {
            setCount(count + 1)
        }
    }


    const handleNagat = () => {
        if (count <= 1) {
            setCount(1)
        } else {
            setCount(count - 1)
        }
    }

    const hanldlehover = (id) => {
        const image = slider.images.filter((e, ind) => {
            return ind === id
        })
        setimge(image)
    }




    return (
        <>
            <Header />
            <div className="prodelt">


                <div className="sliderimgs">
                    <div className="sliderimg">
                        <div className="sliderimagewidth">
                            {imageinst === false ? <img src={img} className="img7" /> : <Skeleton width={300} height={300} />}
                        </div>
                    </div>
                    <div className="slidershot">
                        {imageinst === false ?

                            slider.images && slider.images.slice(0, 4).map((e, ind) => {
                                return (

                                    <div className="col1" key={ind} onMouseOver={() => hanldlehover(ind)} >
                                        <img src={e} className="img6" />
                                    </div>
                                )

                            })
                            : <Skeleton width={350} height={90} />

                        }
                    </div>
                </div>







                <div className="delats">
                    <div className="dtetmarp">
                        <div className="pageren"><NavLink to={"/"}><span className="pegego">Home</span></NavLink> / <span>{slider.category || <Skeleton width={50} />}</span></div>
                        <p className="titler">{slider.title || <Skeleton width={300} />}</p>
                        <p className="rate">Description: <span className="reater"> {slider.description || <Skeleton count={2} width={500} />}</span></p>
                        <p className="rate">Rating: <span className="reater"> {slider.rating || <Skeleton width={50} />}</span></p>
                        <p className="rate">Discount:<span className="reater">{slider.discountPercentage || <Skeleton width={50} />}</span></p>


                        <p className="rate" >Brand: <span className="reater">{slider.brand || <Skeleton width={50} />}</span></p>
                        <p className="rate">Price: <span className="reater"> ${slider.price || <Skeleton width={50} />}</span></p>
                        <div className="count">
                            <div className="dtetmar">
                                <p className="positive" onClick={handlePosa}>+</p>
                                <p className="countcol">{count}</p>
                                <p className="nagetive" onClick={handleNagat}>-</p>
                            </div>
                            <div>
                                <button className="btn4" onClick={handleClick}>ADD</button>
                            </div>
                        </div>


                    </div>

                </div>


            </div >
        </>
    )
}
export default Productdetails