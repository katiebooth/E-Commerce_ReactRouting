import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from '../components/NavBar';
import ErrorPage from '../components/ErrorPage';
import BasketList from '../components/BasketList'
import ShopItemList from '../components/ShopItemList';
import DisplayItem from '../components/DisplayItem';

const ShopContainer = () => {

    const [shopItems, setShopItems] = useState([
        {name: "Plant", id: 1, price: 5, details: "This bonzai plant will bring positive feng shui and zen to your home", quantity:0, url: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"},
        {name: "Table", id: 2, price: 10, details: "This sleak and stylish table is perfect for hosting dinner parties", quantity:0, url : "https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGluaW5nJTIwdGFibGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"},
        {name: "Bottle", id: 3, price: 4, details: "Never be thirsty again with this bottle which is perfect for on-the-go hydration", quantity: 0, url : "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0ZXIlMjBib3R0bGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"},
        {name: "Chair", id:4, price: 8, details: "Perfect statement piece for your home, this chair will support you whether you're reading, watching TV or working", quantity: 0, url : "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"},
        {name: "Charger", id :5, price: 5, details: "White USB charger, minimalist design", quantity: 0, url : "https://images.unsplash.com/photo-1492107376256-4026437926cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGNoYXJnZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"}
    ])

    const [basketItems, setBasketItems] = useState(()=>{
        const basketItemsJSON = localStorage.getItem('basket items')
        if (basketItemsJSON == null) {
            return []}
        else {
            return JSON.parse(basketItemsJSON)}
    })

    const incrementQuantity = ({item}) => {
        const copyItem = {...item}
        copyItem.quantity +=1
        const copyShopItems = [...shopItems]
        const indexOfItem = copyShopItems.indexOf(item)
        copyShopItems[indexOfItem].quantity = copyItem.quantity
        setShopItems(copyShopItems)
    }

    const decrementQuantity = ({item}) => {
        const copyItem = {...item}
        copyItem.quantity -=1
        const copyShopItems = [...shopItems]
        const indexOfItem = copyShopItems.indexOf(item)
        copyShopItems[indexOfItem].quantity = copyItem.quantity
        setShopItems(copyShopItems)
    }

    const getProductGivenId = (productId) => {
        return shopItems.find((item) => item.id === productId);
      };


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
  
    const numberOfItemsInBasket = ()=> {
        return basketItems.reduce((total, item) => {
            return total += item.quantity
        }, 0);
    }

 return (
    <Router>
    <NavBar numberOfItemsInBasket = {numberOfItemsInBasket()}/>
    <Routes>
        <Route path = '/' element={<ShopItemList shopItems ={shopItems} handleAddToBasket = {handleAddToBasket} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>}/>

        <Route path = '/basket' element={<BasketList basketItems = {basketItems} handleRemoveFromBasket = {handleRemoveFromBasket} />}/>

        <Route path= "/displayitem/:id" element={<DisplayItem getProductGivenId = {getProductGivenId} handleAddToBasket={handleAddToBasket}/>} />

        <Route path = '*' element={<ErrorPage/>}/>
    </Routes>
    </Router>
 )
    
}

export default ShopContainer