import React from 'react';
import ItemDetails, {Record} from '../ItemDetails/ItemDetails';
import {With_SwapiService} from '../HOC_helper';

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field='population' label='Population'/>
            <Record field='rotation_period' label='Rotation period'/>
            <Record field='diameter' label='Diameter'/>
        </ItemDetails>
    );
};

const mapMathodsToProps = (swapiService) => {
    return {
        dataItem: swapiService.getPlanet,
        image: swapiService.getPlanetImage
    }
}

export default With_SwapiService(PlanetDetails, mapMathodsToProps);
