import React from 'react';
import './app_header.css';

const App_header = () => {
    return (
        <div className='app_header d-flex'>
            <h1>Star DB</h1>
            <ul className='d-flex '>
                <li>
                    <a href="#">People</a>
                </li>
                <li>
                    <a href="#">Planets</a>
                </li>
                <li>
                    <a href="#">Starships</a>
                </li>

            </ul>
        </div>
    )
};

export default App_header;

