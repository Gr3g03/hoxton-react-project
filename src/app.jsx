import { useState } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import Header from "./pages/Header"
// import LoginModal from "./pages/LoginModal"
import NotFound from "./pages/NotFound"
import Product from "./pages/Product"
import Products from "./pages/Products"
import useStore from "./store"
import './style.css'

function App() {
    const [modal, setModal] = useState('')
    const [newUsers, setNewUsers] = useState([])
    // const [logedin, setLogedin] = useState(null)

    const { user, users } = useStore()


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
                setNewUsers(updatedUser)
            })
    }

    function signInUser(email, password) {
        for (const user of users) {
            if (user.id === email && user.password === password) {
                user(user)
            }
        }
    }


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

                    {modal === 'login' ? (
                        <div className="modal-wrapper" onClick={() => setModal("")}>
                            <div className="modal" onClick={(e) => e.stopPropagation()}>
                                <button onClick={() => setModal("")} className="close-modal">
                                    X
                                </button>
                                <form className="new-user" onSubmit={(e) => {
                                    e.preventDefault()
                                    // @ts-ignore
                                    signInUser(e.target.email.value, e.target.password.value)
                                    // @ts-ignore
                                    e.target.reset()
                                    // (user === null ? e.target.reset())
                                }}>

                                    <label htmlFor="email">E-mail</label>
                                    <input name="email" id="email" type="email" />


                                    <label htmlFor="password">password</label>
                                    <input name="password" id="password" type="password" />

                                    <button type="submit">Log in</button>
                                </form>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        )
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