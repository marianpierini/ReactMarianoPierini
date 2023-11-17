import classes from "./Item.module.css"
import { Link } from "react-router-dom"


const Item = ({id,nombre, precio,stock,img, categoria }) => {
    return (
        <div className={classes.columna}>
            <div> 
                <h2>
                    {nombre}
                </h2>
            </div>
             <div>
               <img className= {classes.imagen} src={img} alt={img} />
             </div>
               <div>
                <h2>Precio ${precio}</h2>
                 <h5>{categoria}</h5>
                <h5>Stock: {stock}</h5>       
              </div>
                <footer>
                  <Link to={`./item/${id}`} className={classes.boton}>Mas info</Link>
                </footer>
                    
        </div>
    )
}

export default Item