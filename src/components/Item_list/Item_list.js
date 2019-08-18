import React from 'react';
import './item_list.css';

const Item_list = (props) => {
    const {data, showItemDetail, children: renderItem} = props;
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

export default Item_list
