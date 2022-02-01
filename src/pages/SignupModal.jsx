export default function SignupModal({ modal, setModal }) {

    {
        modal === 'new-user' ? (
            <div className="modal-wrapper" onClick={() => setModal("")}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <button onClick={() => setModal("")} className="close-modal">
                        X
                    </button>
                    <form className="new-user" onSubmit={(e) => {
                        e.preventDefault()
                        // @ts-ignore
                        addANewUser(e.target.firstName.value, e.target.lastName.value)
                        // @ts-ignore
                        e.target.reset()
                    }}>
                        <label htmlFor="firstName">First name</label>
                        <input name="firstName" id="firstName" type="text" />

                        <label htmlFor="lastName">Last name</label>
                        <input name="lastName" id="lastName" type="text" />

                        <label htmlFor="email">E-mail</label>
                        <input name="email" id="email" type="email" />

                        <label htmlFor="birthday">birthday</label>
                        <input name="birthday" id="birthday" type="number" />
                        <ul>
                            <p>Gender</p>
                            <li>
                                <input id="gender" type="radio" name="gender" value="male" />
                                <label htmlFor="consistency1" >
                                    Male
                                </label>
                            </li>

                            <li>
                                <input id="gender" type="radio" name="gender" value="female" />
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
        ) : null
    }

}

