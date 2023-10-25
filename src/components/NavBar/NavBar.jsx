import classes from "./NavBar.module.css"
import logo from "./assets/logo.jpg"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink,Link } from "react-router-dom"

const NavBar = () => {
    return (


        <nav className={classes.navBar}>
            <div>
                <Link to= "/">
                 <img className= {classes.logo} src= {logo} alt="" />
                </Link>
               
               
            </div>
            <div className={classes.botonera}>
                
            <NavLink to="/" className={classes.boton}>Inicio</NavLink> 
            
            <NavLink to={`/categoria/Camisetas`} className={classes.boton}>Camisetas</NavLink> 

            <NavLink to={`/categoria/Shorts`} className={classes.boton}>Shorts</NavLink>  

            <NavLink to={`/categoria/Entrenamiento`} className={classes.boton}>Entrenamiento</NavLink>  

            <NavLink to={`/categoria/Contacto`}className={classes.boton}>Contacto</NavLink> 
            </div>
            <div>
            <CartWidget/>   
            </div>
           
            
        </nav>
    )
}

export default NavBar