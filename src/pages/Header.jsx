import { Link } from "react-router-dom";

function Header({ setModal }) {
    return (
        <header className="header">
            <div className="header__logo" >

            </div>
            <nav className="header__nav">
                <ul>
                    <li>
                        <Link to={'/products'} >Home</Link>
                    </li>
                    <li onClick={() => setModal('new-user')}>
                        Sign Up
                    </li>
                    <li onClick={() => setModal('login')}>
                        Login
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;