import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js";
import { useParams, useNavigate } from "react-router-dom";
import Cargando from "../ItemListContainer/Cargando.jsx";


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { idProduct } = useParams();
    const navigate = useNavigate();

    const getProducto = async () => {
        try {
            const docRef = doc(db, "products", idProduct);
            const dataDb = await getDoc(docRef);

            if (dataDb.exists()) {
                const data = { id: dataDb.id, ...dataDb.data() };
                setProducto(data);
                setLoading(false);
            } else {
                setError(true);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setError(true);
            setLoading(false);
        }
    };

    useEffect(() => {
        getProducto();
    }, [idProduct]);

    if (loading) {
        return <Cargando />;
    }

    if (error) {
        return (
            <div className="error">
                <h2>Producto no encontrado</h2>
                <button onClick={() => navigate("/")}>Volver al inicio</button>
            </div>
        );
    }

    return producto ? <ItemDetail producto={producto} /> : null;
};

export default ItemDetailContainer;