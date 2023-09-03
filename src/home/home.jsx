import React, { useEffect, useState, useContext } from "react";
import "../home/home.css"
import { UserContext } from "../component/context";
import Card from "../component/card/card";
import Header from "../component/header/header";
import Loder from "../component/loder/loder";
import Sliderimg from "../slider/slider";




const Home = () => {

    const product = useContext(UserContext);

    const [smartphones, setSmartphones] = useState([])
    const [laptops, setlaptops] = useState([])
    const [fragrances, setfragrances] = useState([])
    const [skincare, setskincare] = useState([])
    const [groceries, setgroceries] = useState([])
    const [homedecoration, sethomedecoration] = useState([])
    const [furniture, setfurniture] = useState([])
    const [tops, settops] = useState([])
    const [womensdresses, setwomensdresses] = useState([])
    const [womensshoes, setwomensshoes] = useState([])
    const [mensshirts, setmensshirts] = useState([])
    const [mensshoes, setmensshoes] = useState([])
    const [menswatches, setmenswatches] = useState([])
    const [womenswatches, setwomenswatches] = useState([])
    const [womensbags, setwomensbags] = useState([])
    const [womensjewellery, setwomensjewellery] = useState([])
    const [sunglasses, setsunglasses] = useState([])
    const [automotive, setautomotive] = useState([])
    const [motorcycle, setmotorcycle] = useState([])
    const [lighting, setlighting] = useState([])
    useEffect(() => {
        setTimeout(() => {
            const smartphones = product.filter((e) => {
                return e.category === "smartphones"
            })
            setSmartphones(smartphones)
            

        }, 1700)
        setTimeout(() => {
            const laptops = product.filter((e) => {
                return e.category === "laptops"
            })
            setlaptops(laptops)

        }, 1800)
        setTimeout(() => {
            const fragrances = product.filter((e) => {
                return e.category === "fragrances"
            })
            setfragrances(fragrances)

        }, 1900)
        setTimeout(() => {
            const skincare = product.filter((e) => {
                return e.category === "skincare"
            })
            setskincare(skincare)

        }, 2200)
        setTimeout(() => {
            const groceries = product.filter((e) => {
                return e.category === "groceries"
            })
            setgroceries(groceries)

        }, 2400)
        setTimeout(() => {
            const homedecoration = product.filter((e) => {
                return e.category === "home-decoration"
            })
            sethomedecoration(homedecoration)

        }, 2600)
        setTimeout(() => {
            const furniture = product.filter((e) => {
                return e.category === "furniture"
            })
            setfurniture(furniture)

        }, 2800)
        setTimeout(() => {
            const tops = product.filter((e) => {
                return e.category === "tops"
            })
            settops(tops)


        }, 3000)
        setTimeout(() => {
            const womensdresses = product.filter((e) => {
                return e.category === "womens-dresses"
            })
            setwomensdresses(womensdresses)


        }, 3100)
        setTimeout(() => {
            const womensshoes = product.filter((e) => {
                return e.category === "womens-shoes"
            })
            setwomensshoes(womensshoes)


        }, 3200)
        setTimeout(() => {
            const mensshirts = product.filter((e) => {
                return e.category === "mens-shirts"
            })
            setmensshirts(mensshirts)


        }, 3300)
        setTimeout(() => {
            const mensshoes = product.filter((e) => {
                return e.category === "mens-shoes"
            })
            setmensshoes(mensshoes)


        }, 3400)
        setTimeout(() => {
            const menswatches = product.filter((e) => {
                return e.category === "mens-watches"
            })
            setmenswatches(menswatches)


        }, 3500)
        setTimeout(() => {
            const womenswatches = product.filter((e) => {
                return e.category === "womens-watches"
            })
            setwomenswatches(womenswatches)


        }, 3600)
        setTimeout(() => {
            const womensbags = product.filter((e) => {
                return e.category === "womens-bags"
            })
            setwomensbags(womensbags)


        }, 3700)
        setTimeout(() => {
            const womensjewellery = product.filter((e) => {
                return e.category === "womens-jewellery"
            })
            setwomensjewellery(womensjewellery)


        }, 3800)
        setTimeout(() => {
            const sunglasses = product.filter((e) => {
                return e.category === "sunglasses"
            })
            setsunglasses(sunglasses)


        }, 3900)
        setTimeout(() => {
            const automotive = product.filter((e) => {
                return e.category === "automotive"
            })
            setautomotive(automotive)


        }, 4000)
        setTimeout(() => {
            const motorcycle = product.filter((e) => {
                return e.category === "motorcycle"
            })
            setmotorcycle(motorcycle)


        }, 4100)
        setTimeout(() => {
            const lighting = product.filter((e) => {
                return e.category === "lighting"
            })
            setlighting(lighting)


        }, 4200)


    }, [product, smartphones, laptops, fragrances, skincare, groceries, homedecoration, furniture, tops, womensdresses,
        womensshoes, mensshirts, mensshoes, menswatches, womenswatches, womensbags, womensjewellery, sunglasses, automotive
        , motorcycle, lighting])


    return (
        <>
            <Header />
           <Sliderimg/>
            <div className="home">
                <p className="smartphones">Smart Phone</p>
                <div className="gridcol">
                    {smartphones.length === 0 ?
                        <Loder /> :
                        smartphones && smartphones.map((eve, ind) => {
                            return <Card data={eve} key={ind} />
                        })


                    }
                </div>
                <p className="smartphones">Laptop</p>
                <div className="gridcol">
                    {laptops.length === 0 ?
                        <Loder /> :
                        laptops && laptops.map((eve, ind) => {
                            return <Card data={eve} key={ind} />
                        })
                    }
                </div>
                <p className="smartphones">Fragrances</p>
                <div className="gridcol">

                    {fragrances.length === 0 ?
                        <Loder />
                        :
                        fragrances && fragrances.map((eve, ind) => {
                            return <Card data={eve} key={ind} />
                        })
                    }

                </div>
                <p className="smartphones">Skincare</p>
                <div className="gridcol">

                    {skincare.length === 0 ?
                        <Loder />
                        :
                        skincare && skincare.map((eve, ind) => {
                            return <Card data={eve} key={ind} />
                        })
                    }
                </div>
                <p className="smartphones">Groceries</p>
                <div className="gridcol">

                    {groceries.length === 0 ?
                        <Loder />
                        :
                        groceries && groceries.map((eve, ind) => {
                            return <Card data={eve} key={ind} />
                        })
                    }

                </div>
                <p className="smartphones">Home-Decoration</p>
                <div className="gridcol">

                    {
                        homedecoration && homedecoration.map((eve, ind) => {
                            return <Card data={eve} key={ind} />
                        })
                    }

                </div>
                <p className="smartphones">Furniture</p>
                <div className="gridcol">

                    {
                        furniture && furniture.map((eve, ind) => {
                            return <Card data={eve} key={ind} />
                        })
                    }
                </div>
                <p className="smartphones">Top</p>
                <div className="gridcol">

                    {
                        tops && tops.map((eve, ind) => {
                            return <Card data={eve} key={ind} />
                        })
                    }
                </div>
                <p className="smartphones">Womens Dresses</p>
                <div className="gridcol">

                    {
                        womensdresses && womensdresses.map((eve, ind) => {
                            return <Card data={eve} key={ind} />
                        })
                    }
                </div>
                <p className="smartphones">Womens Shoes</p>
                <div className="gridcol">

                    {
                        womensshoes && womensshoes.map((eve, ind) => {
                            return <Card data={eve} key={ind} />
                        })
                    }
                </div>
                <p className="smartphones">Mens Shirts</p>
                <div className="gridcol">

                    {
                        mensshirts && mensshirts.map((eve, ind) => {
                            return <Card data={eve} key={ind} />
                        })
                    }
                </div>
                <p className="smartphones">Mens Shoes</p>
                <div className="gridcol">

                    {
                        mensshoes && mensshoes.map((eve, ind) => {
                            return <Card data={eve} key={ind} />
                        })
                    }
                </div>
                <p className="smartphones">Mens Watches</p>
                <div className="gridcol">

                    {
                        menswatches && menswatches.map((eve, ind) => {
                            return <Card data={eve} key={ind} />
                        })
                    }
                </div>
                <p className="smartphones">Womens Watches</p>
                <div className="gridcol">

                    {
                        womenswatches && womenswatches.map((eve, ind) => {
                            return <Card data={eve} key={ind} />
                        })
                    }
                </div>
                <p className="smartphones">Womens Bags</p>
                <div className="gridcol">

                    {
                        womensbags && womensbags.map((eve, ind) => {
                            return <Card data={eve} key={ind} />
                        })
                    }
                </div>
                <p className="smartphones">Womens Jewellery</p>
                <div className="gridcol">

                    {
                        womensjewellery && womensjewellery.map((eve, ind) => {
                            return <Card data={eve} key={ind} />
                        })
                    }
                </div>
                <p className="smartphones">Sunglasses</p>
                <div className="gridcol">

                    {
                        sunglasses && sunglasses.map((eve, ind) => {
                            return <Card data={eve} key={ind} />
                        })
                    }
                </div>
                <p className="smartphones">Automotive</p>
                <div className="gridcol">

                    {
                        automotive && automotive.map((eve, ind) => {
                            return <Card data={eve} key={ind} />
                        })
                    }
                </div>
                <p className="smartphones">Motorcycle</p>
                <div className="gridcol">

                    {
                        motorcycle && motorcycle.map((eve, ind) => {
                            return <Card data={eve} key={ind} />
                        })
                    }
                </div>
                <p className="smartphones">Lighting</p>
                <div className="gridcol">

                    {
                        lighting && lighting.map((eve, ind) => {
                            return <Card data={eve} key={ind} />
                        })
                    }
                </div>

            </div>
        </>
    )
}
export default Home