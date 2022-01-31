export default function LoginModal({ modal, setModal }) {
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
                        addANewUser(e.target.firstName.value, e.target.lastName.value, e.target.phoneNumber.value)
                        // @ts-ignore
                        e.target.reset()
                    }}>
                        <label htmlFor="firstName">First name</label>
                        <input name="firstName" id="firstName" type="text" />
                        <label htmlFor="lastName">Last name</label>
                        <input name="lastName" id="lastName" type="text" />
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input name="phoneNumber" id="phoneNumber" type="text" />
                        <button type="submit">CREATE USER</button>
                    </form>
                </div>
            </div>
        ) : null
    }

}

