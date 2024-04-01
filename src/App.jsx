import './styles.scss';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react';
import { CartContext } from './context/CartContext';


function App() {

  const [carrito, setCarrito] = useState([]);
  const agregarAcarrito = (productId, name, price, cantidad) => {
    const itemAgregado = {
        id: productId,
        name: name,
        price: price,
        cantidad: cantidad,
    }

    const nuevoCarrito = [...carrito];
    const estaEnCarrito = nuevoCarrito.find((prod) => prod.id === itemAgregado.id);

    if (estaEnCarrito){
        estaEnCarrito.cantidad += cantidad;
    } else {
      nuevoCarrito.push(itemAgregado)
    }
    setCarrito(nuevoCarrito)
}

  return (
    <>
      <CartContext.Provider value={ {carrito, agregarAcarrito} }>
        <BrowserRouter>

          <NavBar/>

          <Routes>
            <Route path="/" element={<ItemListContainer greetings={"Listado de Productos"}/>} />
            <Route path="/category/:categoryId" element={<ItemListContainer greetings={"Listado de Productos filtrados"}/>} />
            <Route path="/detail/:productId" element={<ItemDetailContainer/>} />
          </Routes>

        </BrowserRouter>
      </CartContext.Provider>
    </> 
  )
}

export default App
