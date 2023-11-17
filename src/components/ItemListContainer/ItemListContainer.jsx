import { useEffect, useState } from "react"

import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProductos } from "../../services/firestore/productos"


const ItemListContainer = ({greeting1,greeting2}) => {
const [productos, setProductos] = useState ([]) 

const {productoCategoria} = useParams()

useEffect (() => {
  const asyncFunc = () =>  getProductos(productoCategoria)

  asyncFunc(productoCategoria)
  .then(response => {
    setProductos(response)
  })
  .catch (error => {
    console.error(error)
  })
},[productoCategoria])


    return (
        <div>
          <h1>{greeting1}</h1>
          <h2>{greeting2}</h2>
          <ItemList productos={productos}/>
        </div>
       

    )
}

export default ItemListContainer