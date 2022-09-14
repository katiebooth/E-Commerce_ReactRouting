import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.li`
    list-style-type: none;
    display: grid;
    grid-template-rows: 1fr 5fr 1fr;
    padding: 0.5em;
    width: auto;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    white-space: pre-line

`

const ItemImage = styled.img`
    height: 250px;
    margin-bottom: 10px
`

const BasketButton = styled.button`
    border-radius: 8px;
    border: 2px solid lightgrey
`

const ShopItem = ({item, onAddToBasket}) => {

    const handleClick = () => {
        onAddToBasket({item})
    }

    return (<>
    
    <StyledItem>
        {item.name}<br></br>
        £{item.price}
        <ItemImage src={item.url}/>
        <BasketButton onClick={handleClick}>Add To Basket</BasketButton>
        
    </StyledItem>

    </>
)}

export default ShopItem