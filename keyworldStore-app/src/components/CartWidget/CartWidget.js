import './CartWidget.css';
import { FaShoppingCart } from 'react-icons/fa';

export const CartWidget = ({itemAmmount}) => {
    return(
        <button className = "widget__button"><FaShoppingCart/> {itemAmmount}</button>
    )
}