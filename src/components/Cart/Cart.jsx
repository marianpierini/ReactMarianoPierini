import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import classes from "./Cart.module.css"

const Cart = () => {
    const {clearCart, calcularTotal, cart, totalQuantity} = useContext(CartContext)
    const total = calcularTotal()

    if (totalQuantity() === 0) {
        return (
             <div>
            <h1> El carrito esta vacio</h1>
            <Link className={classes.boton} to="/">Volver al Inicio</Link>
        </div>
        )
    }

    return (
        <div>
            {cart.map (p => <ItemCart key= {p.id} {...p}/>)}
            <h1>Total $ {total}</h1>
            <button className={classes.boton} onClick={() => clearCart()}> Limpiar Carrito</button>
            <Link className={classes.boton} to="/checkout"> Ir al Checkout</Link>

        </div>
        
    )
        
       
    
}

export default Cart