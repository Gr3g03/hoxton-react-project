import { Link } from "react-router-dom";

const randColour = () =>
    ["green", "red", "blue", "yellow"][Math.floor(Math.random() * 4)];

function Header() {
    return (
        <header
            className="header"
            style={{ "--border-colour": `var(--${randColour()})` }}
        >
            <div className="header__logo" style={{ color: `var(--${randColour()})` }}>

            </div>
            <nav className="header__nav">
                <ul>
                    <li>
                        <Link to={'/products'} >Home</Link>
                    </li>
                    {/* <li>
                        <Link to={'/product'} > Product </Link>
                    </li>
                    <li>
                        <Link to={'/Basket'} > Basket </Link>

                    </li> */}
                </ul>
            </nav>
        </header>
    );
}
export default Header;