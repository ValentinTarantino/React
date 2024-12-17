import "./itemdetail.css"

const ItemDetail = ({ producto }) => {
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
            </div>
        </div>
    )
}
export default ItemDetail