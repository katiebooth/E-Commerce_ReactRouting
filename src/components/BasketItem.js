import React from 'react';

const BasketItem = ({item}) => {

    return (
    
    <li>
        {item.name} : £{item.price}

    </li>


)}

export default BasketItem