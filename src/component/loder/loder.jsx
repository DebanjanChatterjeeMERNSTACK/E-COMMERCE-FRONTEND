import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Loder = () => {
    return (
        <>{
            [1, 2, 3, 4, 5].map((e) => {
                return (
                    <div className="card" key={e}>
                        <Skeleton width={177} height={150} />
                        <p className="title"><Skeleton width={160} /></p>
                        <p className="rating"><Skeleton width={160} /></p>
                        <p className="price"><Skeleton width={160} /></p>
                    </div>
                )
            })

        }
        </>
    )
}
export default Loder