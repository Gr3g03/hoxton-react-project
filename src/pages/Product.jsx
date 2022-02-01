import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../store";
import { useParams } from 'react-router-dom'


export default function Product() {


    const params = useParams()

    const [product, setProduct] = useState([])


    useEffect(() => {
        fetch(`http://localhost:3001/products/${params.id}`)
            .then(resp => resp.json())
            .then(productFromServer => setProduct(productFromServer))
    }, [])

    return (
        <main>
            <section className="product-detail main-wrapper">
                <img
                    // @ts-ignore
                    src={product.image}
                    // @ts-ignore
                    alt={product.title}
                />
                <div className="product-detail__side"  >
                    <h3></h3>
                    <h2>{product.
                        // @ts-ignore
                        title}</h2>
                    <p>
                        {product.
                            // @ts-ignore
                            description}
                    </p>
                    <p>${product.
                        // @ts-ignore
                        price}</p>
                    <h2>reviews</h2>
                    <div className="reviews-wrapper">

                        <ul className="comments">

                            {/* <li >
                                <button className="delete-button">X</button>
                            </li> */}
                            <form className="comment-form" >
                                <input type="text"
                                    name="comment"
                                    className="comment-input"
                                    placeholder="Add a comment" />
                                <button className="comment-button" type="submit">ADD</button>
                            </form>
                        </ul>
                    </div>
                </div>

            </section>
        </main>
    );

}