import './Navbar.scss'
import logo from '../../assets/imgs/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


export const Navbar = ({}) => {

    return (
        <header className="header" >
            <div className="header__container">
                <img src={logo} className="header__logo" alt='logo'/>

                <nav className="navbar">
                    <Link to='/' className="navbar__link">Inicio</Link>
                    <Link to='/productos/palas' className="navbar__link">Palas</Link>
                    <Link to='/productos/ropa' className="navbar__link">Ropa</Link>
                    <Link to='/productos/accesorios' className="navbar__link">Accesorios</Link>
                    <Link to='/nosotros' className="navbar__link">Nosotros</Link>
                    
                </nav>

                <CartWidget />
            </div>
        </header>
    )
}


