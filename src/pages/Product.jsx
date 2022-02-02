import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'


export default function Product() {


    const params = useParams()

    const [product, setProduct] = useState([])
    const [comments, setComments] = useState([])



    useEffect(() => {
        fetch(`http://localhost:3001/comments`)
            .then(resp => resp.json())
            .then(comments => setComments(comments))
    }, [])


    useEffect(() => {
        fetch(`http://localhost:3001/products/${params.id}`)
            .then(resp => resp.json())
            .then(productFromServer => setProduct(productFromServer))
    }, [])

    function createComents(imageId, content) {
        fetch('http://localhost:3001/comments', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                imageId: imageId,
                content: content
            })
        }).then(resp => resp.json())
            .then((newComment) => {
                const updatedComment = JSON.parse(JSON.stringify(product))
                const match = updatedComment.find((target) => target.id === imageId)
                match.comments.push(newComment)
                setProduct(updatedComment)
            })
    }


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
                            {comments.map(coment =>
                                <li>{coment.content}
                                    <button className="delete-button"
                                    >X</button>
                                </li>
                            )}
                            <form className="comment-form" onSubmit={e => {
                                e.preventDefault()
                                // @ts-ignore
                                const content = e.target.comment.value
                                createComents(product.id, content)
                                // @ts-ignore
                                e.reset()
                            }}>
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