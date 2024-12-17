import Item from "./Item"

const Itemlist = ({ productos }) => {
    return (
        <div className="item">
            {
                productos.map((producto) => (
                    <Item producto={producto} key={producto.id} />
                ))
            }
        </div>
    )
}

export default Itemlist
