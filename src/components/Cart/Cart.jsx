import { useContext, useState, useEffect } from "react"
import { CartContext } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import "./cart.css"
import Cargando from "../ItemListContainer/Cargando"

const Cart = () => {
    const { cart, deleteProductById, deleteCart } = useContext(CartContext)
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Simula carga inicial (puedes ajustar el tiempo)
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    const totalPrice = () => {
        return cart.reduce((acc, productCart) => {
            const productTotal = parseFloat(productCart.precio) * parseInt(productCart.quantity, 10);
            return acc + (isNaN(productTotal) ? 0 : productTotal);
        }, 0);
    };

    const handleDeleteCart = async () => {
        setLoading(true);
        await deleteCart();
        setLoading(false);
    };

    const handleDeleteProduct = async (id) => {
        setLoading(true);
        await deleteProductById(id);
        setLoading(false);
    };

    // Loader al continuar con la compra
    const handleCheckout = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate("/checkout");
        }, 800); // Simula carga antes de navegar
    };

    if (loading) {
        return <Cargando />;
    }

    if (cart.length === 0) {
        return (
            <div className="empty-cart">
                <div>¡El carrito está vacío!</div>
                <Link to="/" className="button-home-empty-cart">Volver al inicio</Link>
            </div>
        )
    }

    return (
        <div className="cart" >
            {
                cart.map((productCart) => {
                    const precioParcial = parseFloat(productCart.precio) * parseInt(productCart.quantity, 10);
                    return (
                        <div className="item-cart" key={productCart.id}>
                            <img className="img-item-cart" src={productCart.Img} width={100} alt="" />
                            <p className="text-item-cart">{productCart.nombre}</p>
                            <p className="text-item-cart">Precio c/u: ${productCart.precio}</p>
                            <p className="text-item-cart">Cantidad: {productCart.quantity}</p>
                            <p className="text-item-cart">Precio parcial: ${isNaN(precioParcial) ? 0 : precioParcial}</p>
                            <button className="delete-button" onClick={() => handleDeleteProduct(productCart.id)} >X</button>
                        </div>
                    );
                })
            }

            <div className="info-cart">
                <p className="text-info-cart">Precio total: ${isNaN(totalPrice()) ? 0 : totalPrice()}</p>
                <button className="button-to-cart" onClick={handleCheckout}>Continuar con mi compra</button>
                <button className="button-delete-cart" onClick={handleDeleteCart} >Vaciar carrito</button>
            </div>
        </div>
    )
}
export default Cart