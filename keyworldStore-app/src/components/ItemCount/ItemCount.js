import { useState, useEffect } from "react"

export const ItemCount = ( { itemStock }) => {
    
    const [itemAmmountSelected, setItemAmmountSelected] = useState(0)
    const [decreaseItemAmmountButtonIsShown, setDecreaseItemAmmountButtonIsShown] = useState(false)
    const [increaseItemAmmountButtonIsShown, setIncreaseItemAmmountButtonIsShown] = useState(true)

    const changeItemAmmountSelected = (ammount) =>
    {
        if (itemAmmountSelected + ammount < 0 || itemAmmountSelected + ammount > itemStock)
            console.log("There aren't enough items in stock or trying to decrease item ammount bellow 0.");
        else
            setItemAmmountSelected(itemAmmountSelected + ammount);
        // itemAmmountSelected + ammount >= 0 || itemAmmountSelected + ammount > 10  ? setItemAmmountSelected(itemAmmountSelected + ammount) : console.log("There aren't enough items in stock or trying to decrease item ammount bellow 0.")  
    }

    const showDecreaseItemAmmountButton = () => setDecreaseItemAmmountButtonIsShown(!decreaseItemAmmountButtonIsShown)
    const showIncreaseItemAmmountButton = () => setIncreaseItemAmmountButtonIsShown(!increaseItemAmmountButtonIsShown)

    useEffect(() => {  
        if (itemAmmountSelected == 0) setDecreaseItemAmmountButtonIsShown(false)
        else setDecreaseItemAmmountButtonIsShown(true);
        if (itemAmmountSelected == itemStock) setIncreaseItemAmmountButtonIsShown(false)
        else setIncreaseItemAmmountButtonIsShown(true); 
        console.log(itemAmmountSelected)
    }, [itemAmmountSelected])

    return(
        <div>
            {
                decreaseItemAmmountButtonIsShown ? <button onClick={() => changeItemAmmountSelected(-1)}>-</button> : <div/>
            }
            &nbsp; { itemAmmountSelected } &nbsp;
            {
                increaseItemAmmountButtonIsShown ? <button onClick={() => changeItemAmmountSelected(1)}>+</button> : <div/>
            }
        </div>
    )
}
