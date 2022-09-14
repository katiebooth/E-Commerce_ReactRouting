import React from 'react';
import {useParams} from 'react-router-dom';

const DisplayItem = ({selectedItem}) =>{
    
    // const indexofItem = indexOf(selectedItem)
    
    const { itemIndex}  = useParams()

    return (
        <>
        <h1>This is the item page</h1>
            <h2>{selectedItem.name}</h2>
            <p>More information about {selectedItem.name}</p>
        </>
    )
}

export default DisplayItem;