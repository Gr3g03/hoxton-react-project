export default function LoginModal(modal, setModal) {
    {
        modal === 'login' ? (
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
        ) : null
    }
}