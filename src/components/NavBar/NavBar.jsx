import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav style={{display: "flex", justifyContent: "space-between", alignItems:"center"}}>
            <h1>ecomerce</h1>
            <section>
                <Link to={"/category/tablets"}>Tablets </Link>
                <Link to={"/category/celulares"}>Celulares </Link>
                <Link to={"/category/computadoras"}>Computadoras </Link>
            </section>
            <CartWidget></CartWidget>
        </nav>
    );
}

export default NavBar