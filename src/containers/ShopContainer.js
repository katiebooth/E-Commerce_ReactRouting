import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from '../components/NavBar';
import ErrorPage from '../components/ErrorPage';
import BasketList from '../components/BasketList'
import ShopItemList from '../components/ShopItemList';

const ShopContainer = () => {

    const [shopItems, setShopItems] = useState([
        {name: "Plant", price: 5, url: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"},
        {name: "Table", price: 10, url : "https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGluaW5nJTIwdGFibGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"},
        {name: "Bottle", price: 4, url : "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0ZXIlMjBib3R0bGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"},
        {name: "Chair", price: 8, url : "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"},
        {name: "Charger", price: 5, url : "https://images.unsplash.com/photo-1492107376256-4026437926cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGNoYXJnZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"}
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

    const handleRemoveFromBasket = ({item}) => {
        const copyBasketItems = [...basketItems]
        const index = copyBasketItems.indexOf(item)
        copyBasketItems.splice(index,1)
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
        <Route path = '/basket' element={<BasketList basketItems = {basketItems} handleRemoveFromBasket = {handleRemoveFromBasket}/>}/>
        <Route path = '*' element={<ErrorPage/>}/>
    </Routes>
    </Router>
 )
    
}

export default ShopContainer