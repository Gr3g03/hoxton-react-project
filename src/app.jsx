import { useState } from "react"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import Header from "./pages/Header"
import LoginModal from "./pages/LoginModal"
import NotFound from "./pages/NotFound"
import Product from "./pages/Product"
import Products from "./pages/Products"
import SignupModal from "./pages/signupModal"
import './style.css'

function App() {
    const [modal, setModal] = useState('')
    const [newUsers, setNewUsers] = useState([])
    const [logedin, setLogedin] = useState(null)



    if (modal === 'new-user') {
        return (
            <div className='modal-wrapper'>
                <SignupModal modal={modal} setModal={setModal} newUsers={newUsers} setNewUsers={setNewUsers} />
            </div>
        )
    }

    if (modal === 'login') {
        return (
            <div className='modal-wrapper'>
                <LoginModal modal={modal} setModal={setModal} setLogedin={setLogedin} />
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