import "./navbar.css"
import Cartget from "./Cartget"


const NavBar = () => {

    return( 
    <nav className="navbar">
        <img className="logo" src="https://img.freepik.com/vector-premium/plantilla-logotipo-computadora-tecnologia_23-2149203369.jpg" alt="" />
        <p className="tiTulo">COMPRAGAMER</p>
        <ul className="componentes">
            <li>Placas de video</li>
            <li>Procesadores</li>
            <li>Memorias Ram</li>
            <li>Disipadores</li>
        </ul>
        <Cartget/>
    </nav>
    )
}

export default NavBar