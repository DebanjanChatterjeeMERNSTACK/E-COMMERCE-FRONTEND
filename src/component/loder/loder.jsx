import React from "react";
import "./loder.css"

const Loder = () => {
    return (
        <>{
            [1, 2, 3, 4, 5].map((e) => {
                return (
                    <div className="lds-roller" key={e}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                )
            })

        }
        </>
    )
}
export default Loder