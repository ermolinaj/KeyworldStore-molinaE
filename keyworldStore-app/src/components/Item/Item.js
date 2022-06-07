import {Fragment} from "react"
import './Item.css'

const Item = ({item}) => {
    return (
        <Fragment key={item.id}>
            <h2 className="item__name">{item.name}</h2>
            <img src={"images/"+ item.imageName} className="item__image" alt="" />
            <p className="item__description">{item.description}</p>
            <dl>
                {/* TODO: create a component for the description */}
                { item.productInformation.map(pi => (
                    <>
                        <dt> { pi.key} </dt>
                        <dd> { pi.value } </dd>
                    </> 
                ))}
            </dl>
            <p className="item__price">${item.price}</p>
            <button className="item__addToCartButton">Agregar al Carrito</button>
        </Fragment>
    )
}

export default Item