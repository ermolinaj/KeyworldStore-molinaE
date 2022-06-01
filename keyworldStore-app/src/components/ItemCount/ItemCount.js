import { useState, useEffect } from "react"

export const ItemCount = ({ itemStock }) => {

    const [itemAmmountSelected, setItemAmmountSelected] = useState(0)
    const [decreaseItemAmmountButtonIsShown, setDecreaseItemAmmountButtonIsShown] = useState(false)
    const [increaseItemAmmountButtonIsShown, setIncreaseItemAmmountButtonIsShown] = useState(true)

    const changeItemAmmountSelected = (ammount) => {
        (itemAmmountSelected + ammount < 0 || itemAmmountSelected + ammount <= itemStock) ?
            setItemAmmountSelected(itemAmmountSelected + ammount) :
            console.log("There aren't enough items in stock or trying to decrease item ammount bellow 0.");
    }

    useEffect(() => {
        itemAmmountSelected == 0 ? setDecreaseItemAmmountButtonIsShown(false) : setDecreaseItemAmmountButtonIsShown(true);
        (itemAmmountSelected == itemStock) ? setIncreaseItemAmmountButtonIsShown(false) : setIncreaseItemAmmountButtonIsShown(true);
    }, [itemAmmountSelected])

    return (
        <div>
            {decreaseItemAmmountButtonIsShown ? <button onClick={() => changeItemAmmountSelected(-1)}>-</button> : <div />}
            &nbsp; {itemAmmountSelected} &nbsp;
            {increaseItemAmmountButtonIsShown ? <button onClick={() => changeItemAmmountSelected(1)}>+</button> : <div />}
        </div>
    )
}
