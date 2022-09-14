import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
import styled from 'styled-components';

const StyledBasketItem = styled.li`
    list-style-type: none;
    display: grid;
    grid-template-rows: 1fr;
    padding: 0.5em;
    width: auto;
    justify-items: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    white-space: pre-line;
`

const BasketButton = styled.button`
    border-radius: 8px;
    border: 2px solid lightgrey;
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
    <StyledBasketItem>
    <BasketButton className = "button" onClick={handleClick}>Remove From Basket</BasketButton>
    </StyledBasketItem>
</>


)}

export default BasketItem