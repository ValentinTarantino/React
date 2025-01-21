import "./itemdetail.css"
import { useContext, useState } from "react"
import ItemCount from "../ItemCount/Itemcount"
import { CartContext } from "../../context/CartContext"
import { toast, } from "react-toastify";
import { Link } from "react-router-dom"

const ItemDetail = ({ producto }) => {
    const [showItemCount, setShowItemCount] = useState(true)
    const { addProduct } = useContext(CartContext)
    const AddProductInCart = (count) => {
        const productCart = { ...producto, quantity: count };
        addProduct(productCart);
        setShowItemCount(false);
        toast.success("Producto agregado al carrito!");
    };


    return (
        <div className="item-detail">
            <div className="images-detail-container">
                <div className="secondary-images">
                </div>
                <div className="main-image">
                    <img src={producto.Img} alt="" />
                </div>
            </div>

            <div className="text-detail-container">
                <h2 className="title-detail">{producto.nombre}</h2>
                <p className="text-detail">{producto.descripcion}</p>
                <p className="text-detail">Precio: ${producto.precio}</p>
                { 
                showItemCount === true ? (
                <ItemCount stock={producto.stock} AddProductInCart={AddProductInCart} />
                ) : (
                <Link to="/cart" className="finish">Terminar mi compra</Link>
                )
                }
            </div>
        </div>
    )
}
export default ItemDetail