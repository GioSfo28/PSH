import { Link } from "react-router-dom";

function Navbar() {
    return (
        <ul className="flex gap-10 mb-10">
            <li>
                <Link to={`/`}>Home</Link>
            </li>
            <li>
                <Link to={`/test-ingresso`}>About</Link>
            </li>
            <li>
                <Link to={`/contatti`}>Contatti</Link>
            </li>
            <li>
                <Link to={`/cards`}>Cards Versione 1</Link>
            </li>
            <li>
                <Link to={`/cards-children`}>Cards Versione 2</Link>
            </li>
        </ul>
    );
}

export default Navbar;