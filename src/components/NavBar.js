import {Link} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';


const NavBarStyle = styled.ul`
    width = 100%;
    display: flex;
    align-items: left;
    justify-content: space-between;
    background-color: olive;
    padding: 1em;
`

const NavBarStyleLi = styled.li`
    list-style-type : none;
`


const NavBarStyleLink = {
    textDecoration: "none",
    color: 'white',
    fontWeight: 'bold'
}
    

const NavBar = ({numberOfItemsInBasket}) => {

    return (
        <NavBarStyle>
            <NavBarStyleLi>
                <Link to='/' style={NavBarStyleLink}>Home</Link>
            </NavBarStyleLi>
            <NavBarStyleLi>
                <Link to='/basket' style={NavBarStyleLink}>View My Basket ({numberOfItemsInBasket})</Link>
            </NavBarStyleLi>
        </NavBarStyle>

    )
}

export default NavBar