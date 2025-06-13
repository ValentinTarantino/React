import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import db from '../../db/db.js';
import FormCheckout from './FormCheckout';
import { CartContext } from '../../context/CartContext';
import './checkout.css';
import Cargando from '../ItemListContainer/Cargando'; // importa tu loader

const Checkout = () => {
    const [dataForm, setDataForm] = useState({ fullname: '', phone: '', email: '', confirmEmail: '' });
    const [orderId, setOrderId] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // estado de carga
    const { cart, deleteCart } = useContext(CartContext);

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setDataForm({ ...dataForm, [name]: value });
    };

    const totalPrice = () => {
        return cart.reduce((acc, productCart) => {
            const productTotal = parseFloat(productCart.precio) * parseInt(productCart.quantity, 10);
            return acc + (isNaN(productTotal) ? 0 : productTotal);
        }, 0);
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        if (dataForm.email !== dataForm.confirmEmail) {
            setError('Los emails no coinciden');
            return;
        }
        setError('');
        const total = totalPrice();
        if (isNaN(total)) {
            setError('El total de la orden no es válido');
            return;
        }
        const order = {
            buyer: { ...dataForm },
            products: [...cart],
            total: total,
            date: Timestamp.fromDate(new Date())
        };

        setLoading(true); // empieza a cargar
        await uploadOrder(order);
        setLoading(false); // termina de cargar
    };

    const uploadOrder = async (newOrder) => {
        try {
            const ordersRef = collection(db, 'orders');
            const response = await addDoc(ordersRef, newOrder);
            setOrderId(response.id);
            deleteCart(); 
        } catch (error) {
            console.log(error);
        }
    };

    if (loading) {
        return <Cargando />;
    }

    return (
        <div className="checkout">
            {orderId ? (
                <div>
                    <h2>Orden enviada correctamente 😁</h2>
                    <p>Guarde su número de seguimiento: {orderId}</p>
                    <Link to="/" className="button-to-home">Volver al inicio</Link>
                </div>
            ) : (
                <FormCheckout
                    dataForm={dataForm}
                    handleChangeInput={handleChangeInput}
                    handleSubmitForm={handleSubmitForm}
                    error={error}
                />
            )}
        </div>
    );
};

export default Checkout;