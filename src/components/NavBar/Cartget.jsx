import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const Cartget = () => {
    const { totalQuantity } = useContext(CartContext)

    let quantity = totalQuantity()

    return (
        <Link to="/cart" className="cartwidget">
            <img className="carrito" src="https://cdn-icons-png.flaticon.com/512/5421/5421585.png" alt="" />
            <p className="number-cartwidget"> { quantity !== 0 && quantity } </p>
        </Link>
    )
}

export default Cartget
