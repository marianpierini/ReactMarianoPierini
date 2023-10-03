import classes from "./CartWidget.module.css"
import cart from "./assets/cart.png"

const CartWidget = () => {
    return (
        <div>
            <img className= {classes.cart} src= {cart} alt="" />
            0
        </div>

    )
}

export default CartWidget 