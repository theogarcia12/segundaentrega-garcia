import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'
import '../../sass/ItemDetail.scss'
import { createContext, useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import "../Item/Item"
const ItemDetail = ({ name, img, category, price, description, stock, productId}) => {

  const { carrito, agregarAcarrito } = useContext(CartContext);
  console.log(carrito);
  const [cantidad, setCantidad] = useState(1)

  const increment = () => {
      cantidad < stock && setCantidad(cantidad + 1)
  }

  const decrement = () => {
      cantidad > 1 && setCantidad(cantidad - 1)
  }

  
  return (
    <div className="itemDetail">
        <h1>{name}</h1>
        <p>Categoria: {category}</p>
        <img src={img} style={{width: 300}}/>
        <p>Descripcion: {description}</p>
        <p>${price}</p>
        <ItemCount 
        cantidad={cantidad} 
        stock={stock} 
        increment={increment} 
        decrement={decrement} 
        handleAgregar={() => { agregarAcarrito(productId, cantidad, name, price)} }
        />
    </div>
  )
}

export default ItemDetail