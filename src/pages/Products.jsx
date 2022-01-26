import { useEffect } from "react";
import { Link } from "react-router-dom";
import useStore from "../store";

export default function Products() {
    const products = useStore(store => store.products)
    const fetchProducts = useStore(store => store.fetchProducts)


    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <main>
            <section className="products-container main-wrapper">
                <ul className="products-container__list">
                    {products.map(product =>
                        <li key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <article className="product-item">
                                    <img src={product.image}
                                        alt={product.title} />
                                    <h3>{product.title}</h3>
                                </article>
                            </Link>
                        </li>
                    )}

                </ul>
            </section>
        </main>
    )
}