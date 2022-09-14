import {Link} from 'react-router-dom';
import React from 'react';

const NavBar = () => {
    return (
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/basket'>View My Basket</Link>
            </li>
        </ul>

    )
}

export default NavBar