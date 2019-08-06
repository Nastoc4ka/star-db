import React from 'react';
import ItemDetails, {Record} from '../ItemDetails/ItemDetails';
import {With_SwapiService} from '../HOC_helper';

const StarShipDetails = (props) => {
    console.log(props);
    return (
        <ItemDetails {...props}>
            <Record field='model' label='Model'/>
            <Record field='length' label='Length'/>
            <Record field='costInCredits' label='Cost'/>
        </ItemDetails>
    );
};

const mapMathodsToProps = (swapiService) => {
    return {
        dataItem: swapiService.getShip,
        image: swapiService.getShipImage
    }
}

export default With_SwapiService(StarShipDetails, mapMathodsToProps);
