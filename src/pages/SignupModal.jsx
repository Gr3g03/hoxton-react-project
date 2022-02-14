export default function SignupModal({ modal, setModal, setNewUsers, newUsers }) {

    function addANewUser(firstName, lastName, id, password) {
        return fetch("http://localhost:3001/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                password: password,
                id: id
            })
        }).then(resp => resp.json())
            .then(() => {
                const updatedUser = JSON.parse(JSON.stringify(newUsers))
                updatedUser.push({
                    firstName: firstName,
                    lastName: lastName,
                    id: id,
                    password: password
                })
                setNewUsers(updatedUser)
            })
    }


    return (
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
                            addANewUser(e.target.firstName.value, e.target.lastName.value, e.target.email.value, e.target.password.value)
                            // @ts-ignore
                            e.target.reset()
                        }}>
                            <label htmlFor="firstName">First name</label>
                            <input name="firstName" id="firstName" type="text" />

                            <label htmlFor="lastName">Last name</label>
                            <input name="lastName" id="lastName" type="text" />

                            <label htmlFor="email">E-mail</label>
                            <input name="email" id="email" type="email" />


                            <label htmlFor="password">password</label>
                            <input name="password" id="password" type="password" />

                            <button type="submit">CREATE USER</button>
                        </form>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

