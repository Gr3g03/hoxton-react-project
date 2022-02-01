import { useState } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import Header from "./pages/Header"
// import LoginModal from "./pages/LoginModal"
import NotFound from "./pages/NotFound"
import Product from "./pages/Product"
import Products from "./pages/Products"
import './style.css'

function App() {
    const [modal, setModal] = useState('')
    const [users, setUsers] = useState([])
    const [logedin, setLogedin] = useState(null)


    if (modal === 'new-user') {
        return (
            <div className='modal-wrapper'>
                <div className='modal'>

                    {modal === 'new-user' ? (
                        <div className="modal-wrapper" onClick={() => setModal("")}>
                            <div className="modal" onClick={(e) => e.stopPropagation()}>
                                <button onClick={() => setModal("")} className="close-modal">
                                    X
                                </button>
                                <form className="new-user" onSubmit={(e) => {
                                    e.preventDefault()
                                    // @ts-ignore
                                    addANewUser(e.target.firstName.value, e.target.lastName.value, e.target.email.value, e.target.gender.value, e.target.password.value)
                                    // @ts-ignore
                                    e.target.reset()
                                }}>
                                    <label htmlFor="firstName">First name</label>
                                    <input name="firstName" id="firstName" type="text" />

                                    <label htmlFor="lastName">Last name</label>
                                    <input name="lastName" id="lastName" type="text" />

                                    <label htmlFor="email">E-mail</label>
                                    <input name="email" id="email" type="email" />

                                    <ul>
                                        <p>Gender</p>
                                        <li>
                                            <input type="radio" name="gender" value="male" />
                                            <label htmlFor="consistency1" >
                                                Male
                                            </label>
                                        </li>

                                        <li>
                                            <input type="radio" name="gender" value="female" />
                                            <label htmlFor="consistency2">
                                                Female
                                            </label>
                                        </li>
                                    </ul>


                                    <label htmlFor="password">password</label>
                                    <input name="password" id="password" type="password" />

                                    <button type="submit">CREATE USER</button>
                                </form>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        )
    }

    if (modal === 'login') {
        return (
            <div className='modal-wrapper'>
                <div className='modal'>
                    <button className='close-modal' onClick={() => setModal('login')}>
                        X
                    </button>
                    {modal === 'login' ? (
                        <div className="modal-wrapper" onClick={() => setModal("")}>
                            <div className="modal" onClick={(e) => e.stopPropagation()}>
                                <button onClick={() => setModal("")} className="close-modal">
                                    X
                                </button>
                                <form className="login" onSubmit={(e) => {
                                    e.preventDefault()
                                    // @ts-ignore
                                    // @ts-ignore
                                    e.target.reset()
                                }}>

                                    <label htmlFor="email">E-mail</label>
                                    <input name="email" id="email" type="email" />

                                    <label htmlFor="password">password</label>
                                    <input name="password" id="password" type="password" />

                                    <button type="submit">Login</button>
                                </form>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        )
    }

    function addANewUser(firstName, lastName, gender, password) {
        return fetch("http://localhost:3001/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                gender: gender,
                password: password
            })
        }).then(resp => resp.json)
            .then(() => {
                const updatedUser = JSON.parse(JSON.stringify(users))
                updatedUser.push({
                    firstName: firstName,
                    lastName: lastName,
                    gender: gender,
                    password: password
                })
                setUsers(updatedUser)
            })
    }

    return (
        <div className="App">

            <Header setModal={setModal} />

            <Routes>
                <Route index element={<Navigate replace to="/products" />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/:id' element={<Product />} />
                <Route path='/modal' element={<Product />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

        </div>
    )
}

export default App



        // handleProductUpVote = (productId) => {
        //     const nextProducts = this.state.products.map((product) => {
        //       if (product.id === productId) {
        //         return Object.assign({}, product, {
        //           votes: product.votes + 1,
        //         });
        //       } else {
        //         return product;
        //       }
        //     });
        //     this.setState({
        //       products: nextProducts,
        //     });
        //   }



