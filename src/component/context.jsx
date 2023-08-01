import { useState, createContext, useEffect } from "react";


const UserContext = createContext()

const Context = ({ children }) => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        setTimeout(() => {
            fetch("https://dummyjson.com/products?skip=0&limit=100")
                .then(res => res.json())
                .then(json => setProduct(json.products))
        },2000)
    })

    return (
        <UserContext.Provider value={product}>
            {children}
        </UserContext.Provider>
    );
}
export { Context, UserContext }