import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "../../sass/itemListContainer.scss"
const ItemListContainer = ({greetings}) => {
    const [products, setProducts] = useState([ ])
    const {categoryId} = useParams()
    
    useEffect( () => {
        const asynFunctions = categoryId ? getProductsByCategory : getProducts
        asynFunctions(categoryId)
            .then(res => {
                setProducts(res)
            })
            .catch( error => {
                console.log(error)
            })
    }, [categoryId]) 
    return (
        <>
            <h1 >{greetings}</h1>
            <div className="h1">
                
                <ItemList products={products}/>
            </div>
        </>
    )
}

export default ItemListContainer;