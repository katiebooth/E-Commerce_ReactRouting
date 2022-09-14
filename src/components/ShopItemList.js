import React from 'react';
import ShopItem from './ShopItem';
import styled from 'styled-components';

const ShopListStyle = styled.ul`
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr
`

const ShopItemList = ({shopItems, handleAddToBasket}) => {
    const listItems = shopItems.map((item, index) =>{
        return <ShopItem item = {item} key ={index} onAddToBasket = {handleAddToBasket}/>
    })

    return (
        <ShopListStyle>
            {listItems}
        </ShopListStyle>
    )
}

export default ShopItemList