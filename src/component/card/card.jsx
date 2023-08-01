import React, { useContext } from "react";
import "../card/card.css";
import { BsFillStarFill } from 'react-icons/bs';
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context.jsx";

const Card = (props) => {
    const product = useContext(UserContext);
    const navigate = useNavigate()


    const handleClick = (id) => {
        const cart = product.filter((e) => {
            return e.id === id
        })
        const user = {
            email: localStorage.getItem("email"),
            id: id,
            brand: cart[0].brand,
            category: cart[0].category,
            title: cart[0].title,
            description: cart[0].description,
            discountPercentage: cart[0].discountPercentage,
            price: cart[0].price,
            rating: cart[0].rating,
            quentity: 1,
            thumbnail: cart[0].thumbnail,
        }
        fetch("http://localhost:9000/cart", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(json => {
                alert(json.mess)
                console.log(json.mess)  
                if (json.mess === "Add to cart") {
                    navigate("/cart");
                }


            })
            .catch(err => console.log(err))

    }
    return (
        <>

            <div className="card" key={props.data.id}>
                <p className="discount">{props.data.discountPercentage}%</p>
                <NavLink to={`/productdetails/${props.data.id}`}> <img src={props.data.thumbnail} className="img" /></NavLink>
                <p className="title">{props.data.title}</p>
                <p className="rating">{props.data.rating}<BsFillStarFill className="star" /></p>
                <p className="price">${props.data.price}</p>
                <button className="btn3" onClick={() => handleClick(props.data.id)}>ADD</button>

            </div>
        </>
    )
}
export default Card