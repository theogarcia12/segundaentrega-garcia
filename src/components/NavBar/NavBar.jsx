import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom"
import "../../sass/NavBar.scss"
const NavBar = () => {
    return (
        <nav className="navbar" style={{display: "flex", justifyContent: "space-between", alignItems:"center"}}>
            <Link className="link" to={"/"}>Inicio</Link>
            <section className="roboto-black">
                <Link className="link"  to={"/category/tablets"}>Tablets </Link>
                <Link className="link" to={"/category/celulares"}>Celulares </Link>
                <Link className="link" to={"/category/computadoras"}>Computadoras </Link>
            </section>
            <CartWidget></CartWidget>
        </nav>
    );
}

export default NavBar