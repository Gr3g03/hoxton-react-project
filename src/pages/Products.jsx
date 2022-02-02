import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import useStore from "../store";

export default function Products() {

    const [product, setProduct] = useState([])
    const [search, setSearch] = useState('')
    const products = useStore(store => store.products)
    const fetchProducts = useStore(store => store.fetchProducts)


    useEffect(() => {
        fetchProducts()
    }, [])

    useEffect(() => {
        fetch(`http://localhost:3001/products`)
            .then(resp => resp.json())
            .then(productFromServer => setProduct(productFromServer))
    }, [])


    const searchedProducts = products.filter(product =>
        product.title.toUpperCase().includes(search.toUpperCase())
    )


    function upvotes(image) {
        fetch(`http://localhost:3001/products/${image.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ likes: image.likes++ })
        })

        const updatedState = JSON.parse(JSON.stringify(product))
        const match = updatedState.find(target => target.id === image.id)
        match.likes + 1

        setProduct(updatedState)
    }


    function downVotes(image) {
        fetch(`http://localhost:3001/products/${image.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ likes: image.likes-- })
        })

        const updatedState = JSON.parse(JSON.stringify(product))
        const match = updatedState.find(target => target.id === image.id)
        match.likes - 1

        setProduct(updatedState)
    }






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
                                    <button onClick={() => { upvotes(product) }}>
                                        <img className="buttonImg" src={'src/images/up.svg'} alt="down Arrow" />
                                    </button>
                                    {product.likes}
                                    <button onClick={() => downVotes(product)}>
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