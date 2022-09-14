import React from 'react';
import styled from 'styled-components';

const StyledBasketItem = styled.li`
    list-style-type: none;
    display: grid;
    grid-template-rows: 1fr;
    padding: 0.5em;
    width: auto;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    white-space: pre-line

`

const BasketItem = ({item, onRemoveFromBasket}) => {

    const handleClick = () => {
        onRemoveFromBasket({item})
    }

    return (<>
    
    <StyledBasketItem>
        {item.name}
    </StyledBasketItem>
    <StyledBasketItem>
    £{item.price}
    </StyledBasketItem>
    <button onClick={handleClick}>Remove From Basket</button>
</>


)}

export default BasketItem