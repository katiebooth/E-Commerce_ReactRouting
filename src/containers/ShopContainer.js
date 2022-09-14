import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from '../components/NavBar';
import ErrorPage from '../components/ErrorPage';
import BasketList from '../components/BasketList'
import ShopItemList from '../components/ShopItemList';



const ShopContainer = () => {

    const [shopItems, setShopItems] = useState([
        {name: "Plant", price: 5},
        {name: "Table", price: 10},
        {name: "Bottle", price: 4},
        {name: "Chair", price: 8},
        {name: "Charger", price: 5}
    ])

    const [basketItems, setBasketItems] = useState(()=>{
        const basketItemsJSON = localStorage.getItem('basket items')
        if (basketItemsJSON == null) {
            return []}
        else {
            return JSON.parse(basketItemsJSON)}
    })

    const handleAddToBasket = ({item}) => {
        const copyBasketItems = [...basketItems]
        copyBasketItems.push(item)
        setBasketItems(copyBasketItems)
    }
    
    useEffect(()=> {
        localStorage.setItem('basket items', JSON.stringify(basketItems))
        }, [basketItems])

 return (
    <Router>
    <NavBar/>
    <Routes>
        <Route path = '/' element={<ShopItemList shopItems ={shopItems} handleAddToBasket = {handleAddToBasket}/>}/>
        <Route path = '/basket' element={<BasketList basketItems = {basketItems}/>}/>
        <Route path = '*' element={<ErrorPage/>}/>
    </Routes>
    </Router>
 )
    
}

export default ShopContainer