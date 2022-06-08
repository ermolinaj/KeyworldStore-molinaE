import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"

export const ItemListContainer = ({textoBienvenida}) => {

    return(
        <div>
            <h2> {textoBienvenida} </h2>
            {
                <ItemList />
            }
        </div>
    )
}
