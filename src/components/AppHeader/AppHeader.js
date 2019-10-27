import React from 'react';
import './app_header.css';
import {Link} from 'react-router-dom';

const AppHeader = () => {
    return (
        <div className='app_header d-flex'>
            <h1>Star DB</h1>
            <ul className='d-flex '>
                <li>
                    <Link to='/people'>People</Link>
                </li>
                <li>
                    <Link to='/planets'>Planets</Link>
                </li>
                <li>
                    <Link to='/starShips'>Starships</Link>
                </li>

            </ul>
        </div>
    )
};

export default AppHeader;

