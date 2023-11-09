import { Link } from "react-router-dom";

const Nav=(props)=>{
    return(

        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/ejemplo1">ejemplo 1</Link></li>
                <li><Link to="/ejemplo2">ejemplo 2</Link></li>
                <li><Link to="/ejemplo3">ejemplo 3</Link></li>
            </ul>
        </nav>

       
    )
}
export default Nav;