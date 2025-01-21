import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./cart.css"


const Cart = () => {
    const { cart, deleteProductById, deleteCart } = useContext(CartContext)

    const totalPrice = () => {
        return cart.reduce((acc, productCart) => {
            const productTotal = parseFloat(productCart.precio) * parseInt(productCart.quantity, 10);
            return acc + (isNaN(productTotal) ? 0 : productTotal);
        }, 0);
    };

    if (cart.length === 0) {
        return (
            <div>
                <h2 className="Cvacio">¡Carrito vacio!</h2>
                <Link to="/" className="inicio">Volver al inicio</Link>
            </div>
        )
    }

    return (
        <div className="cart" >
            <h1 className="title-cart">Productos en el carrito</h1>
            {
                cart.map((productCart) => {
                    const precioParcial = parseFloat(productCart.precio) * parseInt(productCart.quantity, 10);
                    return (
                        <div className="item-cart" key={productCart.id}>
                            <img className="img-item-cart" src={productCart.Img} width={100} alt="" />
                            <p className="text-item-cart">{productCart.nombre}</p>
                            <p className="text-item-cart">precio c/u: ${productCart.precio}</p>
                            <p className="text-item-cart">cantidad: {productCart.quantity}</p>
                            <p className="text-item-cart">precio parcial: ${isNaN(precioParcial) ? 0 : precioParcial}</p>
                            <button className="delete-button" onClick={() => deleteProductById(productCart.id)} >X</button>
                        </div>
                    );
                })
            }

            <div className="info-cart">
                <p className="text-info-cart">Precio total: ${isNaN(totalPrice()) ? 0 : totalPrice()}</p>
                <Link className="button-to-cart" to="/checkout" >Continuar con mi compra</Link>
                <button className="button-delete-cart" onClick={deleteCart} >Vaciar carrito</button>
            </div>
        </div>
    )
}
export default Cart