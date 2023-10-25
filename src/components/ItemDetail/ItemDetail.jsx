import classes from "./ItemDetail.module.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id,nombre, precio,stock,img, descripcion, categoria }) => {
    return (
      <div className={classes.centrar}>
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
                
                <h3>Precio: ${precio}</h3>
                <h4>{descripcion}</h4>
                
              </div>
                <footer>
                 <ItemCount initial={1} stock={stock} onAdd={(quantity)=> console.log ("Se agrego " + quantity + " unidades de " + nombre)}></ItemCount>
                </footer>
                    
        </div>
      </div>
    )
}

export default ItemDetail