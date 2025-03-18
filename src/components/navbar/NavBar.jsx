
import './NavBar.css'; 
import CartWidget from '../CartWidget/CartWidget'; 
import { LuUserRound } from "react-icons/lu";
import { Link } from 'react-router-dom';

function NavBar() {
    return(
        
        <header className='content-header'>
                <div className='content-logo'>
                 <img src="images/logo.svg" alt="" />
                </div>
                <nav className='content-navbar'>
                    <ul className='list-item'>
                        <li className='navbar-item'><Link to="/">Productos</Link></li> 
                        <li className='navbar-item'> <Link to="/categoria/rostro"> Rostro</Link></li>
                        <li className='navbar-item'><Link to="/categoria/labios">Labios</Link></li>
                        <li className='navbar-item'><Link to="/categoria/ojos">Ojos</Link></li>
                    </ul>
                </nav>
                <div className='content-buttons'>
                    <button className='button-navbar' id='user-button'><LuUserRound /></button>
                    <CartWidget />
                </div>
        </header>
      
    ); 
}
export default NavBar; 