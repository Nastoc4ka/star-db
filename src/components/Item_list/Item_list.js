import React from 'react';
import './item_list.css';
import With_data from '../HOC_helper';
import Swapi_service from "../../services/Swapi_service";

const Item_list = (props) => {

    const {data, renderItem, showItemDetail} = props;

    const itemsToShow = data.map((item) => {
        const {id} = item;
        const label = renderItem(item);

        return (
            <li className='list-group-item' key={id} onClick={() => {
                showItemDetail(id)
            }}>
                {label}
            </li>
        )
    });

    return (
        <ul className='item_list list-group'>{itemsToShow}</ul>
    )

};

const {getAllPeople} = new Swapi_service();

export default With_data(Item_list, getAllPeople);
