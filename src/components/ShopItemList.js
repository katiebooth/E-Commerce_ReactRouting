import React from 'react';
import ShopItem from './ShopItem';

const ShopItemList = ({shopItems, handleAddToBasket}) => {
    const listItems = shopItems.map((item, index) =>{
        return <ShopItem item = {item} key ={index} onAddToBasket = {handleAddToBasket}/>
    })

    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    )
}

export default ShopItemList