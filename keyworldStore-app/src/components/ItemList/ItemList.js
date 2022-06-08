import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import {obtainAllProductIds} from '../../mocks/DataAccess.js'

const ItemList = () => {

    const itemIds = obtainAllProductIds()

    return (
        <div>
            { 
                itemIds.map((itemId) => <ItemDetailContainer key={itemId} itemId={itemId}/>) 
            }
        </div>
    )
}

export default ItemList