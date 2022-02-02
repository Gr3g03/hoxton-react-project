import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import useStore from "../store";

export default function Products() {

    const [product, setProduct] = useState({})


    useEffect(() => {
        fetch(`http://localhost:3001/products`)
            .then(resp => resp.json())
            .then(productFromServer => setProduct(productFromServer))
    }, [])

    const products = useStore(store => store.products)
    const vote = useStore(store => store.products)
    const fetchProducts = useStore(store => store.fetchProducts)

    const [search, setSearch] = useState('')

    const searchedProducts = products.filter(product =>
        product.title.toUpperCase().includes(search.toUpperCase())
    )

    const [count, setCount] = useState(0)

    // const count = product.votes
    const up = () => setCount(count => count + 1)
    const down = () => setCount(count => count - 1)

    useEffect(() => {
        fetchProducts()
    }, [])




    return (
        <div className='container'>
            <Search setSearch={setSearch} />

            <div className="row">
                <div className='col-md-12'>

                    {
                        searchedProducts.map((product, index) =>
                            <div className="main" key={index}>
                                <Link to={`/products/${product.id}`}>
                                    <div className="image">
                                        <img src={product.image} />
                                    </div> </Link>

                                <div className='header'>
                                    <button onClick={down}>
                                        <img className="buttonImg" src={'src/images/up.svg'} alt="down Arrow" />
                                    </button>
                                    {count}
                                    <button onClick={up}>
                                        <img className="buttonImg" src={'src/images/down arrow.svg'} alt="up Arrow" />

                                    </button>
                                </div>

                                <Link to={`/products/${product.id}`}>
                                    <div className='description'>

                                        {product.title}

                                        <p className="product-description">
                                            {product.description}
                                        </p>
                                    </div>

                                    <div className='extra'>
                                        <span>Submitted by:</span>
                                        <img
                                            className='avatar'
                                            src={product.image}
                                        />
                                    </div>
                                </Link>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}