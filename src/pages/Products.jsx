import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../store";

export default function Products() {
    const products = useStore(store => store.products)
    const fetchProducts = useStore(store => store.fetchProducts)
    // const [count, setCount] = useState(0)
    const downvote = useStore(store => store.votes)
    const upvote = useStore(store => store.count)

    // const up = () => setCount(count => count + 1)
    // const down = () => setCount(count => count - 1)

    useEffect(() => {
        fetchProducts()
    }, [])

    return (

        <div className='container'>
            <div className="row">
                <div className='col-md-12'>
                    {
                        products.map((product, index) =>
                            <div className="main" key={index}>
                                <Link to={`/products/${product.id}`}>
                                    <div className="image">
                                        <img src={product.image} />
                                    </div>

                                    <div className='header'>

                                        <button onClick={product.votes + 1}>+</button>
                                        {product.votes}
                                        {/* <button onClick={product.votes - 1}>-</button> */}
                                    </div>

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

        // <main>
        //     <section className="products-container main-wrapper">
        //         <ul className="products-container__list">
        //             {products.map(product =>
        //                 <li key={product.id}>
        //                     <Link to={`/products/${product.id}`}>
        //                         <article className="product-item">
        //                             <img src={product.image}
        //                                 alt={product.title} />
        //                             <h3>{product.title}</h3>
        //                         </article>
        //                     </Link>
        //                 </li>
        //             )}

        //         </ul>
        //     </section>
        // </main>
    )
}