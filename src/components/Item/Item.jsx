import { Link } from "react-router-dom"
import "../../sass/Item.scss"
const Item = ({id, name, img, price, stock}) => {
  return (
    <div className="card">
        <div>
          <img src={img}/>
        </div>
        <div  className="item">
          <ul>
            <li><h1>{name} </h1></li>
            <li><h2>${price}</h2></li>
            <li><p>Stock: {stock}</p></li>
            <li><Link className="link" to={`/detail/${id}`}>Ver Detalle</Link></li>          
          </ul>
        </div>
    </div>
  )
}

export default Item