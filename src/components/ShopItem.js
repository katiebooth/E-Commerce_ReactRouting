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
    margin-bottom: 10px
`

const BasketButton = styled.button`
    border-radius: 8px;
    border: 2px solid lightgrey;
    margin-bottom: 5px
`

const ShopItem = ({item, onAddToBasket}) => {

    const handleClick = () => {
        onAddToBasket({item})
    }

    // const navigate = useNavigate()

    // const navigateToProductDetails = () => {
    //     navigate(`/displayitem/:id`)
    // }

    return (<>
    
    <StyledItem>
        {item.name}<br></br>
        £{item.price}
        <ItemImage src={item.url}/>
        <BasketButton className = "button" onClick={handleClick}>Add To Basket</BasketButton>
        <Link to={`/displayitem/${item.id}`}>View Product Details</Link>
    </StyledItem>

    </>
)}

export default ShopItem