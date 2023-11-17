import { useState } from "react";
import classes from "./CheckoutForm.module.css"

const CheckoutForm = ({onConfirm}) =>{
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            nombre, email, telefono
        }

        onConfirm(userData)
    }
    return (
            <div>
                <form className={classes.form} onSubmit={handleConfirm} >
                    <label className={classes.label} >Nombre
                        <input className={classes.input} value={nombre} type="text"onChange={({target})=> setNombre(target.value)} />
                    </label>
                    <label className={classes.label}>Email
                        <input className={classes.input} value={email} type="email"onChange={({target})=> setEmail(target.value)} />
                    </label>
                    <label className={classes.label}>Telefono
                        <input className={classes.input}  value={telefono} type="text"onChange={({target})=> setTelefono(target.value)} />
                    </label>
                    <div>
                        <button className={classes.boton} type="submit">Crear Orden</button>
                    </div>

                </form>
            </div>
    )    

}

export default CheckoutForm