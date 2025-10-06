/* Componente Navbar che gestisce la navigazione tra le pagine */

/* Import componenti Link e LinkNav per navigare le pagine */
import { Link, NavLink } from "react-router-dom"

function Navbar() {
    return(
        <header>
            <nav>
                <ul>
                    <li> 
                        <Link to="/">Home</Link>
                    </li>

                    <li> 
                        <NavLink to="/chi-siamo"> Chi Siamo </NavLink> 
                    </li>


                    <li>
                        <NavLink to="/prodotti"> Prodotti </NavLink>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default Navbar