import { useEffect, useState } from "react"
import { getProductsById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "../../sass/ItemDetailContainer.scss"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const {productId} = useParams()

    useEffect( () => {
        getProductsById(productId)
            .then( res => {
                setProduct(res)
            })
            .catch( error => {
                console.log(error)
            })
    }, [productId]);
  return (
    <div className="itemDetailContainer">
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer