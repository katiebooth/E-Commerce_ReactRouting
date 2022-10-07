import React from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';

const StyledItem = styled.li`
    list-style-type: none;
    display: grid;
    grid-template-rows: 1fr 5fr 1fr 1fr;
    padding: 0.5em;
    width: auto;
    justify-content: center;
    text-align: center;
    font-weight: bold;
`
const ItemImage = styled.img`
    height: 250px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto
`

const BasketButton = styled.button`
    border-radius: 8px;
    border: 2px solid lightgrey;
    height: 40px;
    margin-bottom: 5px;
    &:hover {
        background-color: darkgrey;
        color: white
    }
`
const StyledLink = styled(Link)`
    color:black;
    text-decoration: none;
    padding: 10px;
    border-radius: 8px;
    border: 2px solid lightgrey;
    margin-bottom: 10px;
    font-size: 10pt;
    font-weight: normal;
    &:hover {
        background-color: darkgrey;
        color: white
    }
`

const ShopItem = ({item, onAddToBasket, incrementQuantity, decrementQuantity}) => {

    const handleClick = () => {
        onAddToBasket({item})
    }

    const handleIncreaseQuantity = () => {
        incrementQuantity({item})
    }

    const handleDecreaseQuantity = () => {
        decrementQuantity({item})
    }

    return (<>
    
    <StyledItem>
        {item.name}<br></br>
        £{item.price}
        <ItemImage src={item.url}/>
        <p>
        Quantity
        </p>
        <div className="quantity-input">
        <button className="quantity-input__modifier quantity-input__modifier--left" onClick={handleDecreaseQuantity}>
          &mdash;
        </button>
        <input className="quantity-input__screen" type="text" value={item.quantity} readOnly />
        <button className="quantity-input__modifier quantity-input__modifier--right" onClick={handleIncreaseQuantity}>
          &#xff0b;
        </button>  
      </div>  
        <BasketButton className = "button" onClick={handleClick}>Add To Basket</BasketButton>
        <StyledLink to={`/displayitem/${item.id}`}>View Product Details</StyledLink>
    </StyledItem>

    </>
)}

export default ShopItem