import styled from 'styled-components';

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
margin-bottom: 5px
`

const IndividualItem = ({item}) => {
    return (<>
    
    <StyledItem>
        £{item.price}
        <ItemImage src={item.url}/>
        {item.details}
    </StyledItem>

    </>
)}

export default IndividualItem