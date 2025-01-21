import "./navbar.css"
import Cartget from "./Cartget"
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

    return( 
    <nav className="navbar">
        <img className="logo" src="https://img.freepik.com/vector-premium/plantilla-logotipo-computadora-tecnologia_23-2149203369.jpg" alt="" />
        <Link to="/" className="tiTulo">MUNDOGAMER</Link>
        <ul className="componentes">
            <NavLink to="/categoria/Placas de video" className={ ( { isActive } ) => isActive ? "category-active" : "category" }>Placas de video</NavLink>
            <NavLink to="/categoria/Procesadores" className={ ( { isActive } ) => isActive ? "category-active" : "category" }>Procesadores</NavLink>
            <NavLink to="/categoria/Memorias Ram"className={ ( { isActive } ) => isActive ? "category-active" : "category" }>Memorias Ram</NavLink>
            <NavLink to="/categoria/Fuentes"className={ ( { isActive } ) => isActive ? "category-active" : "category" }>Fuentes</NavLink>
        </ul>
        <Cartget/>
    </nav>
    )
}

export default NavBar