import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { getProductos } from "../../data/data.js";
import Itemlist from "./Itemlist.jsx";
import { useParams } from "react-router-dom";
import Cargando from "./Cargando.jsx";


const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);

    const { idCategory } = useParams();

    useEffect(() => {
        setLoading(true);

        getProductos()
            .then((data) => {
                if (idCategory) {
                    const filterProducts = data.filter(
                        (producto) => producto.categoria === idCategory
                    );
                    setProductos(filterProducts);
                } else {
                    setProductos(data);
                }
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [idCategory]);

    return (
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            {loading ? <Cargando /> : <Itemlist productos={productos} />} 
            </div>
    );
};

export default ItemListContainer;