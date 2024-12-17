import { Link } from "react-router-dom"
const Item = ({producto}) => {
return (
    <Link to={"/detail/"+producto.id} className="itemlist">
    <img src={producto.Img} className="img-item" width={100}/>
    <p className="nombre">{producto.nombre}</p>
    <p className="precio">{producto.precio}</p>
    </Link>
)
}

export default Item
