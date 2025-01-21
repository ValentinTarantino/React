import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import Itemlist from "./Itemlist.jsx";
import { useParams } from "react-router-dom";
import Cargando from "./Cargando.jsx";
import db from "../../db/db.js";
import { collection, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCategory } = useParams();

    const collectionName = collection(db, 'products');

    const fetchProductos = async () => {
        try {
            let dataDb;
            if (idCategory) {
                const q = query(collectionName, where('categoria', '==', idCategory));
                dataDb = await getDocs(q);
            } else {
                dataDb = await getDocs(collectionName);
            }

            const data = dataDb.docs.map((productDb) => ({
                id: productDb.id,
                ...productDb.data(),
            }));

            setProductos(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true); // Establecer loading en true al cambiar la categoría
        fetchProductos();
    }, [idCategory]);

    return (
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            {loading ? <Cargando /> : <Itemlist productos={productos} />}
        </div>
    );
};

export default ItemListContainer;