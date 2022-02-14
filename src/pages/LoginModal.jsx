import { useNavigate } from "react-router-dom"

export default function LoginModal({ modal, setModal, setLogedin }) {

    const navigate = useNavigate()

    function logedinUser(userId, password) {
        fetch(`http://localhost:3001/users/${userId}`)
            .then(resp => resp.json())
            .then((logedInUser) => {
                if (logedInUser.password === password) {
                    navigate("/")
                    setLogedin(logedInUser)
                }
            })
        alert('welcome')
    }


    return (
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
                            logedinUser(e.target.email.value, e.target.password.value)
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
    )
}