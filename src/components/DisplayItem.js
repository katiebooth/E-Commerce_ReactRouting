import React from 'react';
import {useParams} from 'react-router-dom';
import IndividualItem from './IndividualItem';
import styled from 'styled-components';

const Heading = styled.h2`
text-align: center
`


const DisplayItem = ({getProductGivenId, handleAddToBasket}) =>{
    const {id}  = useParams()
    const product = getProductGivenId(Number(id))

    console.log(product)

    return (
        <>
        <Heading>Product Information : {product.name}</Heading>
            <IndividualItem item = {product} onAddToBasket={handleAddToBasket}/>
        </>
    )
}

export default DisplayItem;