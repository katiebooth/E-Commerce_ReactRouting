import React from 'react';

const ShopItem = ({item, onAddToBasket}) => {

    const handleClick = () => {
        onAddToBasket({item})
    }

    return (<>
    
    <li>
        {item.name}
        <button onClick={handleClick}>Add To Basket</button>
        
    </li>

    </>
)}

export default ShopItem