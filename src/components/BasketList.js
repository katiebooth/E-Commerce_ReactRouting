import React from 'react'
import BasketItem from './BasketItem'
import styled from 'styled-components'

const BasketListStyle = styled.ul`
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 40%;
    margin: 0 1em;
    justify-content: center;
    text-align: center;
    padding: 5px
`

const Total = styled.div`
    font-weight: bold;
    margin: 2em 100px
`

const BasketList = ({basketItems, handleRemoveFromBasket}) => {
    const currentBasket = basketItems.map((item, index) =>{
        return <BasketItem key = {index} item = {item} onRemoveFromBasket = {handleRemoveFromBasket}/>
    })

    const calculateTotal  = basketItems.reduce((total, item) => {
        return total + Number(item.price)
    }, 0)


    return (<>
    <BasketListStyle> {currentBasket}</BasketListStyle>   
    <Total>Basket Total : £{calculateTotal}</Total>
       
    </>
    )
}

export default BasketList