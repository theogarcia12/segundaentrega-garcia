import { useState } from "react"
import "../../sass/ItemCount.scss"

const ItemCount = ({ stock, handleAgregar, decrement, increment, cantidad}) => {
    
    return (
        <>
        <div className="counter">
                <button onClick={decrement}>-</button>
                <h1>{cantidad}</h1>
                <button onClick={increment}>+</button>
        </div>
        <p className="disponibles">Disponibles: {stock}</p>
        <button className="compra" onClick={() => handleAgregar()}>
            Agregar al carrito
        </button>
    </>
    )
}

export default ItemCount;