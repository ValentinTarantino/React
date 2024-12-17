import { useState, useEffect } from "react"
import ItemDetail from "./Itemdetail"
import { getProductos } from "../../data/data.js"
import { useParams } from "react-router-dom"
import Cargando from "../ItemListContainer/Cargando.jsx"





const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true);


    const { idProduct } = useParams()

    useEffect(() => {
        setLoading(true)

        getProductos()
            .then((data) => {
                const productoFind = data.find((dataProducto) => dataProducto.id === idProduct)
                setProducto(productoFind)
            })
            .catch((error) => console.log(error)) 
            .finally( () => setLoading(false))
    }, [idProduct])

    return (
        <>
    {
        loading  ?  <Cargando />  : <ItemDetail  producto={producto} />
    }
        </>
    )
}
export default ItemDetailContainer