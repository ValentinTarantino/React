import "./itemdetail.css"
import { useContext, useState, useRef } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"
import { toast } from "react-toastify";
import { Link } from "react-router-dom"

function MainImageZoom({ src, alt }) {
    const [showZoom, setShowZoom] = useState(false);
    const [zoomStyle, setZoomStyle] = useState({});
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const bgX = (x / rect.width) * 100;
        const bgY = (y / rect.height) * 100;
        setZoomStyle({
            display: "block",
            left: x - 60 + "px",
            top: y - 60 + "px",
            backgroundImage: `url(${src})`,
            backgroundPosition: `${bgX}% ${bgY}%`,
        });
    };

    return (
        <div
            className="lupa-container"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setShowZoom(true)}
            onMouseLeave={() => setShowZoom(false)}
        >
            <img className="lupa-img" src={src} alt={alt} />
            {showZoom && (
                <div
                    className="lupa-zoom"
                    style={{
                        ...zoomStyle,
                        backgroundImage: `url(${src})`,
                        backgroundSize: "200% 200%",
                    }}
                />
            )}
        </div>
    );
}

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
                    <MainImageZoom src={producto.Img} alt={producto.nombre} />
                </div>
            </div>

            <div className="text-detail-container">
                <h2 className="title-detail">{producto.nombre}</h2>
                <p className="text-detail">{producto.descripcion}</p>
                <p className="text-detail">
                <span className="precio-label">Precio: </span>
                <span className="precio-valor">{producto.precio}</span>
                </p>
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