import {useEffect, useState} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import {obtainProduct} from '../../mocks/DataAccess.js'


const ItemDetailContainer = ({itemId}) => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        obtainProduct(itemId)
            .then((response) => {
                setItem(response)
            })
            .catch((error) => {
                console.log('ERROR: ', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    console.log(item)

    return (
        loading
            ? <p>Cargando Detalles del Producto...</p>
            : <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer