import React from 'react';
import { Link } from 'react-router-dom';

const Navigation =() => {
    return(
        <ul className="app-navigation">
            <li style={{paddingBottom: '10px'}}>
                <Link 
                to="/" 
                style={{textDecoration: 'none', fontSize: '20px', color: 'white', fontWeight: 'bolder'}}> 
                Home
                </Link>
            </li>
            <li>
                <Link 
                to="/pokemon-fight" 
                style={{textDecoration: 'none', fontSize: '20px', color: 'white', fontWeight: 'bolder'}}> 
                Pokemon fight
                </Link> 
            </li>
        </ul>
    );
};

export default Navigation;