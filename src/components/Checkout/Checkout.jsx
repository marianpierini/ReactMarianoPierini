import { useState,useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { collection, getDocs,where,query, Timestamp, writeBatch, documentId, addDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Checkout = () =>{
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState("")

    const {cart, calcularTotal,clearCart} = useContext(CartContext)
    const total = calcularTotal()

    const createOrder = async({nombre, email, telefono}) =>{
        setLoading(true)

        try{
            const objOrder = {
                comprador: {nombre, email, telefono},
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())

            }
            const batch = writeBatch (db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productoRef = collection(db,"productos")
            const productosAddFromFirestore = await getDocs(query(productoRef, where(documentId(), "in",ids)))
            const {docs} = productosAddFromFirestore

            docs.forEach( doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productoAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productoAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })
            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, "orders")
                const orderAdded = await addDoc (orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error ("Producto fuera de stock")
            }
        } catch (error) {
            console.log (error)
        } finally {
            setLoading(false)
        }

    }
    if(loading) {
        return <h1> Estamos generando su orden...</h1>
    }
    if (orderId) {
        
        return <h1> El id de su orden es: {orderId}</h1>
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}></CheckoutForm>
        </div>
    )
}

export default Checkout