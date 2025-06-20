import { useState, useEffect } from "react";
import "./itemlistContainer.css";
import Itemlist from "./Itemlist.jsx";
import { useParams } from "react-router-dom";
import Cargando from "./Cargando.jsx";
import db from "../../db/db.js";
import { collection, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = ({ }) => {
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
        setLoading(true); 
        fetchProductos();
    }, [idCategory]);

    return (
        <div className="ItemListContainer">
            {loading ? <Cargando /> : <Itemlist productos={productos} />}
        </div>
    );
};

export default ItemListContainer;