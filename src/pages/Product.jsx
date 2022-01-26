import { useEffect } from "react";
import { Link } from "react-router-dom";
import useStore from "../store";

export default function Product() {
    const products = useStore(store => store.products)
    const fetchProducts = useStore(store => store.fetchProducts)


    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <main>
            <section className="product-detail main-wrapper">
                <img
                    src={fetchProducts.image}
                    alt={fetchProducts.title}
                />
                <div className="product-detail__side"  >
                    <h3></h3>
                    <h2>{products.title}</h2>
                    <p>
                        {products.description}
                    </p>
                    <p>${products.price}</p>
                    <Link to={"/"}>
                        <button onClick={() => {
                        }}>Add to basket</button></Link>
                </div>

            </section>
        </main>
    );

}