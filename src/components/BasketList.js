import React from 'react'
import BasketItem from './BasketItem'

const BasketList = ({basketItems}) => {
    const currentBasket = basketItems.map((item, index) =>{
        return <BasketItem key = {index} item = {item}/>
    })

    const calculateTotal  = basketItems.reduce((total, item) => {
        return total + Number(item.price)
    }, 0)


    return (<>
    <div> {currentBasket}</div>
    <div>Basket Total : £{calculateTotal}</div>
    </>
    )
}

export default BasketList