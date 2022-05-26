import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget.js';

export const NavBar = () => {
    return (
        <header className="header">
            <div className="header__container">
            
                <h1 className = "header__logo">Keyworld</h1>
            
                <nav className="header__navbar">
                    <a className = "header__navlink">Teclados</a>
                    <a className = "header__navlink">Accesorios</a>
                    <a className = "header__navlink">Sets</a>
                </nav>

                <CartWidget itemAmmount={0}/>
            </div>
        </header>
    )
}