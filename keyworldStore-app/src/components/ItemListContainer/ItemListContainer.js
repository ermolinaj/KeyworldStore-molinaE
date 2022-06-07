import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { Spinner } from "react-bootstrap"
import {obtainProducts} from '../../mocks/DataAccess.js'

export const ItemListContainer = ({textoBienvenida}) => {
    
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setLoading(true)

        obtainProducts()
            .then((response) => {
                setItems(response)
            })
            .catch((error) => {
                console.log('ERROR: ', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return(
        <div>
            <h2> {textoBienvenida} </h2>

            {
                loading
                ? <span>Cargando Productos...</span>
                : <ItemList items={items}/>
            }
        </div>
    )
}
