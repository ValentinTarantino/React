import { PacmanLoader } from "react-spinners"
import "./cargando.css";

const Cargando = () => { 
    return ( 
            <div className="cargando-bg">
                <div className="pacman">
                    <PacmanLoader color="#00a2ff" />
                </div>
            </div>
        );
    };

export default Cargando
