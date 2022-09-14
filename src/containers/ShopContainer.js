import React, {useState, useEffect} from 'react';
import ShopItemList from '../components/ShopItemList';


const ShopContainer = () => {

    const [shopItems, setShopItems] = useState([
        {name: "Plant", price: "5"},
        {name: "Table", price: "10"},
        {name: "Bottle", price: "4"},
        {name: "Chair", price: "8"},
        {name: "Charger", price: "5"}
    ])

    const [basketItems, setBasketItems] = useState([])

 return <>
    <ShopItemList shopItems ={shopItems}/>
</>
}

export default ShopContainer